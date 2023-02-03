import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post(':categoryId')
  async create(
    @Body() createProductDto: CreateProductDto,
    @Param('categoryId') categoryId: number,
  ) {
    return await this.productsService.create(createProductDto, categoryId);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productsService.findOne(id);
  }

  //find products by product category
  @Get('category/:categoryId')
  async findByProductCategory(
    @Param('categoryId') categoryId: number,
  ): Promise<Product[]> {
    return await this.productsService.findByProductCategory(categoryId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productsService.remove(id);
  }
}
