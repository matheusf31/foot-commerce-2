import { Router } from 'express';
import { uuid } from 'uuidv4';

const customersRouter = Router();

const customers = [];

customersRouter.post('/', (request, response) => {
  const { name, email } = request.body;

  const customer = {
    id: uuid(),
    name,
    email,
  };

  customers.push(customer);

  return response.json(customer);
});

export default customersRouter;
