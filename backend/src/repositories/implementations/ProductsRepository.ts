import { getRepository, Repository } from 'typeorm';

import Product from '../../entities/Product';
import IProductsRepository from '../models/IProductsRepository';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findProductWithSameTitle(
    title: string,
  ): Promise<Product | undefined> {
    const product = this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return product;
  }

  public async findAllProducts(): Promise<Product[]> {
    return this.ormRepository.find();
  }

  public async create({
    title,
    price,
    quantity,
    image,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      title,
      price,
      quantity,
      image,
    });

    await this.ormRepository.save(product);

    return product;
  }
}

export default ProductsRepository;
