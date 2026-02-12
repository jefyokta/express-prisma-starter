import z from "zod";


export const LoginRequest = z.object({
    email: z.email().nonempty(),
    password: z.string().nonempty()
})