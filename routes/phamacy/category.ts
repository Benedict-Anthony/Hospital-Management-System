import express, {Request, Response, NextFunction, Router } from "express";
import Category from "../../models/pharmacy/Category";


const categoryRouter: Router = express.Router({mergeParams:true})


categoryRouter.post("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Category.create(req.body)
        return res.status(201).json({success:true, data})
    } catch (error) {
        console.log(error)
        next(error)
    }
})

categoryRouter.get("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const data = await Category.find().populate({
            path: "Products",
            select:"name price"
        })
        return res.status(201).json({success:true, count:data.length, data})
        
    } catch (error) {
       next(error) 
    }
})


categoryRouter.get("/:_id", async function (req: Request, res: Response, next: NextFunction) {
    console.log(req.params)
    try {
        const data = await Category.findById(req.params).populate("Products")
        if (!data) {
            return res.status(404).json({success:false, msg:"Not found"})
        }
        return res.status(201).json({success:true, data})
        
    } catch (error) {
       next(error) 
    }
})



export default categoryRouter