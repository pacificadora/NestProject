/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { Cart } from './cart.entity';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly ordersService: OrdersService,
  ) {}
  async create(
    createCartDto: CreateCartDto,
    userId: number,
    productId: number,
  ) {
    if (this.getCartByUserId(userId) && this.getCartByProductId(productId)) {
      //get quantity and add to the existing record
      const quantity = (
        await this.cartRepository.getCartQuantityByUserAndProductId(
          userId,
          productId,
        )
      ).quantity;
      const quant = quantity+createCartDto.quantity;
      return this.updateQuantity(quant, userId, productId);

    }
    return this.cartRepository.createCart(createCartDto, userId, productId);
  }
  async getCartByProductId(productId: number) {
    return this.cartRepository.findCartByProductId(productId);
  }

  async getCartByUserId(userId: number): Promise<Cart[]> {
    return this.cartRepository.getCartByUserId(userId);
  }

  async updateQuantity(quantity: number, userId: number, productId: number){
    return this.cartRepository.updateQuantity(quantity, userId, productId);
  }

  async update(updateCartDto: UpdateCartDto) {
    const cartProductQuantity = await this.cartRepository.update(updateCartDto);
    this.ordersService.create(
      updateCartDto.productId,
      updateCartDto.userId,
      cartProductQuantity,
    );
    //save it to order
    // const { productId, userId } = await this.cartRepository.getCartById(cartId);
    // this.ordersService.create(productId, userId);
    //order->order-item
  }

  async getCartById(cartId: number) {
    await this.cartRepository.getCartById(cartId);
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
