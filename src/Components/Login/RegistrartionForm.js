import axios from "axios";
import React, { useEffect, useRef } from "react";
import { FaLockOpen, FaMailBulk, FaPhone, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const inputUsername = useRef(null);
  const enterPhoneNumber = useRef(null);
  const enterEmailId = useRef(null);
  const enterPassword = useRef(null);

  const handleOnClick = async () => {
    const username = inputUsername.current.value;
    const phoneNumber = enterPhoneNumber.current.value;
    const password = enterPassword.current.value;
    const email = enterEmailId.current.value;
    try {
      const response = await axios.post("http://localhost:9090/api/users/", {
        username,
        email,
        password,
        phoneNumber,
      });
      const result = await response.data;
      if (response.status === 201) {
        console.log(result);
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      //alert(error.response.data.password);
      toast.error(error.response.data.password);
      toast.error(error.response.data.email);
    }
  };

  // useEffect(() => {
  //   async function ssss() {
  //     const url = "http://localhost:9090/api/users/";
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log(result);
  //   }
  //   ssss();
  // }, []);

  const inputArray = [
    {
      type: "text",
      name: "username",
      placeholder: "Enter Username",
      icon: <FaUserCircle />,
      ref: inputUsername,
    },
    {
      type: "text",
      name: "phoneNumber",
      placeholder: "Enter phone number",
      icon: <FaPhone />,
      ref: enterPhoneNumber,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter email id",
      icon: <FaMailBulk />,
      ref: enterEmailId,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter password",
      icon: <FaLockOpen />,
      ref: enterPassword,
    },
  ];
  return (
    <div className="relative h-screen w-full">
      <ToastContainer />
      <img
        className="fixed bg-cover z-0"
        src="https://img.freepik.com/free-vector/wave-gradient-background-purple-design_343694-3785.jpg?size=1920&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=ais
        "
        alt=""
      />
      <div className="bg-zinc-50/20 z-10 relative flex justify-center top-[10%] mx-auto w-96 h-auto p-2 py-9 backdrop-blur-lg rounded-xl">
        <div>
          <div className="font-extrabold text-2xl text-center py-4 text-white uppercase tracking-widest">
            Register
          </div>
          <div>
            <div>
              {inputArray.map((input, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="relative mt-2 rounded-md shadow-sm mb-6"
                    >
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-xl ">
                          {input.icon}
                        </span>
                      </div>
                      <input
                        type={input.type}
                        ref={input.ref}
                        name={input.name}
                        id={input.name}
                        className="block w-full rounded-md border-0 py-2.5 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder={input.placeholder}
                      />
                    </div>
                  </>
                );
              })}
              <button
                onClick={handleOnClick}
                className="w-full py-2.5 bg-sky-300 my-4 rounded-lg "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
