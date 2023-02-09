/* eslint-disable prettier/prettier */
import { BaseEntity } from 'src/utils/entity/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity()
export class Payment extends BaseEntity {
  @Column()
  paymentComplete: boolean;
  

  @OneToOne(() => Order, (order: Order) => order.payment)
  @JoinColumn({name: 'orderId'})
  order: Order;
}
