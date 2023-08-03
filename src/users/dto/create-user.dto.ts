import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(30)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  password: string
}
