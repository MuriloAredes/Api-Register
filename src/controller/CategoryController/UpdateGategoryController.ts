import { Request, Response } from "express";
import {autoInjectable, container} from 'tsyringe'
import UpdateCategoryServices from "../../services/CategoriesServices/Update/UpdateCategoryServices";



@autoInjectable()
export default class UpdateCategoryController
{
    async handle(request:Request, response:Response)
    {
    
        const {id} = request.params
        const {name}=request.body
        
        const UpdateCategory = await container.resolve(UpdateCategoryServices);      
           
        const result = await UpdateCategory.execute(id,name)

        if(result instanceof Error)
        {
            response.sendStatus(400).json(result.message)
        }
        
        return response.json({message:"update with sucessfull"})
            
    }
}