import express from "express";
import User from "@/app/controller/user.js";
import { OnlyAcceptJson } from "@/app/middleware/only-accept-json.js";
import { ValidationCatcher } from "@/app/middleware/validation-catcher.js";
import { Login } from "./controller/auth/index.js";

const app = express()

app.use(express.json())
app.use(OnlyAcceptJson.handle)

app.post("/login",Login)
app.get("/user",User.index)
app.post("/user", User.store)

app.use(ValidationCatcher.handle)


app.listen(8000,()=>{
    console.log(`server started at  port ${3000}`)
})
