import Order from '../../entities/Order';

import ICreateOrderDTO from '../../dtos/ICreateOrderDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
}
