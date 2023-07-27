import express, { NextFunction, Request, Response, Router } from "express";
import ProdoctVariants from "../../models/pharmacy/ProductVariant";
import Products from "../../models/pharmacy/Products";


const variantRouter: Router = express.Router({ mergeParams: true })


variantRouter.get("/:product", async function (req: Request, res: Response, next: NextFunction) {
    console.log(req.params)
    try {
        const product = await Products.findOne({_id:req.params.product})
        const variants = await ProdoctVariants.find(req.params).exec()
        res.status(200).json({success:true, product, count:variants.length, data:variants})
    } catch (error) {
        next(error)
    }
})


variantRouter.post("/", async function (req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    try{
        const prodVariants = await ProdoctVariants.create(req.body)
        res.status(201).json({success:true, data:prodVariants})
    } catch (error) {
        next(error)
    }
    
})
export default variantRouter