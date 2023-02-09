/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  paymentComplete: boolean;

  createdBy: string;

  updatedBy: string;
}
