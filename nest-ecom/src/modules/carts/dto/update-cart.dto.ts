import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsArray()
  productId: number[];

  @IsNotEmpty()
  userId: number;
}
