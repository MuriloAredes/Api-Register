
import { Request,Response } from 'express';
import {autoInjectable,container } from 'tsyringe';
import GetAllProductsServices from '../../services/ProductsServices/GetAll/GetAllProductsServices';

@autoInjectable()
export default class GetAllProductsController
{
    async handle(request:Request, response:Response)
    {
    
        const {} = request.body;
       
        const updateProduct = container.resolve(GetAllProductsServices);
                
        const result = await updateProduct.execute()
       
        return response.json(result);
    }
}