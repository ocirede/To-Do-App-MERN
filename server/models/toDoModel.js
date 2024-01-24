import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  completed: {
    type: Boolean,
    default: false
  },

  priority: {
    type: String,
    default: "low"
  }


}, {
    timestamps: true,
});

const Todo = mongoose.model("todo", toDoSchema);

export default Todo;
