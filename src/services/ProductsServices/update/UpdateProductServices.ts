import { singleton, inject } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import Product from "../../../entities/Product";
import UpdateProductRequest from './interface/UpdateProductRequest' 

@singleton()
export default class UpdateProductServices
{

     private repo : Repository<Product>;
    
 
  constructor() {
    this.repo = AppDataSource.getRepository(Product);
      
  }

  async execute({id,name,price,amount,isActive}:UpdateProductRequest) :Promise<Product | Error>
  {
    
       const product = await this.repo.findOne({where:{id}})

       if(product == null)
       {
        return new Error("category not exists")
       }

       product.name = name? name: product.name;
       product.price = price? price:product.price;
       product.amount =amount? amount:product.amount;
       product.isActive = isActive?isActive:product.isActive;

       await this.repo.save(product);

       return product 

  }
}