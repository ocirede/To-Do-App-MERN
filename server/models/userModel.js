import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      unique: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,

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
