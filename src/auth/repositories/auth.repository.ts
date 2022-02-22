import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../constants/constants';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}
  async login(user: User) {
    const userFromDb = await this.userModel.findOne({
      userName: user.userName,
    });
    if (!userFromDb) {
      console.log("User doesn't exist");
      throw new UnauthorizedException("User doesn't exist");
    }
    const isMatch = await bcrypt.compare(user.password, userFromDb.password);
    if (!isMatch) {
      console.log("Password doesn't match");
      throw new UnauthorizedException("Password doesn't match");
    }
    const jwtToken = jwt.sign(
      {
        userName: userFromDb.userName,
        roles: userFromDb.roles,
        _id: userFromDb._id,
      },
      jwtConstants.secret,
      {
        expiresIn: '2 days',
      },
    );
    return { token: jwtToken };
  }
  async register(user: User): Promise<User> {
    const userFromDb = await this.userModel.findOne({
      userName: user.userName,
    });
    if (userFromDb) {
      throw new UnauthorizedException('The email already exists');
    }
    const saltOrRounds = 10;
    const salt = await bcrypt.genSalt(saltOrRounds);
    user.password = await bcrypt.hash(user.password, salt);
    return this.userModel.create(user);
  }
}
