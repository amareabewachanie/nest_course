import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.schema';
import { AuthRepository } from './repositories/auth.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthRepository],
})
export class AuthModule {}
