import { getRepository, Repository, In } from 'typeorm';

import Product from '../../entities/Product';
import IProductsRepository from '../models/IProductsRepository';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '../../dtos/IUpdateProductsQuantityDTO';

interface IFindAllProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findByTitle(title: string): Promise<Product | undefined> {
    const product = this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return product;
  }

  public async findAllProductsById(
    products: IFindAllProducts[],
  ): Promise<Product[]> {
    const productsIds = products.map(product => product.id);

    const existentProducts = await this.ormRepository.find({
      where: {
        id: In(productsIds),
      },
    });

    return existentProducts;
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

  public async updateQuantity(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    return this.ormRepository.save(products);
  }
}

export default ProductsRepository;
