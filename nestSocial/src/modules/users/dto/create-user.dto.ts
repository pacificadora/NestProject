/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  //ye main user(client) se expect kr rha hu ki muje data iss format me bhejega

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;

  @IsNotEmpty({
    message: 'username must be provided',
  })
  username: string;

  createdBy: string;

  updatedBy: string;

  role: string;
}
