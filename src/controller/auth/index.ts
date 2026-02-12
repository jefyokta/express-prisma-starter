import { LoginRequest } from "@/app/validator/login.js";
import type { Controller } from "~/types/index.js";

export  const Login:Controller = async(req,res)=>{
   const data = await LoginRequest.parseAsync(req.body)
}