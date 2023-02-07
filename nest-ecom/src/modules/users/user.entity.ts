/* eslint-disable prettier/prettier */
import { BaseEntity } from 'src/utils/entity/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Cart } from '../carts/cart.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class User extends BaseEntity {
  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

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
  address: string;

  @Column({
    type: 'varchar',
  })
  role: string;

  @OneToMany(() => Order, (order: Order) => order.user)
  orders: Order[];

  @OneToMany(() => Cart, (cart: Cart) => cart.user)
  cart: Cart[];
}
