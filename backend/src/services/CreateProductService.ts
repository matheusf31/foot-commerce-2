import { getRepository } from 'typeorm';

import Product from '../entities/Product';
// import ProductsRepository from '../repositories/ProductsRepository';
import AppError from '../errors/AppError';

interface IRequest {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

class CreateProductService {
  /**
   * Dependency inversion principle
   */
  // private productsRepository: ProductsRepository;

  // constructor(productsRepository: ProductsRepository) {
  //   this.productsRepository = productsRepository;
  // }

  public async execute({
    title,
    price,
    quantity,
    image,
  }: IRequest): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.create({
      title,
      price,
      quantity,
      image,
    });

    const findProductWithSameTitle = await productsRepository.findOne({
      where: {
        title,
      },
    });

    if (findProductWithSameTitle) {
      throw new AppError('Já existe um produto com este título.');
    }

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
