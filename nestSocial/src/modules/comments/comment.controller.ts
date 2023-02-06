import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/:postId')
  async create(
    @Body() commentData: CreateCommentDto,
    @Param('postId') postId: number,
  ): Promise<CommentEntity> {
    return await this.commentService.createComment(commentData, postId);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get('/user/:id')
  findOneByUserId(@Param('id') id: number) {
    return this.commentService.findByUserId(id);
  }
  @Get('/post/:postId')
  async findOneByPostId(@Param('postId') postId: number) {
    return await this.commentService.findByPostId(postId);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentService.deleteComments(id);
  }
}
