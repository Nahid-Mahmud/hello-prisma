import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

const createPostIntoDB = async (payload: Post) => {
  const result = await prisma.post.create({
    data: payload,
  });
  return result;
};

const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return posts;
};

const findSinglePost = async (_id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: _id,
    },
  });
  return post;
};

const updatePost = async (id: string, payload: Post) => {
  const post = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });
  return post;
};

const deletePost = async (id: string) => {
  const post = await prisma.post.delete({
    where: {
      id,
    },
  });
  return post;
};

export const PostService = { createPostIntoDB, findSinglePost, getAllPosts, updatePost, deletePost };
