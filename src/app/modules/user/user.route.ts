// import express

import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUSers);
router.get("/users/:id", UserController.getSingleUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export const userRoutes = router;
