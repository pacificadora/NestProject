/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  userId: number;

  async create(
    productId: number[],
    userId: number,
    cartProductQuantity: number[],
  ) {
    return this.orderRepository.createOrder(productId, userId, cartProductQuantity);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAllOrders();
  }

  async getOrdersByOrderId(id: number): Promise<Order> {
    return this.orderRepository.findByOrderId(id);
  }

  async findByUserId(id: number): Promise<Order[]> {
    return this.orderRepository.findOrderByUserId(id);
  }
  remove(id: number) {
    return this.orderRepository.remove(id);
  }
}
