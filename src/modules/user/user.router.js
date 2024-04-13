import Router from 'express'
import { forgetPassword, home, login, register } from './user.controller.js'
const userRouter=Router()
userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.post('/forgetPassword',forgetPassword)
userRouter.get('/home',home)
export default userRouter