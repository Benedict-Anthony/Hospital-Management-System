import express, { Router, Request, Response, NextFunction} from "express"
import User from "../models/user/User"
import bcrypts from "bcryptjs"
import jwt from "jsonwebtoken"
import { ErrorResponse } from "../utils/errResponse"

const authRouter:Router = express.Router()

const saltNumber = 10
const salt = bcrypts.genSaltSync(saltNumber)


authRouter.post("/", async function (req: Request, res: Response, next:NextFunction) {
    try {
        if (req.body.password) { 
            const password = bcrypts.hashSync(req.body.password, salt)
             await User.create({...req.body, password,})
        res.status(201).json({
            success: true,
            msg:"account was created succefuly"
        }) 
        } else {
            return res.status(400).json({msg:"Please provide a password"})
        }
        
    } catch (error:any) {
        next(error)
   }
  
})

// LOGIN ROUTES
authRouter.post("/login", async function (req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body
    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).json({msg:ErrorResponse.message("No user found")})
    }

    const checkPassword = bcrypts.compareSync(password, user?.password as string)

    if (!checkPassword) {
        return res.status(404).json({ msg: ErrorResponse.message("Email or password incorrect") })
    }


    const token = {
        access:jwt.sign({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`
        }, "sacret-key")
    }

    return res.status(200).json({success:true, token})
    
})



export default authRouter