import { getCustomRepository } from 'typeorm';

import Customer from '../entities/Customer';
import CustomersRepository from '../repositories/CustomerRepository';

import AppError from '../errors/AppError';
/**
 * recebimento das infos
 * tratativa de erros
 * acesso ao repo
 */

/*
 * pq repetir interfaces? Pode ser que na hora de criar o dado na database
 * eu envio alguns dados que não serão necessários pro service
 */
interface IRequest {
  name: string;
  email: string;
}

/**
 * Dependency Inversion
 * DRY - Don't Repeat Yourself
 */

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const findCustomerWithSameEmail = await customersRepository.findByEmail(
      email,
    );

    if (findCustomerWithSameEmail) {
      throw new AppError('Já existe um usuário com este email.');
    }

    const customer = customersRepository.create({ name, email });

    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
