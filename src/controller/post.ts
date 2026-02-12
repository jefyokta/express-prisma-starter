import type { Request, Response } from "express"
import { prisma } from "~/lib/prisma.js"
export default class Post {
    static async index(req:Request,res:Response){
        const data =await prisma.post.findMany()
        return res.json(data)    
    }
}