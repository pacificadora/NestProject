import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(
    createProductDto: CreateProductDto,
    categoryId: number,
  ): Promise<Product> {
    return this.productRepository.createProduct(createProductDto, categoryId);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAllProd();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findById(id);
  }

  async findByProductCategory(id: number): Promise<Product[]> {
    return this.productRepository.findByProductCategory(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.updateProduct(id, updateProductDto);
  }

  async remove(id: number) {
    return this.productRepository.remove(id);
  }
}
