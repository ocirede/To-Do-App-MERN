import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import WriteTask from "./pages/WriteTask";
import SignIn from "./pages/SignIn";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <>
      <NavBar />
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write-task" element={<WriteTask />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
