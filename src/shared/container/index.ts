import { container } from "tsyringe";

import { Repository } from "typeorm";
import Product from "../../entities/Product";
import { Category } from "../../entities/Category";

container.registerSingleton(Repository<Category>);
container.registerSingleton(Repository<Product>);
