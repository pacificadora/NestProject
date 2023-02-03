import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post(':userId/:productId')
  async create(
    @Body() createCartDto: CreateCartDto,
    @Param('userId') userId: number,
    @Param('productId') productId: number,
  ) {
    return await this.cartsService.create(createCartDto, userId, productId);
  }

  @Get(':userId')
  //wohi wali cart jaha checkout false ho.
  async getCartByUserId(@Param('userId') userId: number) {
    return this.cartsService.getCartByUserId(userId);
  }

  @Get('/cart/:cartId')
  async getCartById(@Param('cartId') cartId: number) {
    return this.cartsService.getCartById(cartId);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto) {
  //   return this.cartsService.update(id, updateCartDto);
  // }
  @Patch('/checkout')
  async update(@Body() updateCartDto: UpdateCartDto) {
    return await this.cartsService.update(updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
