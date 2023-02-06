import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post(':userId')
  async create(
    @Body() postData: CreatePostDto,
    @Param('userId') userId: number,
  ): Promise<PostEntity> {
    return await this.postService.createPost(postData, userId);
  }

  @Get('/findbyuserid/:userId')
  findOne(@Param('userId') userId: number) {
    return this.postService.getPostByUser(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}

// @Patch(':id')
// async update(@Param('id') id: number, @Body() updateUserDto: UpdatePostDto) {
//   return await this.postService.update(id, updateUserDto);
// }
