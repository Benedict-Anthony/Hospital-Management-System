import jwt from "jsonwebtoken"

export function verifyUserToken(reqToken:string) {
    const token = reqToken
    const verifyToken:any = jwt.verify(token, process.env.SECRET_KEY as string)
    
    return {token, verifyToken}
}