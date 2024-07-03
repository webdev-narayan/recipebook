import { Request } from "express";
import JWT from "jsonwebtoken";
import { jwt_secret } from "src/config";

export const jwtSign = (payload: any) => {
    try {
        const token = JWT.sign(payload, jwt_secret, { expiresIn: "7d" })
        return token
    } catch (error) {
        return error
    }
}

export const jwtVerify = (req: Request) => {
    const token = req.headers.authorization.split("Bearer")[1]
    return JWT.verify(token, jwt_secret)
}