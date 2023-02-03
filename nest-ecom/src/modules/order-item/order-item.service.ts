import { Injectable } from '@nestjs/common';
import { OrderItemRepository } from './order-item.repository';

@Injectable()
export class OrderItemService {
  constructor(private readonly orderItemRepository: OrderItemRepository) {}

  orderId: number;
  productId: number;

  async create(
    orderId: number,
    productId: number[],
    cartProductQuantity: number[],
  ) {
    for (let i = 0; i < productId.length; i++) {
      this.orderItemRepository.createOrderItem(
        orderId,
        productId[i],
        cartProductQuantity[i],
      );
    }
  }

  async findAll() {
    return this.orderItemRepository.findAll();
  }

  async findOne(id: number) {
    return this.orderItemRepository.findByOrderId(id);
  }

  async findByOrderId(orderId: number) {
    return this.orderItemRepository.findByOrderId(orderId);
  }

  async findByProductId(productId: number) {
    return this.orderItemRepository.findByProductId(productId);
  }

  // update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
  //   return `This action updates a #${id} orderItem`;
  // }

  async remove(id: number) {
    return this.orderItemRepository.remove(id);
  }
}
