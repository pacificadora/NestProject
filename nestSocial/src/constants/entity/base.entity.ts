import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy!: string;

  @Column({
    default: new Date(),
  })
  updatedBy!: string;

  @CreateDateColumn({
    default: new Date(),
  })
  createdOn!: Date;

  @CreateDateColumn({
    default: new Date(),
  })
  updatedOn!: Date;

  @DeleteDateColumn({
    default: null,
  })
  deletedOn?: Date;
}
