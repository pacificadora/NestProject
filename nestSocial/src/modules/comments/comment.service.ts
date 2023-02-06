import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  //creation
  async createComment(commentData: CreateCommentDto, postId: number) {
    return await this.commentRepository.createComment(commentData, postId);
  }

  //reading
  async findAll(): Promise<CommentEntity[]> {
    return await this.commentRepository.getAllComment();
  }
  async findByUserId(id: number): Promise<CommentEntity[]> {
    return await this.commentRepository.getCommentByUserId(id);
  }
  async findByPostId(postId: number): Promise<CommentEntity[]> {
    return this.commentRepository.getCommentByPostId(postId);
  }

  //update

  //delete
  async deleteComments(id: number) {
    return await this.commentRepository.removeCommentsById(id);
  }
}
