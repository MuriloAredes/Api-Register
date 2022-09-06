import {Router} from 'express';
import CreateCategoryController from '../controller/CategoryController/CreateCategoryController'
import DeleteCategoryController from '../controller/CategoryController/DeleteCategoryController'
import  GetAllCategoriesController  from '../controller/CategoryController/GetAllCategoriesController';
import UpdateCategoryController from '../controller/CategoryController/UpdateGategoryController';
import GetByIdCategoryController from '../controller/CategoryController/GetByIdCategoryController';


const CategoryRouter = Router();

const createCategoryController = new CreateCategoryController(); 
const deleteCategoryController = new DeleteCategoryController();
const getAllCategoryController = new GetAllCategoriesController();
const getByIdCategoryController= new GetByIdCategoryController() 
const updateCategoryController= new UpdateCategoryController()

CategoryRouter.post('/category/register', createCategoryController.handle)
CategoryRouter.delete('/category/:id', deleteCategoryController.handle)
CategoryRouter.get('/category/all', getAllCategoryController.handle)
CategoryRouter.put('/category/update/:id', updateCategoryController.handle)
CategoryRouter.get('/category/getbyid/:id', getByIdCategoryController.handle)


export default CategoryRouter ;