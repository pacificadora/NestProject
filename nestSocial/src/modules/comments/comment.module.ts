import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../posts/post.module';
import { UserModule } from '../users/user.module';
import { CommentController } from './comment.controller';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), PostModule, UserModule],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: [CommentService],
})
export class CommentModule {}
