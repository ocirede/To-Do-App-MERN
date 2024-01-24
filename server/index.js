import express from "express";
import cors from "cors";
import { port } from "./lib/env.vars.js";
import connectDB from "./lib/connectDB.js";
import router from "./routes/toDoRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/todo", router);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  connectDB()
});
