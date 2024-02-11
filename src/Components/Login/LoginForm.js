import axios from "axios";
import React, { useRef } from "react";
import { FaLockOpen, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  //use for navigate to redirect on next page
  const navigate = useNavigate();

  //useRef use for avaoid unwanted rendering
  const inputUsername = useRef(null);
  const enterPassword = useRef(null);

  //asycn is used for promise handle

  const handleOnLogin = async () => {
    const username = inputUsername.current.value;
    const password = enterPassword.current.value;
    try {
      const response = await axios.post(
        "http://localhost:9090/api/users/login",
        {
          username,
          password,
        }
      );
      const result = await response.data;
      if (response.status === 200) {
        console.log(result);
        alert(response.data.message);
        navigate("/Dashbord");
      }
    } catch (error) {
      console.log(error);
      // alert(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="relative h-screen w-full">
      <ToastContainer />
      <img
        className="fixed bg-cover z-0"
        src="https://wallpapercave.com/wp/wp9470226.jpg"
        alt=""
      />
      <div className="bg-zinc-50/20 z-10 relative flex justify-center top-[30%] mx-auto w-96 h-auto p-2 py-9 backdrop-blur-lg rounded-xl">
        <div>
          <div className="font-extrabold text-2xl text-center py-4 text-white uppercase tracking-widest">
            Login
          </div>
          <div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm mb-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-xl ">
                    <FaUserCircle />
                  </span>
                </div>
                <input
                  ref={inputUsername}
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-2.5 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-xl ">
                    <FaLockOpen />
                  </span>
                </div>
                <input
                  ref={enterPassword}
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-2.5 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>

              <button
                onClick={handleOnLogin}
                className="w-full py-2.5 bg-sky-300 my-4 rounded-lg"
              >
                Login
              </button>

              <div className="my-3 text-center">
                Dont have an account?{" "}
                <a className="text-blue-700" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
