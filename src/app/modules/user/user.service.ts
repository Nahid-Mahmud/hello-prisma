import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUserIntoDB = async (payload: User) => {
  const isUserExitst = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isUserExitst) {
    throw new Error("User already exists");
  }

  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const findSingleUser = async (_id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: _id,
    },
  });
  return user;
};

const updateUser = async (id: string, payload: User) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const UserService = { createUserIntoDB, findSingleUser, getAllUsers, updateUser, deleteUser };
