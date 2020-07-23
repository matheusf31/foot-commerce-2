import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email } = request.body;

  const createSession = new CreateSessionService();

  const customer = await createSession.execute({ email });

  return response.json(customer);
});

export default sessionsRouter;
