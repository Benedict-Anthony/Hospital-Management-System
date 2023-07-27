import mongoose from "mongoose";
import { UserType } from "../../types/user.type";


const UserSchema = new mongoose.Schema<UserType>({
    firstName: {
        type: String,
        required:[true, "This field is required"]
    },

    lastName: {
        type: String,
        required:[true, "This field is requiered"]
    },

    email: {
        type: String,
        required: [true, "This field is required"],
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email field"],
        unique:true
    },

    password: {
        type: String,
        required: [true, "This field is required"],
        minLength: 4,
    },

    role: {
        type: [String],
        required: [true, "This feild is required"],
        enum: [
            "admin",
            "staff",
            "customer",
        ],
        default:["customer"]
    },

    createdAt: {
        type: Date,
        default:new Date
    }
})

export default mongoose.model("User", UserSchema)
