import {Response, Request, NextFunction} from "express"
import User from "../models/user/User"
import { verifyUserToken } from "../utils/verifyToken"

interface CustomRequest extends Request {
    user:string
}
export const protect = async (req:CustomRequest, res:Response, next:NextFunction) => {
    try {
        const { token, verifyToken } = verifyUserToken(req.cookies?.token?.access)
      if (!token) {
        return res.status(401).json({message:"Not authorized, Token not provided"})  
    }
    
    if (!verifyToken) {
        return res.status(401).json({message:"Not authorized, Invalid Token"})
    } 

    const user = await User.findOne({ _id: verifyToken.id })
    req.user = user?.id

    next()
    } catch (error) {
        next(error)
    }
}