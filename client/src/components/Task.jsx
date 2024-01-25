import React, { useState } from "react";
import axios from "axios";

import { Trash2, Pen } from "lucide-react";
import { useTaskContext } from "../context/TaskContext";
import { baseURL } from "../config/api";
import { useUserContext } from "../context/UserContext";

const Task = ({ task }) => {
  const { handleDelete } = useTaskContext();
  const { user } = useUserContext();
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [clicked, setCilicked] = useState(false);

  const handleCompleted = async () => {
    try {
      const body = {
        completed: !isCompleted,
      };
      const updateTask = await axios.put(
        baseURL + `/todo/update/${task._id}`,
        body
      );
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setCilicked(true);
  };

  const updateTask = async (e) => {
    e.preventDefault()
    try {
      const bodyUpdated = {
        title : e.target.title.value,
        content: e.target.content.value
      };

      const updatedTask = await axios.put(baseURL + `/todo/update/${task._id}`, bodyUpdated);
      console.log(updatedTask)
      setCilicked(false)
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        clicked ? (
          <li className="flex flex-col items-center gap-4 border p-4 md:w-64 md:h-64 lg:w-72 lg:h-72 m-8">
            <form onSubmit={updateTask} className="w-full">
              <h2 className="text-xl font-semibold mb-2">
                <textarea
                defaultValue={task.title}
                  name="title"
                  className="p-1 border rounded text-black"
                  cols={16}
                  rows={1}
                />
              </h2>
              <p className="text-gray-700 mb-4">
                <textarea
                defaultValue={task.content}
                  name="content"
                  className="p-1 border rounded text-black"
                  cols={16}
                  rows={4}
                />
              </p>
              <button
                type="submit"
                className="bg-green-500 text-white py-1 px-4 rounded mt-4"
              >
                Save
              </button>
            </form>
          </li>
        ) : (
          <li className="flex flex-col gap-4 border p-4 md:w-64 md:h-64 lg:w-72 lg:h-72 m-8">
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-700 mb-4">{task.content}</p>

            <div
              className={`text-sm text-gray-600 mt-2 ${
                task.priority === "Low"
                  ? "text-green-500"
                  : task.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Priority: {task.priority}
            </div>

            <div className="flex  md:flex-row justify-between items-center">
              <button
                onClick={handleCompleted}
                className={`text-white font-bold py-1 px-2 rounded ${
                  isCompleted ? "bg-green-500" : "bg-yellow-500"
                } ${user._id !== task.creator._id ? "disabled" : ""}`}
              >
                {isCompleted ? "Completed" : "Pending"}
              </button>
              <Pen
                onClick={handleEdit}
                className={` cursor-pointer ${
                  user._id !== task.creator._id ? "disabled" : ""
                } `}
              />
              <Trash2
                className={`cursor-pointer ${
                  user._id !== task.creator._id ? "disabled" : ""
                }`}
                onClick={() => handleDelete(task._id)}
              />
            </div>

            <div className="text-sm text-gray-600 mt-2">
              Creator: {task.creator.name}
            </div>
          </li>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Task;
