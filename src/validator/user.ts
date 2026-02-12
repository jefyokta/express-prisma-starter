
import * as z from "zod"
import { unique } from "./utils.js"
export const User = z.object({
    name:z.string().nonempty(),
    email:z.email().nonempty().refine(unique("user",'email'),{error:"Email has been taken"}),
})