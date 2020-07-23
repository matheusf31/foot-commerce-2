import { getRepository } from 'typeorm';

import Product from '../entities/Product';
// import ProductsRepository from '../repositories/ProductsRepository';

class FindAllProductsService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();

    return products;
  }
}

export default FindAllProductsService;
