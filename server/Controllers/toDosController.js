import Todo from "../models/toDoModel.js";

export const createTask = async (req, res) => {
  console.log(req.body)
  try {
    const newTask = new Todo(req.body);
    await newTask.save();
    await newTask.populate("creator");
    res.json(newTask);
    console.log(newTask)
  } catch (error) {
    console.log("🚀 ~ error in createTask:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await Todo.find().populate("creator");
    res.json(getAllTasks);
  } catch (error) {
    console.log("🚀 ~ error in getAll:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateTask = async (req, res) => {
  
  try {
   
    const updateTask = await Todo.findByIdAndUpdate(req.params.id, req.body,

      {
        new: true,
      }
    );

    res.json(updateTask);
  } catch (error) {
    console.log("🚀 ~ error in updateTask:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Todo.findByIdAndDelete(req.params.taskId);
        res.json(deleteTask);
    } catch (error) {
        console.log("🚀 ~ error in deleteTask:", error.message);
        res.status(500).json({ success: false, error: error.message });
      }
  
};
