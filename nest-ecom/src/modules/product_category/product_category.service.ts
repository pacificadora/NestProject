import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { ProductCategory } from './product_category.entity';
import { ProductCategoryRepository } from './product_category.repositry';

@Injectable()
export class ProductCategoryService {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryRepository.createProductCategory(
      createProductCategoryDto,
    );
  }

  async findAll(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.findAll();
  }

  async findOne(id: number): Promise<ProductCategory> {
    return this.productCategoryRepository.findById(id);
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    return this.productCategoryRepository.updateCategory(
      id,
      updateProductCategoryDto,
    );
  }

  async remove(id: number) {
    return this.productCategoryRepository.remove(id);
  }
}
