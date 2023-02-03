/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategoryService } from '../product_category/product_category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product) private productsModel: Repository<Product>,
    private readonly productCategoryService: ProductCategoryService
  ) {}

  async createProduct(createProductDto: CreateProductDto, categoryId: number){
    const product: Product = new Product();
    product.productCategory = await this.productCategoryService.findOne(categoryId);
    product.createdBy = createProductDto.createdBy;
    product.description = createProductDto.description;
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    return this.productsModel.save(product);
  }

  async findAllProd(): Promise<Product[]>{
    return this.productsModel.find();
  }

  async findById(id: number): Promise<Product>{
    return this.productsModel.findOne({where: {id: id}});
  }

  async findByProductCategory(id: number): Promise<Product[]>{
    const products = await this.productsModel.find({
      relations: ['productCategory'],
      where: {productCategory: {id: id}},
    })
    if(products) return products;
  }

  async updateProduct(id: number, updateProductDto:UpdateProductDto){
    return this.productsModel.update(id, updateProductDto);
  }

  async remove(id: number){
    return this.productsModel.delete(id);
  }

  //all apis tested.

}
