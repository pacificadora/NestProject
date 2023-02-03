import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { CartRepository } from './cart.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';
import { OrderItemModule } from '../order-item/order-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart]),
    UsersModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [CartsController],
  providers: [CartsService, CartRepository],
  exports: [CartsService],
})
export class CartsModule {}
