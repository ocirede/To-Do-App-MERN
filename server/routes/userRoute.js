import express from "express";
import { handleRegister, handleSignIn, fetchLoggedUser } from "../Controllers/authController.js";
import auth from "../middlewares/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", handleRegister )
userRouter.post("/signin",   handleSignIn );
userRouter.get("/loggeduser", auth, fetchLoggedUser)

export default userRouter;