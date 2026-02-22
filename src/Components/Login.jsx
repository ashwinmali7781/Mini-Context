import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-2xl w-80 flex flex-col gap-4 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Login</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />

        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;