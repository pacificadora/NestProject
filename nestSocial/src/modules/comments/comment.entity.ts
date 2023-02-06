import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/constants/entity/base.entity';
import { UserEntity } from '../users/user.entity';
import { PostEntity } from '../posts/post.entity';

@Entity()
export class CommentEntity extends BaseEntity {
  @Column({
    type: 'varchar',
  })
  data: string;

  @ManyToOne(() => PostEntity, (post: PostEntity) => post.comments)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;
}
