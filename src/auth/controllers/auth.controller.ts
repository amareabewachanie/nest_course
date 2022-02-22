import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user';
import { AuthRepository } from '../repositories/auth.repository';

@Controller('auth')
export class AuthController {
  constructor(private userDb: AuthRepository) {}
  @Post('login')
  async login(@Body() user: User) {
    return this.userDb.login(user);
  }
  @Post('register')
  async register(@Body() user: User): Promise<User> {
    const createdUser = await this.userDb.register(user);
    return {
      userName: createdUser.userName,
      roles: createdUser.roles,
      password: '',
      _id: createdUser._id,
    };
  }
}
