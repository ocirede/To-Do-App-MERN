import express from "express";
import { handleRegister, handleSignIn } from "../Controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/register", handleRegister )
userRouter.post("/signin", handleSignIn );


export default userRouter;