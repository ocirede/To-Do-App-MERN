import { useTaskContext } from "../context/TaskContext";

const WriteTask = () => {
  const { createTask } = useTaskContext();
  const maxLength = 50
  return (
    <div className="bg-teal-300 h-full flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl mb-4">Add a Task</h1>

      <form
        onSubmit={createTask}
        className="bg-white w-2/3 max-w-md p-4 flex flex-col gap-4 border rounded-md items-center"
      >
        <label className="flex flex-col gap-2 w-full">
          Title:
          <input className="border p-2 rounded w-full" type="text" name="title" />
        </label>

        <label className="flex flex-col gap-2 w-full">
          Task content:
          <input className="border p-2 rounded w-full" type="text" name="content" maxLength={maxLength} />
        </label>

        <label className="flex items-center gap-2 w-full">
          Priority:
          <select name="priority" className="border p-2 rounded w-full">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <button className="border p-2 w-1/2 bg-teal-500 text-white rounded-md" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default WriteTask;

