import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log("🚀 ~ error in Registering:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleSignIn = async (req, res) => {
  try {
    const {password, email } = req.body;
    const findUser = await User.findOne({ email});
    // if (!findUser) return res.status(404).send("User not found");
    const isMatched = await bcrypt.compare(password, findUser.password);
    if (!isMatched || !findUser)
      return res.status(400).send("Wrong username or password");
    const token =  jwt.sign({id: findUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: "1d",});
    res.json({token});
  } catch (error) {
    console.log("🚀 ~ error in sigIn:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const fetchLoggedUser =async (req, res) => {
  try {
    const userId = req.user.id;
 const user = await User.findOne({_id: userId});
 res.json(user)
  } catch (error) {
    console.log(error)
  }
 
}
