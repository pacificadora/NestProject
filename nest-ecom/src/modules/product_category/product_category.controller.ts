import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { ProductCategory } from './product_category.entity';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryService.create(createProductCategoryDto);
  }

  @Get()
  async findAll(): Promise<ProductCategory[]> {
    return await this.productCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productCategoryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return await this.productCategoryService.update(
      id,
      updateProductCategoryDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productCategoryService.remove(id);
  }
}
