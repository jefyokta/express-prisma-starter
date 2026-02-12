import {prisma} from "./../../lib/prisma.js"
import {User as U} from "@/app/validator/user.js"
import { type Request,type Response } from "express"

export default class User {
   static async index(req:Request,res:Response){
        const users = await prisma.user.findMany()
        return res.json(users)
    }

    static async store(req:Request,res:Response){
        const data = await U.parseAsync(req.body)
        const result = await prisma.user.create({ data })
        return res.json({status:"ok"})
    }
}