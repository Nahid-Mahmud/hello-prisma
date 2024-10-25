import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUserIntoDB(req.body);
    res.status(201).send(user);
  } catch (e) {
    console.log(e);
  }
};

const getAllUSers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.findSingleUser(req.params.id);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateUser(req.params.id, req.body);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.deleteUser(req.params.id);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
  }
};

export const UserController = { createUser, getSingleUser, getAllUSers, updateUser, deleteUser };
