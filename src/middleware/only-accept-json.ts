import { type NextFunction, type Request,type Response } from "express";
export class OnlyAcceptJson{
    static handle(req:Request,res:Response,next:NextFunction){
        if (!(["get","head"].includes(req.method.toLowerCase()) )&& req.header("content-type")?.toLowerCase() !== 'application/json') {
            return res.status(422).json("Only json accepted")            
        }
        next()
    }
}