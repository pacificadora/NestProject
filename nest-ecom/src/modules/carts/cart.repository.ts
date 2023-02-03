/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { Cart } from './cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartRepository {
  constructor(
    @InjectRepository(Cart) private cartModel: Repository<Cart>,
    private readonly userService: UsersService,
    private readonly productService: ProductsService,
  ) {}
  async createCart(
    createCartDto: CreateCartDto,
    userId: number,
    productId: number,
  ) {
    const cart = new Cart();
    cart.user = await this.userService.findOne(userId);
    cart.product = await this.productService.findOne(productId);
    cart.quantity = createCartDto.quantity;
    cart.checkout = false;
    // cart
    return this.cartModel.save(cart);
  }

  async getCartByUserId(userId: number): Promise<Cart[]> {
    return this.cartModel.find({ where: { userId: userId, checkout: false } });
  }

  async getUserByCartId(cartId: number): Promise<Cart[]> {
    return this.cartModel.find({ relations: ['user'] });
  }

  async getCartById(cartId: number): Promise<Cart> {
    return this.cartModel.findOne({
      where: { id: cartId },
      relations: ['user'],
    });
  }

  async findCartByProductId(productId): Promise<Cart> {
    return await this.cartModel.findOne({ where: { productId: productId } });
  }

  async update(updateCartDto: UpdateCartDto): Promise<number[]> {
    const cartProductQuantity = [];
    console.log(updateCartDto.productId);

    updateCartDto.productId.forEach(async (element) => {
      const cartRow: Cart = await this.findCartByProductId(element);
      const { id, quantity } = cartRow;
      console.log(cartRow);
      cartProductQuantity.push(quantity);
      cartRow.checkout = true;
      console.log('quantity >>>>>> ', cartProductQuantity);
      await this.cartModel.update(id, cartRow);

    });
    console.log("cartProductQuantity", cartProductQuantity);
    
    return cartProductQuantity;
  }

  async getCartQuantityByUserAndProductId(userId, productId) {
    return this.cartModel.findOne({
      where: { userId: userId, productId: productId },
    });
  }

  async updateQuantity(quantity: number, userId: number, productId: number) {
    const cart = this.cartModel.findOne({
      where: { userId: userId, productId: productId },
    });
    (await cart).quantity = quantity;
    this.cartModel.update((await cart).id, await cart);
  }
}
