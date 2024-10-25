import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.get("/", PostController.getAllPosts);
router.post("/", PostController.createPost);
router.get("/:id", PostController.findSinglePost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export const postsRoutes = router;
