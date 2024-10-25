// import express

import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUSers);
router.get("/:id", UserController.getSingleUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const userRoutes = router;
