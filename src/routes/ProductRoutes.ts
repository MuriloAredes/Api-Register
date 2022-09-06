import {Router} from 'express';
import CreateProductController from './../controller/productController/CreateProductController';


const ProductRouter = Router();

const createProductController = new CreateProductController()

ProductRouter.post("/product/register", createProductController.handle)

export default ProductRouter ;