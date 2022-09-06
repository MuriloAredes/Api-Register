import { Router } from "express";
import CreateProductController from "./../controller/productController/CreateProductController";
import { UpdateProductController } from "./../controller/productController/UpdateProductController";
import GetAllProductsController from "./../controller/productController/GetAllProductsController";
import DeleteProductController from "./../controller/productController/DeleteProductController";
import GetByIdProductcontroller from "./../controller/productController/GetByIdProductController";

const ProductRouter = Router();

const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const getAllProductsController = new GetAllProductsController();
const deleteProductController = new DeleteProductController();
const getByIdProductcontroller = new GetByIdProductcontroller();

ProductRouter.post("/register", createProductController.handle);
ProductRouter.put("/:id", updateProductController.handle);
ProductRouter.get("/", getAllProductsController.handle);
ProductRouter.delete("/:id", deleteProductController.handle);
ProductRouter.delete("/:id", getByIdProductcontroller.handle);

export default ProductRouter;
