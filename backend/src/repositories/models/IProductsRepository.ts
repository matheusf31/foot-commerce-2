import Product from '../../entities/Product';

import ICreateProductDTO from '../../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  create({
    title,
    price,
    quantity,
    image,
  }: ICreateProductDTO): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
  findProductWithSameTitle(title: string): Promise<Product | undefined>;
}
