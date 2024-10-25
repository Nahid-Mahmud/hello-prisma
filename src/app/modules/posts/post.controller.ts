import { Request, Response } from "express";
import { PostService } from "./post.service";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await PostService.getAllPosts();
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.createPostIntoDB(req.body);
    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

const findSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.findSinglePost(req.params.id);
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.updatePost(req.params.id, req.body);
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.deletePost(req.params.id);
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const PostController = { getAllPosts, createPost, findSinglePost, updatePost, deletePost };
