import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNotEmpty({
    message: 'name cant be empty',
  })
  name: string;

  @IsNotEmpty({
    message: 'Price cant be empty',
  })
  price: number;

  @IsNotEmpty({
    message: 'Desc cant be empty',
  })
  description: string;

  createdBy: string;

  updatedBy: string;

  // @IsNotEmpty()
  // prodCatId: number;
}
