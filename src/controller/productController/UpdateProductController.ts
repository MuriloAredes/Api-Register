import { Request, Response } from "express";
import { autoInjectable, container } from "tsyringe";
import UpdateProductServices from "../../services/ProductsServices/update/UpdateProductServices";

@autoInjectable()
export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, price, amount, category_Id, isActive } = request.body;

    const updateProduct = container.resolve(UpdateProductServices);

    const result = await updateProduct.execute({
      id,
      name,
      price,
      amount,
      isActive,
    });

    return response.json(result);
  }
}
