import Product from '../../entities/Product';

import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '../../dtos/IUpdateProductsQuantityDTO';

interface IFindAllProducts {
  id: string;
}

export default interface IProductsRepository {
  create({
    title,
    price,
    quantity,
    image,
  }: ICreateProductDTO): Promise<Product>;
  findByTitle(title: string): Promise<Product | undefined>;
  updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
  findAllProducts(): Promise<Product[]>;
  findAllProductsById(products: IFindAllProducts[]): Promise<Product[]>;
}
