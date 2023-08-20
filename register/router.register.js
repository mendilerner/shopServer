import express from "express";
import registerController from './controller.register.js'
import emailValidator from "../middleWare/emailValidator.js";
import passwordValidator from "../middleWare/passwordValidator.js";
const router = express.Router()


router.post('/sign-up',  emailValidator, passwordValidator, registerController.signUp)

router.post('/login',  emailValidator, passwordValidator, registerController.login)

export default router