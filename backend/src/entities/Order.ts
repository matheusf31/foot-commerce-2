import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Customer from './Customer';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'customer_id ' })
  customer: Customer;

  // @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.order, {
  //   cascade: true,
  // })
  // order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
