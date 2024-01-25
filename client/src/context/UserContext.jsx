import axios from "../config/axiosAuth.js";
import { baseURL } from "../config/api.js";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (user) {
    //   setUser(JSON.parse(user));
    // }
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(baseURL + "/user/loggeduser");
          setUser(response.data);
          console.log("=====>",response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const newUser = await axios.post(baseURL + "/user/register", body);

      console.log(newUser);
      e.target.reset();
      window.location.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const { data: user } = await axios.post(baseURL + "/user/signin", body);
      // localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.token);
      e.target.reset();
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    console.log(user);
  };

  return (
    <UserContext.Provider
      value={{ user, handleRegister, handleSignin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
