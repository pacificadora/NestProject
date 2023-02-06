import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  //create the post
  async createPost(postData: CreatePostDto, userId: number) {
    //validate
    return await this.postRepository.createPost(postData, userId);
  }

  //delete the post
  async deletePost(id) {
    await this.postRepository.remove(id);
  }

  //see all the posts by that perticular user
  async getPostByUser(id): Promise<PostEntity[]> {
    return await this.postRepository.getPostByUserId(id);
  }

  //get the post by postid
  async getPostByPostId(id: number) {
    return this.postRepository.getPostByPostId(id);
  }
  //get all the posts
  // async getAllPost(): Promise<PostEntity[]> {
  //   return await this.postRepository.getAll();
  // }

  //edit the post/update the post
  // async update(id, postData: UpdatePostDto) {
  //   return await this.postRepository.updatePost(id, postData);
  // }
}
