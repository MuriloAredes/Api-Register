import { Request,Response } from "express";
import {autoInjectable, container} from 'tsyringe'
import CreateCategoryService from '../../services/CategoriesServices/Create/CreateCategoryServices'


@autoInjectable()
export default class CreateCategoryController
{
      
    async handle(request:Request, response:Response)
    {
    
        const {name, isActive} = request.body;
       console.log("controller")
        const createCategory = container.resolve(CreateCategoryService);
                
        const result = await createCategory.execute(name,isActive)

    //    if(result!=  result instanceof Error)
        //{
           // return response.json(result.message)
       // }
        
        return response.json(result);
        
    }
    
}
