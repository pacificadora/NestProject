import { BaseEntity } from 'src/utils/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Cart } from '../carts/cart.entity';
import { OrderItem } from '../order-item/order-item.entity';
import { ProductCategory } from '../product_category/product_category.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({
    type: 'varchar',
    unique: true,
  })
  name: string;

  @Column({
    type: 'int',
  })
  price: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  description: string;

  @Column()
  prodCatId: number;
  @ManyToOne(
    () => ProductCategory,
    (productCategory: ProductCategory) => productCategory.product,
  )
  @JoinColumn({ name: 'prodCatId' })
  productCategory: ProductCategory;

  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.product)
  orderItem: OrderItem;

  @OneToMany(() => Cart, (cart: Cart) => cart.product)
  cart: Cart;
}
