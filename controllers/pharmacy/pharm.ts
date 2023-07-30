import { NextFunction, Response, Request } from "express"
import Products from "../../models/pharmacy/Products"
import { addDollarSignToKeys } from "../../utils/addDollarSign"

// get all products from store
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

// filter a product
export async function filterProducts(req:Request, res:Response, next:NextFunction) {
    console.log(req.query)
   try {
       let data = await Products.find(req.query).exec()
        res.status(200).json({ success: true, count: data.length, data })
   } catch (error) {
    next(error)
   }
    
}


// create a product
// @access admin
export async function createProduct (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Products.create(req.body) 
        res.status(201).json({success:true})
        
    } catch (error) {
        next(error)
    }
}



export async function getProduct (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Products.findById(req.params).populate({
            path: "category",
            select:"name"
        }).exec()
        res.status(200).json({success:true, data})
    } catch (error) {
       next(error) 
    }
  
}