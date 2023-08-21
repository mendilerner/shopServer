import express from "express";
const router = express.Router();
import usersController from './controller.users.js'
import usersMiddleWare from './middleWare.users.js'

router.get("/", usersMiddleWare.isAdminUser, usersController.getUsers)

// router.get("/:id", usersController.getUser)

router.put("/:id", usersMiddleWare.isCreator, usersController.updateUser)

// router.delete("/", usersController.deleteUsers)

export default router