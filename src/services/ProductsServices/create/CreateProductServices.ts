import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import Product from "../../../entities/Product";
import{singleton} from"tsyringe"
import Category from "../../../entities/Category";

@singleton()
export default class CreateProductService
{
    private repo : Repository<Product>;
    private repoCategory : Repository<Category>;
 
  constructor() {
      this.repo = AppDataSource.getRepository(Product);
      this.repoCategory =AppDataSource.getRepository(Category);
  }
   async execute({name,price,amount,category_Id,isActive}:ICreateProductServices): Promise<Product | Error>
    {
        if(name === null || 
            price === null || 
            amount === null ||
            category_Id === null)
        {
            return new Error("preencha todos so campos ")
        }
        const category = this.repoCategory.findOne({where: {id: category_Id}})
       
        if(!category)
        {
            return new Error("category not exist")
        }
        
        const product = this.repo.create({
            name,
            price,
            amount,
            category_Id,
            isActive
        })

        await this.repo.save(product);

        return product;
    }
}