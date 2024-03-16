import express from 'express'
import userRouter from './src/modules/user/user.router.js'
import dotenv from'dotenv'
import cors from 'cors'
const app=express()
dotenv.config()
const port=+process.env.PORT
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})