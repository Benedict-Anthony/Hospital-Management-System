import express, {Router, Response, Request, NextFunction } from "express"

import categoryRouter from "./category"
import Products from "../../models/pharmacy/Products"
import variantRouter from "./variants"
import { createProduct, getProduct, productList } from "../../controllers/pharmacy/pharm"

const productRouter: Router = express.Router()


productRouter.use("/category", categoryRouter)
productRouter.use("/variants/", variantRouter)

productRouter.get("store", productList)


productRouter.get("/:id", getProduct)

productRouter.post("/mutate",createProduct)

export default productRouter