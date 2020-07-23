import Customer from '../../entities/Customer';

export default interface ICustomersRepository {
  findByEmail(email: string): Promise<Customer | undefined>;
}
