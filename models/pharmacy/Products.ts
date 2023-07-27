import mongoose from "mongoose";
import { ProductType } from "../../types/products.type";


const ProductSchema = new mongoose.Schema<ProductType>({
    name: {
        type: String,
        required: [true, "This field is required"],
        unique:true
    },

    description: {
        type: String,
        required: [true, "This field is required"],
        minlength:10
    },

    price: {
        type: Number,
        required: [true, "This field is required"], 
    },

    image: {
        type: String,
        required: [true, "This field is required"],
        
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required:[true, "This field is required"]
    },
    expirDate: {
        type: Date,
        required: [true, "This field is required"],
        
    }
})

export default mongoose.model("Products", ProductSchema)