/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { ProductCategory } from './product_category.entity';

@Injectable()
export class ProductCategoryRepository {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryModel: Repository<ProductCategory>,
  ) {}

  async createProductCategory(createProductCategoryDto: CreateProductCategoryDto){
    return this.productCategoryModel.save(createProductCategoryDto);
  }

  async findAll(): Promise<ProductCategory[]>{
    return this.productCategoryModel.find();
  }

  async findById(id: number): Promise<ProductCategory>{
    return this.productCategoryModel.findOne({where: {id: id}});
  }

  async updateCategory(id: number, updateProductCategoryDto: UpdateProductCategoryDto){
    return this.productCategoryModel.update(id, updateProductCategoryDto);
  }

  async remove(id: number){
    return this.productCategoryModel.delete(id);
  }

  //api tested...up and running
}
