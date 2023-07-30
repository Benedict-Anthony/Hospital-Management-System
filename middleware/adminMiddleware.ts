import {Response, Request, NextFunction} from "express"
import User from "../models/user/User"
import { verifyUserToken } from "../utils/verifyToken"

export const adminMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    
   try {
     const {token, verifyToken} = verifyUserToken(req.cookies.token.access)
    
    if (!token) {
        return res.status(401).json({message:"Not authorized, Token not provided"})  
    }
    
    console.log(verifyToken)
    if (!verifyToken) {
        return res.status(401).json({message:"Not authorized, Invalid Token"})
    } 

    const user = await User.findOne({_id:verifyToken.id})

    if (!user?.role.includes("admin")) {
        return res.status(401).json({message:"Not authorized to add product to store"})
        
    }

    next()
   } catch (error) {
    next(error)
   }
}