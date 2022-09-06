
import { Product } from './../../../entities/Product';
import { Repository } from 'typeorm';
import { AppDataSource } from './../../../database/dataSource';


export default class GetByIdProductServices
{
    private readonly repo :Repository<Product>
                                    
    constructor()
    {
      this.repo =  AppDataSource.getRepository(Product);
    }
    
    async execute(id:string): Promise<Product| Error>
    {
        if(!id)
        {
            return new Error("id is null")
        }

         const product = await this.repo.findOne({where:{id}});

         if (!product)
         {
            return new Error("not found");
         }
          
         return product;
    }
}