import { Response, Request, NextFunction } from "express"
import Ward from "../../models/ward/Ward"



export async function getWards(req: Request, res: Response, next: NextFunction) {
   try {
       const data = await Ward.find()
       res.status(200).json({succes:true, count:data.length, data})
    
   } catch (error) {
    next(error)
   }

}