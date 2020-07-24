import { Router } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import CustomersRepository from '../repositories/implementations/CustomersRepository';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
  const { name, email } = request.body;

  const customersRepository = new CustomersRepository();
  const createCustomer = new CreateCustomerService(customersRepository);

  const customer = await createCustomer.execute({ name, email });

  return response.json(customer);
});

export default customersRouter;
