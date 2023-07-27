import mongoose from "mongoose";
import colors from "colors"


const connectdb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL as string)
    console.log(colors.blue.bgWhite.bold(`Database connected: ${connection.connection.host}`))
}

export default connectdb