import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  AfterLoad,
  getRepository,
} from 'typeorm';
import OrdersProducts from './OrdersProducts';
import { productsSeed } from '../database/seeds/product.seed';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.product)
  order_products: OrdersProducts[];

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
