import { Request,Response } from "express";
import {container} from 'tsyringe'
import CreateCategoryService from './../services/CategoriesServices/create/CreateCategoryServices'

export default class CreateCategoryController
{
    
    async handle(request:Request, response:Response)
    {

        const {name, isActive} = request.body;
       
        const createCategory = container.resolve(CreateCategoryService);
        
        const result = await createCategory.execute(name)

        if(result instanceof Error)
        {
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
    
}
