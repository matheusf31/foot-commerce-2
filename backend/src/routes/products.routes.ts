import { Router } from 'express';

// import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';
import FindAllProductsService from '../services/FindAllProductsService';

// const productsRepository = new ProductsRepository();

const productsRouter = Router();

productsRouter.post('/', async (request, response) => {
  const { title, price, quantity, image } = request.body;

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({
    title,
    price,
    quantity,
    image,
  });

  return response.json(product);
});

productsRouter.get('/', async (request, response) => {
  const findAllProducts = new FindAllProductsService();
  const products = await findAllProducts.execute();

  return response.json(products);
});

export default productsRouter;
