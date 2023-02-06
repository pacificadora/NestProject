import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({
    message: 'username must be provided',
  })
  content: string;

  createdBy: string;

  updatedBy: string;
}
