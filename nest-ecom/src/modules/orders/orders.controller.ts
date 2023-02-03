import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post(':userId')
  async create(@Param('userId') userId: number) {
    // return await this.ordersService.create(userId);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':userId/:orderId')
  async getOrdersByOrderId(@Param('id') id: number) {
    return await this.ordersService.getOrdersByOrderId(id);
  }

  @Get('user/:userId')
  async getAllByUserId(@Param('userId') userId: number): Promise<Order[]> {
    return await this.ordersService.findByUserId(userId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(+id, updateOrderDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(+id);
  }
}
