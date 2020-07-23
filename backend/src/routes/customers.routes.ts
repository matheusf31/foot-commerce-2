import { Router } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
  const { name, email } = request.body;

  const createCustomer = new CreateCustomerService();

  const customer = await createCustomer.execute({ name, email });

  return response.json(customer);
});

export default customersRouter;
