import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { productsSeed } from '../seeds/product.seed';
import Product from '../../entities/Product';

export default class SeedProduct1595715099747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const productsRepository = await getRepository(Product);

    await productsRepository.save(productsSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }
}
