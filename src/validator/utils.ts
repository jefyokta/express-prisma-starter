import { prisma } from "../../lib/prisma.js"
import { z } from "zod"

type ModelName = keyof typeof prisma

export const unique =<T extends ModelName>( model: T,field: string) =>
  async (value: any) => {
    const exists = await (prisma[model] as any).findFirst({
      where: { [field]: value }
    })

   return !!! exists
  }
export const exists = <T extends ModelName>( model: T,field: string) =>
  async (val:any)=>{
      const exists = await (prisma[model] as any).findFirst({
      where: { [field]: val }
    })

   return !! exists
  }