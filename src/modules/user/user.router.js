import Router from 'express'
import { forgetPassword, login, register } from './user.controller.js'
const userRouter=Router()
userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.post('/forgetPassword',forgetPassword)
export default userRouter