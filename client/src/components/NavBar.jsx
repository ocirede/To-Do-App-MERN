import { Link } from "react-router-dom";
import { Home, SquarePen, LogOut } from "lucide-react";

export default function NavBar() {
  
  return (
    <>
      <nav className="w-full h-16 flex justify-center items-center">
        <ul className=" w-1/2 flex  justify-between  gap-4">
        <Link to="/" >
          <Home />
          </Link>
          <Link to="/write-task">
          <div  className="flex gap-4">
            <SquarePen /> Write a task
          </div>
          </Link>
          <div>
            <p>
              Welcome Federico
            </p>
          </div>
          <Link to="/signin">
          <LogOut />
          </Link>
          <div className=" flex gap-24">
          <Link to="/signin">
          Sign-In
          </Link>
          <Link to="/signup">
          Sign-Up
          </Link>
          </div>
         
        </ul>
      </nav>
    </>
  );
}
