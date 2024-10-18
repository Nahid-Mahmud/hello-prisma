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

export const UserService = { createUserIntoDB };
