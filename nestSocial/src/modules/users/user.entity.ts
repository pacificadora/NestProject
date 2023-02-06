import { BaseEntity } from '../../constants/entity/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { PostEntity } from '../posts/post.entity';
import { CommentEntity } from '../comments/comment.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  username: string;

  @Column()
  role: string;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.user)
  posts: PostEntity[];

  // @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.user)
  // comments: CommentEntity[];
}
