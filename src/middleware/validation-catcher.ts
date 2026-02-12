import { type NextFunction, type Request,type Response } from "express";
import { ZodError ,treeifyError} from "zod";

export class ValidationCatcher {
  static handle(err:unknown,req:Request,res:Response,next:NextFunction)
  {
    if (err instanceof ZodError) {
        return res.status(422).json(treeifyError(err))
        
    }
    next(err)
 }
}