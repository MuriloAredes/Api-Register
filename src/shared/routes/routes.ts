import {Router} from 'express';
import CreateCategoryController from './../../controller/CreateCategoryController' 




const router = Router();

const createCategoryController = new CreateCategoryController();

router.post('/category/', createCategoryController.handle)

export default router ;