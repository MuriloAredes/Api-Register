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

CategoryRouter.post('/register', createCategoryController.handle)
CategoryRouter.delete('/:id', deleteCategoryController.handle)
CategoryRouter.get('/all', getAllCategoryController.handle)
CategoryRouter.put('/update/:id', updateCategoryController.handle)
CategoryRouter.get('/getbyid/:id', getByIdCategoryController.handle)


export default CategoryRouter ;