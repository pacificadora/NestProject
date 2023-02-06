import { IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty({
    message: 'username must be provided',
  })
  content: string;

  @IsNotEmpty()
  userId: number;

  updatedBy: string;
}
