/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
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

  // @IsNotEmpty()
  // prodCatId: number;
}
