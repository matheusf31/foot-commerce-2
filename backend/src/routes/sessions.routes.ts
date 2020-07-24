import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';
import CustomersRepository from '../repositories/implementations/CustomersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email } = request.body;

  const customersRepository = new CustomersRepository();
  const createSession = new CreateSessionService(customersRepository);

  const customer = await createSession.execute({ email });

  return response.json(customer);
});

export default sessionsRouter;
