// fetch("http://localhost:8000/user",{
//     method:"post",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({name:"jepo"})
// }).then(r=>r.json()).then(console.log)
import z from "zod";

const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], 
  });
  const result = passwordForm.safeParse({ password: "asdf", confirm: "qwer" });
  console.log(result.error?.issues)
