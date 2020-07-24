import Customer from '../../entities/Customer';

import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';

export default interface ICustomersRepository {
  create({ name, email }: ICreateCustomerDTO): Promise<Customer>;
  findByEmail(email: string): Promise<Customer | undefined>;
  findById(id: string): Promise<Customer | undefined>;
}
