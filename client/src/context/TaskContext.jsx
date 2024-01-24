import axios from "axios";
import { baseURL } from "../config/api.js";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskContext = createContext(null);

export const useTaskContext = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const createTask = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    const body = {
      title: e.target.title.value,
      content: e.target.task.value,
      priority: e.target.priority.value,
      // creator: user._id
    };

    try {
      const { data: newTask } = await axios.post(baseURL + "/todo/add", body);
      setTasks([...tasks, newTask]);
      console.log(newTask);
      console.log(tasks);

      e.target.reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getTasks = async () => {
    try {
      const task = await axios.get(`http://localhost:3000/todo/get`);
      setTasks(task.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const handleDelete = async (taskId) => {
    try {
      const { data } = await axios.delete(
        baseURL + "/todo/delete/" + `${taskId}`
      );
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, handleDelete }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
