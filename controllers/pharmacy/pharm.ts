import { NextFunction, Response, Request } from "express"
import Products from "../../models/pharmacy/Products"

export async function productList(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Products.find().populate({
            path: "category",
            select:"name"
        }).exec()
        res.status(200).json({success:true, count:data.length, data})
    } catch (error) {
       next(error) 
    }
  
}

export async function createProduct (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Products.create(req.body) 
        res.status(201).json({success:true, data})
        
    } catch (error) {
        next(error)
    }
}



export async function getProduct (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Products.find().populate({
            path: "category",
            select:"name"
        }).exec()
        res.status(200).json({success:true, count:data.length, data})
    } catch (error) {
       next(error) 
    }
  
}