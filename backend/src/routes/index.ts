import { Router } from 'express';

import customersRouter from './customers.routes';
import productsRouter from './products.routes';
import sessionsRouter from './sessions.routes';
import ordersRouter from './orders.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/products', productsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/orders', ordersRouter);

export default routes;
