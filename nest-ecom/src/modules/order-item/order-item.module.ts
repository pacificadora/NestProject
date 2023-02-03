import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './order-item.entity';
import { ProductsModule } from '../products/products.module';
import { OrderItemRepository } from './order-item.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem]), ProductsModule],
  controllers: [OrderItemController],
  providers: [OrderItemService, OrderItemRepository],
  exports: [OrderItemService],
})
export class OrderItemModule {}
