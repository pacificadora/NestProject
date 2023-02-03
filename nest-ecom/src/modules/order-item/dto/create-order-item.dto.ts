import { IsNotEmpty } from 'class-validator';

export class CreateOrderItemDto {
  // @IsNotEmpty()
  // orderId: number;

  // @IsNotEmpty()
  // productId: number;

  @IsNotEmpty()
  quantity: number;
}
