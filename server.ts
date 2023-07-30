import express,{Express} from "express"
import colors from "colors"
import dotenv from "dotenv"
import connectdb from "./config/db"
import morgan from "morgan"
import errorHandler from "./middleware/errorMiddleware"
import authRouter from "./routes/user/auth"
import storeRouter from "./routes/phamacy/store"
import cookieParser from "cookie-parser"

// LOAD ENVIRONMENT VARIABLES
dotenv.config({ path: "./config/config.local.env" })

// INITIALIZE THE APP
const app:Express = express()


app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/pharmacy", storeRouter)


// ERROR HANDLER
app.use(errorHandler)

// CONNECT TO DB
connectdb()



const server = app.listen(3000, () => console.log(colors.blue.bgWhite.bold.underline("Server running.....")))

process.on("unhandledRejection", (err:any, promise:Promise<any>) => {
    console.log(colors.red(`Error:, ${err.message}`))
    server.close(() => {
        return process.exit(1)
    })

})