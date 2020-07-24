import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '../models/IOrdersRepository';
import ICreateOrderDTO from '../../dtos/ICreateOrderDTO';
import Order from '../../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const newOrder = await this.ormRepository.create({
      customer,
      order_products: products,
    });

    await this.ormRepository.save(newOrder);

    return newOrder;
  }
}

export default OrdersRepository;
