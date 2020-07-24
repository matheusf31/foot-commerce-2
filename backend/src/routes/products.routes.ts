import { Router } from 'express';

import ProductsRepository from '../repositories/implementations/ProductsRepository';
import CreateProductService from '../services/CreateProductService';
import FindAllProductsService from '../services/FindAllProductsService';

const productsRouter = Router();

productsRouter.post('/', async (request, response) => {
  const { title, price, quantity, image } = request.body;

  const productsRepository = new ProductsRepository();
  const createProduct = new CreateProductService(productsRepository);

  const product = await createProduct.execute({
    title,
    price,
    quantity,
    image,
  });

  return response.json(product);
});

productsRouter.get('/', async (request, response) => {
  const productsRepository = new ProductsRepository();
  const findAllProducts = new FindAllProductsService(productsRepository);

  const products = await findAllProducts.execute();

  return response.json(products);
});

export default productsRouter;
