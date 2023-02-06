import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostService } from '../posts/post.service';
import { UserService } from '../users/user.service';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private commentModel: Repository<CommentEntity>,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  //creation
  async createComment(commentData: CreateCommentDto, postId: number) {
    // let comment: CommentEntity = new CommentEntity();
    // comment.data = commentData.content;
    // comment.createdBy = commentData.createdBy;
    // comment.updatedBy = commentData.updatedBy;
    // comment.createdOn = new Date();
    // comment.updatedOn = new Date();
    // comment.post = await this.postService.getPostByPostId(postId);
    const post = this.postService.getPostByPostId(postId);
    if (post != undefined) {
      commentData.post = await this.postService.getPostByPostId(postId);
      return await this.commentModel.save(commentData);
    } else {
      throw new NotAcceptableException('no post by this postid');
    }
  }

  //reading
  async getAllComment(): Promise<CommentEntity[]> {
    return await this.commentModel.find();
  }
  async getCommentByUserId(userId: number): Promise<CommentEntity[]> {
    return await this.commentModel.find({
      relations: ['post'],
      where: { post: { user: { id: userId } } },
    });
  }
  async getCommentByPostId(postId: number): Promise<CommentEntity[]> {
    const comments = this.commentModel.find({
      relations: ['post'],
      where: { post: { id: postId } },
    });
    if (comments) {
      return comments;
    } else {
      throw new NotAcceptableException('not found');
    }
  }

  //update

  //delete
  async removeCommentsById(id: number) {
    return await this.commentModel.delete(id);
  }
}
