import Customer from '../entities/Customer';

import ICustomersRepository from '../repositories/models/ICustomersRepository';

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

/**
 * SOLI D -> dependency inversion -> o service estava diretamente querendo saber o formato do repository que ele
 * estava lidando
 *
 * A rota agora vai informar pro service qual repositório ele utilizará
 */

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
