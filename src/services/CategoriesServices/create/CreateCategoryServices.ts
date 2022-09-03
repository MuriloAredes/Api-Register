import { Repository } from "typeorm";
import { inject, injectable } from "tsyringe";
import { Category } from "./../../../entities/Category";

@injectable()
export default class CreateCategoryServices {
  constructor(
    @inject("Repository<Category>")
    private categoryRepository: Repository<Category>
  ) {}

  async execute({
    name,
    isActive,
  }: createCategoryRequest): Promise<Category | Error> {
    if (await this.categoryRepository.findOne({ where: { name } })) {
      return new Error("Category already exists");
    }
    const category = this.categoryRepository.create({
      name,
      isActive,
    });

    await this.categoryRepository.save(category);

    return category;
  }
}
