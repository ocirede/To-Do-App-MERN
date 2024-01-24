import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function SignUp() {
  const {handleRegister} = useUserContext()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className=" text-5xl mb-6"> Welcome to ToDoist</h1>

      <form onSubmit={handleRegister} className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6">Create Account</h2>

        <div className="mb-4">
          <label
            htmlFor="credentials"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="mb-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Create your account
            </button>
        </div>
      </form>

      <span className="text-gray-600">
        Already have an account?{" "}
        <Link className="text-blue-500" to="/signin">
          Sign in
        </Link>
      </span>
    </div>
  );
}
