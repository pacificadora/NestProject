import { BaseEntity } from 'src/utils/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Product } from '../products/product.entity';

@Entity()
export class OrderItem extends BaseEntity {
  //1. order-id - onetomany relation
  @Column()
  orderId: number;
  @ManyToOne(() => Order, (order: Order) => order.orderItem)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  //2. Product-id - onetomany relation
  @ManyToOne(() => Product, (product: Product) => product.orderItem)
  @JoinColumn({ name: 'productId' })
  product: Product;

  //3. quantity
  @Column()
  quantity: number;
}
