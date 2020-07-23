import { EntityRepository, Repository } from 'typeorm';
import Product from '../../entities/Product';

interface ICreateAppointmentDTO {
  title: string;
  price: number;
  image: string;
}

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  // public findAllProducts(): Product[] {
  //   return this.products;
  // }
  // public create({ title, price, image }: ICreateAppointmentDTO): Product {
  //   const product = new Product({ title, price, image });
  //   this.products.push(product);
  //   return product;
  // }
}

export default ProductsRepository;
