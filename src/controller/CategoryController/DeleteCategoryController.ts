import { Request,Response } from "express";
import {autoInjectable, container} from 'tsyringe'
import DeleteCategoryServices from '../../services/CategoriesServices/delete/DeleteCategoryServices'

@autoInjectable()
export default class DeleteCategoryController
{

    async handle(request:Request, response:Response)
    {
    
        const {id} = request.params
        const{name}= request.body
        
        const deleteCategory = await container.resolve(DeleteCategoryServices);      
           
        const result = await deleteCategory.execute(id) 
       
        if(result instanceof Error)
        {
            return response.sendStatus(400).json(result.message)
        }
        
        return response.json({message:"deletado com sucesso"})
            
    }
}