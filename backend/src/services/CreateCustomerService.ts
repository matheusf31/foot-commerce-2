import Customer from '../entities/Customer';

import ICustomersRepository from '../repositories/models/ICustomersRepository';

import AppError from '../errors/AppError';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  public async execute({ name, email }: IRequest): Promise<Customer> {
    if (!email || !name) {
      throw new AppError('Nome ou email inválido');
    }

    const findCustomerWithSameEmail = await this.customersRepository.findByEmail(
      email,
    );

    if (findCustomerWithSameEmail) {
      throw new AppError('Já existe um usuário com este email.');
    }

    const customer = await this.customersRepository.create({ name, email });

    return customer;
  }
}

export default CreateCustomerService;
