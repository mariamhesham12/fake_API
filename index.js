import express from 'express'
import userRouter from './src/modules/user/user.router.js'
const app=express()
const port=3000
app.use(express.json())
app.use(userRouter)
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})