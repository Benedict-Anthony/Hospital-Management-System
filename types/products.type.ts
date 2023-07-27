import mongoose from "mongoose"


export type CategoryType = {
    name: string,
    
}

export type ProductType = {
    name: string
    description: string
    expirDate: Date
    price: number   
    image: string
    category:mongoose.Types.ObjectId
}

export type ProductVariantTypes = {
    product: mongoose.Types.ObjectId
    price:number
    name: string
    perscription: string
    unit: string
    company:string
}
