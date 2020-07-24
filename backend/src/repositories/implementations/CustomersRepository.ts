import { getRepository, Repository } from 'typeorm';
import Customer from '../../entities/Customer';

import ICustomersRepository from '../models/ICustomersRepository';
import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const findCustomer = await this.ormRepository.findOne({
      where: {
        id,
      },
      select: ['id', 'name', 'email'],
    });

    return findCustomer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const findCustomerWithSameEmail = await this.ormRepository.findOne({
      where: {
        email,
      },
      select: ['id', 'name', 'email'],
    });

    return findCustomerWithSameEmail;
  }

  public async create({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const customer = await this.ormRepository.create({ name, email });

    this.ormRepository.save(customer);

    return customer;
  }
}

export default CustomersRepository;
