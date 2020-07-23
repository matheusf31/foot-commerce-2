import { EntityRepository, Repository } from 'typeorm';
import Customer from '../../entities/Customer';

import ICustomersRepository from '../models/ICustomersRepository';

interface ICreateCustomerDTO {
  name: string;
  email: string;
}

// SO L ID -> desconectar o typeorm do service

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer>
  implements ICustomersRepository {
  public async findByEmail(email: string): Promise<Customer | undefined> {
    const findCustomerWithSameEmail = await this.findOne({
      where: {
        email,
      },
    });

    return findCustomerWithSameEmail;
  }

  // public create({ name, email }: ICreateCustomerDTO): Customer {
  //   const customer = new Customer({ name, email });

  //   this.customers.push(customer);

  //   return customer;
  // }
}

export default CustomersRepository;
