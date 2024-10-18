import express from "express";
import { userRoutes } from "./app/modules/user/user.route";

export const app = express();
app.use(express.json());

app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Prisma!");
});
