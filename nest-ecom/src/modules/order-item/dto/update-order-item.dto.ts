import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  @IsNotEmpty()
  orderId: number;

  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  quantity: number;
}
