/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { OrdersService } from '../orders/orders.service';
import { ProductsService } from '../products/products.service';
import { OrderItem } from './order-item.entity';

@Injectable()
export class OrderItemRepository {
  constructor(
    @InjectRepository(OrderItem) private orderItemModel: Repository<OrderItem>,
    private readonly productService: ProductsService,
  ) {}


  async createOrderItem(
    orderId: number,
    productId: number,
    productQuantity: number
  ) {
    const orderItem: OrderItem = new OrderItem();
    orderItem.orderId = orderId;
    orderItem.product = await this.productService.findOne(productId);
    orderItem.quantity = productQuantity;
    return this.orderItemModel.save(orderItem);
  }

  async findAll(): Promise<OrderItem[]> {
    return this.orderItemModel.find();
  }

  async findById(id: number): Promise<OrderItem> {
    return this.orderItemModel.findOne({ where: { id: id } });
  }

  async findByOrderId(orderId: number): Promise<OrderItem[]> {
    return this.orderItemModel.find({
      relations: ['Order'],
      where: { id: orderId },
    });
  }

  async findByProductId(productId: number): Promise<OrderItem[]> {
    return this.orderItemModel.find({
      relations: ['Product'],
      where: { id: productId },
    });
  }

  async remove(id: number) {
    return this.orderItemModel.delete(id);
  }
}
