
import { Request,Response } from 'express';
import {autoInjectable,container } from 'tsyringe';
import { DeleteProductServices } from '../../services/ProductsServices/Delete/DeleteProductServices';

@autoInjectable()
export default class DeleteProductController
{
    async handle(request:Request, response:Response)
    {
    
        const {id} = request.params;
       
        const removeProduct = container.resolve(DeleteProductServices);
                
        const result = await removeProduct.execute(id) 

        if(result instanceof Error)
        {
            return response.sendStatus(400).json(result.message)
        }
       
        return response.json(result);
    }
}