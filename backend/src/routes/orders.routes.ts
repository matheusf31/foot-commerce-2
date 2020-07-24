import { Router } from 'express';

import CreateOrderService from '../services/CreateOrderService';
import OrdersRepository from '../repositories/implementations/OrdersRepository';
import CustomersRepository from '../repositories/implementations/CustomersRepository';
import ProductsRepository from '../repositories/implementations/ProductsRepository';

const ordersRouter = Router();

ordersRouter.post('/', async (request, response) => {
  const { customer_id, products } = request.body;

  const ordersRepository = new OrdersRepository();
  const customersRepository = new CustomersRepository();
  const productsRepository = new ProductsRepository();

  const createOrder = new CreateOrderService(
    ordersRepository,
    productsRepository,
    customersRepository,
  );

  const newOrder = await createOrder.execute({
    customer_id,
    products,
  });

  return response.json(newOrder);
});

export default ordersRouter;
