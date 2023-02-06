/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UserService } from '../users/user.service';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(PostEntity) private postModel: Repository<PostEntity>,
    private readonly userService: UserService,
  ) {}

  //creation
  async createPost(
    postData: CreatePostDto,
    userId: number,
  ): Promise<PostEntity> {
    let post: PostEntity = new PostEntity();
    post.content = postData.content;
    post.createdBy = postData.createdBy;
    post.updatedBy = postData.updatedBy;
    post.createdOn = new Date();
    post.user = await this.userService.findByOneId(userId);
    return await this.postModel.save(post);
  }

  //deletion of post
  async remove(id) {
    return await this.postModel.delete(id);
    //deletion of comments related to that posts
  }

  //display posts by usersPostEntity
  async getPostByUserId(userId: number): Promise<PostEntity[]> {
    const post = await this.postModel.find({
      relations: ['user'],
      where: { user: { id: userId } },
    });
    if (post) {
      return post;
    }
  }

  async getPostByPostId(id: number) {
    return this.postModel.findOne({ where: { id: id } });
  }

  // async getAll(): Promise<PostEntity[]> {
  //   return await this.postModel.find();
  // }

  //update/edit the posts.
  //id1 = konse user ka post h. get the user.
  //id2 = konsa post delete krna h
  // async updatePost(id: number, postData: UpdatePostDto) {
  //   return await this.postModel.update(id, postData);
  // }
}
