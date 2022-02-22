import {
  IsArray,
  IsBoolean,
  IsInt,
  IsMongoId,
  IsString,
} from 'class-validator';

export class User {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString() userName: string;
  @IsString() password: string;
  @IsArray() roles: string[];
}
