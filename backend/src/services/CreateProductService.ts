import Product from '../entities/Product';
import AppError from '../errors/AppError';
import IProductsRepository from '../repositories/models/IProductsRepository';

interface IRequest {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

class CreateProductService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute({
    title,
    price,
    quantity,
    image,
  }: IRequest): Promise<Product> {
    const findProductWithSameTitle = await this.productsRepository.findProductWithSameTitle(
      title,
    );

    if (findProductWithSameTitle) {
      throw new AppError('Já existe um produto com este título.');
    }

    const product = await this.productsRepository.create({
      title,
      price,
      quantity,
      image,
    });

    return product;
  }
}

export default CreateProductService;
