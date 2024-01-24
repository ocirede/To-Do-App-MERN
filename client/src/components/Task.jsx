import React, { useState } from "react";
import {Trash2} from "lucide-react";
import { useTaskContext } from "../context/TaskContext";

const Task = ({ taskId, title, content, completed, priority, creator }) => {
  const { handleDelete } = useTaskContext();
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer m-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className=" flex justify-between">
        <button
          onClick={handleCompleted}
          className={`text-white font-bold py-1 px-2 rounded ${
            isCompleted ? "bg-green-500" : "bg-yellow-500"
          }`}
        >
          {isCompleted ? "Completed" : "Pending"}
        </button>
          <Trash2 onClick={()=>handleDelete(taskId)}/>
        </div>
        <div
          className={`text-sm text-gray-600 mt-2 ${
            priority === "Low"
              ? "text-green-500"
              : priority === "Medium"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          Priority: {priority}
        </div>
        <div className="text-sm text-gray-600 mt-2">Creator: {creator}</div>
      </div>
    </li>
  );
};

export default Task;
