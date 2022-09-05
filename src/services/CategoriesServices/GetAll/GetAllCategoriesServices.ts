
import { Category } from '../../../entities/Category';
import { Repository } from 'typeorm';
import {injectable,inject} from "tsyringe";
import { AppDataSource } from './../../../database/dataSource';

@injectable()
export class GetAllCategoriesServices
{
  private readonly repo :Repository<Category>
                                    
    constructor()
    {
      this.repo =  AppDataSource.getRepository(Category);
    }
   
   async execute(): Promise<Category[]>
    {
      
      const categories = await this.repo.find()
      
      return categories
    }
}