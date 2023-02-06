import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../constants/entity/base.entity';
import { CommentEntity } from '../comments/comment.entity';
import { UserEntity } from '../users/user.entity';

@Entity()
export class PostEntity extends BaseEntity {
  @Column({
    type: 'varchar',
  })
  content!: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.post)
  comments: CommentEntity;
}
