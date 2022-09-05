import { singleton, inject } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import Category from "../../../entities/Category";

@singleton()
export default class DeleteCategoryServices {
  private readonly repo :Repository<Category>
                                    
    constructor()
    {
      this.repo =  AppDataSource.getRepository(Category);
    }
  execute(id: string): void | Error{
     if(!this.repo.findOne({where: {id}}))
     {
      return new Error("id nao encontrado");
     }

    this.repo.delete(id);
  }
}
