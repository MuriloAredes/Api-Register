import {autoInjectable, container} from 'tsyringe'
import { Request,Response } from "express";
import GetByIdCategoryServices from '../../services/CategoriesServices/GetbyId/GetByIdCategoryServices';

@autoInjectable()
export default class GetByIdCategoryController
{
    handle(request:Request , response:Response)
    {
        const {id} = request.params

       const category = container.resolve(GetByIdCategoryServices);

       const result = category.execute(id)

       if(result instanceof Error)
       {
         response.sendStatus(409)
       }
       
       response.json(result)
    }
}