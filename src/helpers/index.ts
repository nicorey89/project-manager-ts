import { Response } from "express";
import { Types } from "mongoose";
import jwt from 'jsonwebtoken'

export interface TokenInterface {
    id : Types.ObjectId
}

export const errorResponse = (res: Response, error: any, origin : string) => {

    return res.status(error.status || 500).json({ 
        ok : false, 
        msg : error instanceof Error ? error.message : `Upss, hubo un error en ${origin}`
    }) 
}

export const generateTokenRandom = () => {
    const random = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
    return random + date
}

export const generateJWT = (payload : TokenInterface) => jwt.sign(payload, process.env.JWT_SECRET as string,{
 expiresIn : '1h'
})
