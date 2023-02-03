/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { Order } from '../orders/order.entity';
import { OrdersService } from '../orders/orders.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  // @Post('/:userId')
  // async create(
  //   @Body() createOrderItemDto: CreateOrderItemDto,
  //   @Param('userId') userId: number,
  // ) {
  //   const user: User = await this.userService.findOne(userId);
  //   const orders: Order[] = await this.orderService.findByUserId(userId);

  //   return this.orderItemService.create(createOrderItemDto);
  // }
  @Get()
  findAll() {
    return this.orderItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateOrderItemDto: UpdateOrderItemDto,
  // ) {
  //   return this.orderItemService.update(+id, updateOrderItemDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderItemService.remove(id);
  }
}
