
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../database/dataSource';
import { Category } from '../../../entities/Category';




export default class UpdateCategoryServices
{
    private repo : Repository<Category>;
  
  constructor() {
      this.repo = AppDataSource.getRepository(Category);
  }

   async execute(id:string, name:string) :Promise<Category | Error>
    {
        const category = await this.repo.findOne({where: {id}})
       
        if(!category)
        {
            return new Error("category does not exists!");
        }

        category.name = name ? name: category.name;
        
        await this.repo.save(category);
        
        return category;
    }
}
