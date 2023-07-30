import mongoose from "mongoose";
import { WardType } from "../../types/ward.type";

const WardSchema = new mongoose.Schema<WardType>({
    name: {
        type: String,
        required: [true, "This field is required"],
        unique:true
    },
    beds: {
        type: Number,
        required: [true, "This field is required"], 
    },
    beds_available: {
        type: Number,
        required:[true, "This field is required"]
    },
    bed_total: {
        type: Number,
        required: [true, "This field is required"],
        min: 1,
        max:10,
    },
    patiens: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    }
})

const Ward = mongoose.model("Ward", WardSchema)
export default Ward