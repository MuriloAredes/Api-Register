
import { Request,Response } from 'express';
import {autoInjectable,container } from 'tsyringe';
import CreateProductService from './../../services/ProductsServices/create/CreateProductServices';


@autoInjectable()
export default class CreateProductController
{
    async handle(request:Request, response:Response)
    {
    
        const {name,price,amount,category_Id,isActive} = request.body;
       
        const createProduct = container.resolve(CreateProductService);
                
        const result = await createProduct.execute({name,price,amount,category_Id,isActive})
       
        return response.json(result);
    }
        
}