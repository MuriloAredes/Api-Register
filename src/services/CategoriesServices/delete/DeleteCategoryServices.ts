import { Repository } from "typeorm";
import Category from "../../../entities/category";

class DeleteCategoryServices implements IDeleteCategoryServices {
  private categoryRepository: Repository<Category>;
  constructor(categoryRepo: Repository<Category>) {
    this.categoryRepository = categoryRepo;
  }
  delete(id: string): void {
    // if(!this.categoryRepository.findOne(id))

    this.categoryRepository.delete(id);
  }
}
