import { BaseEntity } from 'src/utils/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';

@Entity()
export class Cart extends BaseEntity {
  @ManyToOne(() => Product, (product: Product) => product.cart)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne(() => User, (user: User) => user.cart)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  quantity: number;

  @Column()
  productId: number;

  @Column()
  userId: number;

  @Column()
  checkout: boolean;
}
