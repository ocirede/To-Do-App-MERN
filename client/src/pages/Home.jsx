import Task from "../components/Task";
import { useTaskContext } from "../context/TaskContext";

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    <div className="w-full h-full mt-12 flex flex-col ">
      <label className="flex flex-col items-center">
        <input className=" w-1/2  h-10 border" placeholder="search tasks" type="text" />
      </label>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  m-10">
        {tasks?.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
}
