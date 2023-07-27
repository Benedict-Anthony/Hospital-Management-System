import {Response, Request, NextFunction} from "express"
import { ErrorResponse } from "../utils/errResponse"


function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    console.log(error.name)
    switch (error.name) {
        case "ValidationError":
            const message = Object.keys(error.errors).map((field) => ({
                field,
                msg:  ErrorResponse.message(`${field} is required`)
            }))
            return res.status(400).json({
                success: false,
                message
            })
        case "MongoServerError":
            if (error.code === 11000) {
                const duplicateValue =Object.keys(error.keyValue)[0]
                
                return res.status(400).json({msg:ErrorResponse.message(`this ${duplicateValue} already exist`)})
            }


            return res.status(400).json({ msg: "Bad request" })
        case "CastError":
            return res.status(400).json({msg:ErrorResponse.message(`cannot get the resource`)})

        default:
            return next(error)
    }
   
}

export default errorHandler