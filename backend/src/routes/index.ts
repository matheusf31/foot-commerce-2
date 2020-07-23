import { Router } from 'express';

import customersRouter from './customers.routes';
import productsRouter from './products.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/products', productsRouter);
routes.use('/session', sessionsRouter);

export default routes;
