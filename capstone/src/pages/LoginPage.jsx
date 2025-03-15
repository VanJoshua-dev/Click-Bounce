import React, { useState, useEffect } from "react";
import Image from "../assets/mdvImage.jpg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
function LoginPage() {
  //navigate
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      navigate("/verify-login"); // Redirect if login is successful
    } else {
      alert(data.message); // Show error message
    }

    // Clear form values (use empty string, not null)
    setUsername("");
    setPassword("");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* notification */}
      {/* <div className='w-full p-2'>
          <div>

          </div>
      </div> */}
      <div className=" w-180 h-100 flex flex-row bg-white rounded-xl shadow-[0px_0px_6px_6px_rgba(0,_0,_0,_0.1)]">
        <div
          className="image-container flex justify-center items-center h-full w-170 bg-cover opacity-70 rounded-l-xl"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <h1 className="text-3xl text-center text-white font-bold">
            MDV Inflatables and Catering
          </h1>
        </div>
        <div className="flex p-5  flex-col justify-center items-center w-full">
          <h1 className="text-2xl font-semibold">Login Page</h1>
          <form onSubmit={handleLogin} className=" p-5 pt-10 h-full w-full">
            <div className="flex flex-col p-3">
              <label htmlFor="username" className="text-start pl-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-2 rounded-full h-10 p-3"
                required
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="password" className="pl-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded-full h-10 p-3"
                required
              />
            </div>
            <div className="flex justify-center items-center p-5">
              <button
                type="submit"
                className="bg-blue-500 p-2 pl-15 pr-15 rounded-full text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-[300ms] ease-in"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
