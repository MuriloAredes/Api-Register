import "reflect-metadata";
import { Repository } from "typeorm";
import { singleton,inject } from "tsyringe";
import { Category } from "./../../../entities/Category";
import{AppDataSource} from "./../../../database/dataSource" 





@singleton()
export default class CreateCategoryServices {
 private repo : Repository<Category>;
  
 
  constructor() {
      this.repo = AppDataSource.getRepository(Category);
  }
    	
  async execute(name:string, isActive:boolean): Promise<Category |Error> {
    
    const categoryResult = this.repo.findOne({where:{name}});

    if(Category)
    {
      return new Error("")
    }

    const category = this.repo.create({
      name ,
      isActive      
    });
   
    await this.repo.save(category);

    return category;
  }
}
