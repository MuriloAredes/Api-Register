import { Request,Response } from "express";
import {autoInjectable, container} from 'tsyringe'
import { GetAllCategoriesServices } from '../../services/CategoriesServices/GetAll/GetAllCategoriesServices';

@autoInjectable()
export default class GetAllCategoriesController
{
    async handle( request:Request, response:Response)
    {        
            
            const categories = container.resolve(GetAllCategoriesServices);

            const result =await categories.execute();
            
            return response.json(result)
        
        
    }
}