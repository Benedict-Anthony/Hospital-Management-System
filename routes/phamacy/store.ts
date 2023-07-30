import express, {Router } from "express"
import categoryRouter from "./category"
import variantRouter from "./variants"
import { createProduct, filterProducts, getProduct, productList } from "../../controllers/pharmacy/pharm"
import { adminMiddleware } from "../../middleware/adminMiddleware"
import { protect } from "../../middleware/userMiddleware"

const storeRouter: Router = express.Router()


// @ts-ignore
storeRouter.get("/store", protect, productList)

// @ts-ignore
storeRouter.get("/store/detail/:_id", protect, getProduct)
// @ts-ignore
storeRouter.get("/store/filter/", protect, filterProducts)

// @ts-ignore
storeRouter.post("/mutate", protect, adminMiddleware, createProduct)

// @ts-ignore
storeRouter.use("/category", protect, categoryRouter)

// @ts-ignore
storeRouter.use("/variants/", protect, variantRouter)


export default storeRouter