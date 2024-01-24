import User from "../models/userModel.js";

export const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log("🚀 ~ error in Registering:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleSignIn = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const findUser = await User.findOne({ email});
    if (!findUser) return res.status(404).send("User not found");
    if (findUser.password !== password)
      return res.status(400).send("Wrong username or password");
    res.json(findUser);
    console.log(findUser)
  } catch (error) {
    console.log("🚀 ~ error in sigIn:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
