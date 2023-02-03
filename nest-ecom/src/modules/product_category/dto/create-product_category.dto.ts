import { IsNotEmpty } from 'class-validator';

export class CreateProductCategoryDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;
}
