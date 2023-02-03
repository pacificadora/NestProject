/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItemService } from '../order-item/order-item.service';
import { Order } from './order.entity';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order) private orderModel: Repository<Order>,
    private orderItemService: OrderItemService,
  ){}

  // async createOrders(productId, userId) {
  //   let order: Order = new Order();
  //   //console.log('creating order----', order)
  //   // order.user = await this.userService.findOne(userId);
  //   order.createdBy = order.user.username;
  //   //console.log('order created---', order.user)
  //   const cart: Cart = this.cartService.getCartById(cartId);
  //   this.orderService.userId = cart.userId
  //   this.orderItemService.productId = cart.productId; //
  //   return this.orderModel.save({ userId });
  // }

  async createOrder(
    productId: number[],
    userId: number,
    cartProductQuantity: number[],
  ) {
    let order: Order = new Order();
    order.createdBy = "abc";
    order.userId = userId;
    const {id} = await this.orderModel.save(order)
    //this.orderItemModel.create(order.id, productId, cartProductQuantity);
    this.orderItemService.create(id, productId, cartProductQuantity);
  }

  async findAllOrders(): Promise<Order[]> {
    return this.orderModel.find();
  }

  async findOrderByUserId(userId: number): Promise<Order[]> {
    return this.orderModel.find({
      relations: ['user'],
      where: { user: { id: userId } },
    });
  }

  async findByOrderId(id): Promise<Order> {
    return await this.orderModel.findOne({ where: { id: id } });
  }

  async remove(id) {
    return this.orderModel.delete(id);
  }
}
