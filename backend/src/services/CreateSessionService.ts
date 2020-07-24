import Customer from '../entities/Customer';

import AppError from '../errors/AppError';
import ICustomersRepository from '../repositories/models/ICustomersRepository';

interface IRequest {
  email: string;
}

class CreateCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  public async execute({ email }: IRequest): Promise<Customer> {
    const findCustomer = await this.customersRepository.findByEmail(email);

    if (!findCustomer) {
      throw new AppError('Não existe usuário com este email.');
    }

    return findCustomer;
  }
}

export default CreateCustomerService;
