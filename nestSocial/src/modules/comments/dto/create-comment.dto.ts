import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({
    message: 'content must be provided',
  })
  content: string;

  createdBy: string;

  updatedBy: string;
  post: import('c:/Users/Coditas/Desktop/Nestjs/nest-social-u/src/modules/posts/post.entity').PostEntity;
}
