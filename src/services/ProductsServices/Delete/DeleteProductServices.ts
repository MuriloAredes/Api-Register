
import { Repository } from 'typeorm';
import { Product } from './../../../entities/Product';
import { AppDataSource } from './../../../database/dataSource';


export class DeleteProductServices
{
    private readonly repo :Repository<Product>
                                    
    constructor()
    {
      this.repo =  AppDataSource.getRepository(Product);
    }
    
    execute(id:string) : void | Error
    {
    
        if(!this.repo.findOne({where: {id}})){
            return new Error("id not found");
        }
    
      this.repo.delete(id)
    }
}