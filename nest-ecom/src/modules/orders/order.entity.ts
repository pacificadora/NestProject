import { BaseEntity } from 'src/utils/entity/base.entity';
import {
  Entity,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
  Column,
} from 'typeorm';
import { OrderItem } from '../order-item/order-item.entity';
import { Payment } from '../payments/payment.entity';
import { User } from '../users/user.entity';

@Entity()
export class Order extends BaseEntity {
  @OneToOne(() => Payment, (payment: Payment) => payment.order)
  payment: Payment;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.order)
  orderItem: OrderItem;
}
