import Task from "../components/Task";
import { useTaskContext } from "../context/TaskContext";

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    <div className=" m-44 flex  gap-6  w-full h-full">
      <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {tasks?.map((task) => (
          <Task
            key={task._id}
            taskId={task._id}
            title={task.title}
            content={task.content}
            completed={task.completed}
            priority={task.priority}
            creator={task.creator}
          />
        ))}
      </ul>
    </div>
  );
}
