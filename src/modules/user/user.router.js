import Router from 'express'
import { forgetPassword, home, login, register, store } from './user.controller.js'
const userRouter=Router()
userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.post('/forgetPassword',forgetPassword)
userRouter.get('/home',home)
userRouter.get('/storeDetails/1',store)
export default userRouter