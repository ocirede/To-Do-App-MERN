import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link to="/" className="mb-8">
      <h1 className=" text-5xl"> Welcome to ToDoist</h1>
      </Link>

      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6">Create Account</h2>

        <div className="mb-4">
          <label htmlFor="credentials" className="block text-gray-700 text-sm font-bold mb-2">Your name</label>
          <input
            id="credentials"
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
            required
            autoComplete="name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            required
            autoComplete="email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            required
            autoComplete="new-password"
          />
        </div>

        <div className="mb-6">
          <Link to="/signinpage">
            <button
              id="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Create your account
            </button>
          </Link>
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

