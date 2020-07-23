import { getCustomRepository } from 'typeorm';

import Customer from '../entities/Customer';
import CustomersRepository from '../repositories/CustomerRepository';

import AppError from '../errors/AppError';

interface IRequest {
  email: string;
}

class CreateCustomerService {
  public async execute({ email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const findCustomer = await customersRepository.findByEmail(email);

    if (!findCustomer) {
      throw new AppError('Não existe usuário com este email.');
    }

    return findCustomer;
  }
}

export default CreateCustomerService;
