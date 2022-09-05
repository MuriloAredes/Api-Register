import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import Category from "../../../entities/Category";


export default class GetByIdCategoryServices
{
    private repo : Repository<Category>;
  
 
  constructor() {
      this.repo = AppDataSource.getRepository(Category);
  }
    async execute(id:string): Promise<Category | Error>
    {
        const category = await this.repo.findOne({where:{id}})
       
        if(category === null)
        {
            return new Error("category not found")
        }

        return category;
    }
}
