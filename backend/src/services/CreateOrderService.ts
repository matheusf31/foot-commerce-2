import AppError from '../errors/AppError';

import Order from '../entities/Order';
import IProductsRepository from '../repositories/models/IProductsRepository';
import ICustomersRepository from '../repositories/models/ICustomersRepository';
import IOrdersRepository from '../repositories/models/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

class CreateProductService {
  constructor(
    private ordersRepository: IOrdersRepository,

    private productsRepository: IProductsRepository,

    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customerExists = await this.customersRepository.findById(customer_id);

    if (!customerExists) {
      throw new AppError('Nenhum cliente encontrado com esse id.');
    }

    const existentProducts = await this.productsRepository.findAllProductsById(
      products,
    );

    if (!existentProducts.length) {
      throw new AppError('Nenhum produto com o id selecionado foi encontrado.');
    }

    const existentProductsIds = existentProducts.map(product => product.id);

    const checkInexistentProducts = products.filter(
      product => !existentProductsIds.includes(product.id),
    );

    /**
     * checkInexistentProducts conterá o primeiro produto que não existe
     */
    if (checkInexistentProducts.length) {
      throw new AppError(
        `Não foi possível encontrar o produto ${checkInexistentProducts[0].id}`,
      );
    }

    const findProductsWithNoQuantityAvailable = existentProducts.filter(
      product =>
        products.filter(p => p.id === product.id)[0].quantity >
        product.quantity,
    );

    if (findProductsWithNoQuantityAvailable.length) {
      throw new AppError(
        `Nós só temos ${findProductsWithNoQuantityAvailable[0].quantity} unidades do produto ${findProductsWithNoQuantityAvailable[0].title}`,
      );
    }

    const formattedProducts = products.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
      price: existentProducts.filter(p => p.id === product.id)[0].price,
    }));

    const newOrder = await this.ordersRepository.create({
      customer: customerExists,
      products: formattedProducts,
    });

    const { order_products } = newOrder;

    const orderedProductsQuantity = order_products.map(product => ({
      id: product.product_id,
      quantity:
        existentProducts.filter(p => p.id === product.product_id)[0].quantity -
        product.quantity,
    }));

    await this.productsRepository.updateQuantity(orderedProductsQuantity);

    return newOrder;
  }
}

export default CreateProductService;
