import {Router} from 'express';
import CreateProductController from './../controller/productController/CreateProductController';
import { UpdateProductController } from './../controller/productController/UpdateProductController';
import GetAllProductsController from './../controller/productController/GetAllProductsController';
import DeleteProductController from './../controller/productController/DeleteProductController';



const ProductRouter = Router();

const createProductController = new CreateProductController()
const updateProductController = new  UpdateProductController() 
const getAllProductsController  = new GetAllProductsController ()
const deleteProductController = new DeleteProductController()

ProductRouter.post("/product/register", createProductController.handle)
ProductRouter.put("/product/:id", updateProductController.handle)
ProductRouter.get("/product/", getAllProductsController .handle)
ProductRouter.delete("/product/:id", deleteProductController .handle)

export default ProductRouter ;