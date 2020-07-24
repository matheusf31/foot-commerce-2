import Product from '../entities/Product';
import IProductsRepository from '../repositories/models/IProductsRepository';

class FindAllProductsService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAllProducts();

    return products;
  }
}

export default FindAllProductsService;
