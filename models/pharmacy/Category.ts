import mongoose from "mongoose";
import { CategoryType } from "../../types/products.type";


const CategorySchema = new mongoose.Schema<CategoryType>({
    name: {
        type: String,
        required: [true, "This field is required"],
        unique:true
    }
},
    {
        toJSON: {
            virtuals:true
        },
        toObject: {
            virtuals:true
        },
        
    }
)

CategorySchema.virtual("Products", {
    ref: "Products",
    localField: "_id",
    foreignField: "category",
    justOne:false
})

// CategorySchema.pre('save', async function (next) {
//   const categoryName = this.get('name') as string;

//   try {
//     const existingCategory = await Category.findOne({ name: categoryName });
//     if (existingCategory) {
//       const err = new Error('Category with this name already exists.');
//       next(err);
//     }
//   } catch (err:any) {
//     next(err);
//   }
// });
const Category = mongoose.model("Category", CategorySchema)

export default Category