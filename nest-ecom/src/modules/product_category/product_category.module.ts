import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { ProductCategoryController } from './product_category.controller';
import { ProductCategoryRepository } from './product_category.repositry';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './product_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, ProductCategoryRepository],
  exports: [ProductCategoryService],
})
export class ProductCategoryModule {}
