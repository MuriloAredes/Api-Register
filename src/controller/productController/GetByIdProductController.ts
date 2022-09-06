import { Request,Response } from 'express';
import {autoInjectable,container } from 'tsyringe';
import GetByIdProductServices from './../../services/ProductsServices/GetById/GetByIdProductServices';


export default class GetByIdProductcontroller
{
    async handle(request:Request, response:Response)
    {
    
        const {id} = request.params;
       
        const GetByIdProduct = container.resolve(GetByIdProductServices);
                
        const result = await GetByIdProduct.execute(id)
       
        return response.json(result);
    }
}