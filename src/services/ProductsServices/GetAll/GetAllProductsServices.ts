import { singleton } from 'tsyringe';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../database/dataSource';
import Product from '../../../entities/Product';



@singleton()
export default class GetAllProductsServices
{
    private repo : Repository<Product>;
    
  constructor() {
      this.repo = AppDataSource.getRepository(Product);
      
  }

  async execute() : Promise<Product[]> {

     const products = await this.repo.find()
    console.log("retornando produtow")
     return products
  }
}