import { Link } from "react-router-dom";
import { Home, SquarePen, LogOut, CircleUserRound } from "lucide-react";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const { user, handleLogout } = useUserContext();
  return (
    <>
      <nav className="w-full h-16 flex justify-center items-center">
        <ul className="  w-full flex justify-center items-center md:gap-4 lg:gap-16">
          {user ? (
            <>
              <Link to="/">
                <Home />
              </Link>
              <Link to="/write-task">
                <div className="flex md:flex gap-4">
                  <SquarePen /> Add a task
                </div>
              </Link>
              <div className="hidden md:flex gap-4 items-center">
                <CircleUserRound />
                <p>Welcome {user.name}</p>
              </div>
              <Link onClick={handleLogout} to="/signin">
                <LogOut />
              </Link>
            </>
          ) : (
            <div className="hidden md:flex gap-16 w-full lg:flex justify-end mr-10  ">
              <Link to="/signin">Sign-In</Link>
              <Link to="/signup">Sign-Up</Link>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

