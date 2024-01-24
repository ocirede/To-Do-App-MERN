import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      required: true,
      unique: true,
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
