/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { CartsModule } from './modules/carts/carts.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductCategoryModule } from './modules/product_category/product_category.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ProductCategoryModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    OrderItemModule,
    AuthModule,
    PaymentsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
