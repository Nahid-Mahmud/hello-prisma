import express from "express";
import { userRoutes } from "./app/modules/user/user.route";
import { postsRoutes } from "./app/modules/posts/posts.route";

export const app = express();
app.use(express.json());

app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Hello Prisma!");
});
