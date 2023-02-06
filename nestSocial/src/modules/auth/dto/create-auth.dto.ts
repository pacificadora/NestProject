/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({
    message: 'email must be provided',
  })
  email: string;

  @IsNotEmpty({
    message: 'password must be provided',
  })
  password: string;
}
