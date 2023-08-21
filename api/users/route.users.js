import express from "express";
const router = express.Router();
import usersController from './controller.users.js'
import usersMiddleWare from './middleWare.users.js'

router.get("/", usersMiddleWare.isAdminUser, usersController.getUsers)

router.get("/:id", usersMiddleWare.isCreatorOrAdmin, usersController.getUser)

router.put("/:id", usersMiddleWare.isCreator, usersController.updateUser)

router.delete("/:id", usersMiddleWare.isCreatorOrAdmin, usersController.deleteUser)

export default router