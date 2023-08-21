import express from "express";
const router = express.Router();
import usersController from './controller.users.js'
import usersMiddleWare from './middleWare.users.js'
import valUsers from "./validate.users.js";

router.get("/", usersMiddleWare.isAdminUser, usersController.getUsers)

router.get("/:id", valUsers.idValidate, usersMiddleWare.isCreatorOrAdmin, usersController.getUser)

router.put("/:id", valUsers.idValidate, valUsers.userValidate , usersMiddleWare.isCreator, usersController.updateUser)

router.delete("/:id", valUsers.idValidate, usersMiddleWare.isCreatorOrAdmin, usersController.deleteUser)

export default router