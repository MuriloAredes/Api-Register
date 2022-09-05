import { Request,Response } from "express";
import {autoInjectable, container} from 'tsyringe'
import CreateCategoryService from './../services/CategoriesServices/create/CreateCategoryServices'


@autoInjectable()
export default class CreateCategoryController
{
      
    async handle(request:Request, response:Response)
    {
    
        const {name, isActive} = request.body;
       
        const createCategory = container.resolve(CreateCategoryService);
                
        const result = await createCategory.execute(name,isActive)
       
        return response.json(result);
        
    }
    
}
