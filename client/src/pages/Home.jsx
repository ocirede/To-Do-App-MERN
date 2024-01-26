import SearchBar from "../components/SearchBar";
import Task from "../components/Task";
import { useTaskContext } from "../context/TaskContext";
import { useUserContext } from "../context/UserContext";
import SignUp from "./SignUp";

export default function Home() {
  const { tasks } = useTaskContext();
  const { user } = useUserContext();

  return (
    <div>
      {user ? (
        <div className="w-full h-full mt-12 flex flex-col ">
          <SearchBar />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
            {tasks?.map((task) => (
              <Task key={task._id} task={task} />
            ))}
          </ul>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
}
