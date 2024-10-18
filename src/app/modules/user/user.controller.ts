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

export const UserController = { createUser };
