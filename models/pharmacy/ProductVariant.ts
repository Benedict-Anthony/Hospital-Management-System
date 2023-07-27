import mongoose from "mongoose";
import { ProductVariantTypes } from "../../types/products.type";

const ProductVariantSchema = new mongoose.Schema<ProductVariantTypes>({
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products",
        required:[true, "This field is required"]
    },
    name: {
        type: String,
        required:[true, "This field is required"]
    },
    perscription: {
        type: String,
        required:[true, "This field is required"]
    },
    unit: {
        type: String,
        required:[true, "This field is required"]
    },

    price: {
        type: Number,
        required:[true, "This field is required"]
    },

    company: {
        type: String,
        required:[true, "This field is required"]
    }
})

const ProdoctVariants = mongoose.model("ProductVariants", ProductVariantSchema)
export default ProdoctVariants