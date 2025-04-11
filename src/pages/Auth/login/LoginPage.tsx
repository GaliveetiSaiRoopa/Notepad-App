import React, { useState } from "react";
import LoginBackground from "../../../components/assests/bgLogin.svg";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const initaial_states = {
    email: "",
    password: "",
    remember_me: false,
  };

  const [params, setParams] = useState(initaial_states);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="bg-[#fdf8f8] w-full min-h-screen flex gap-8 ">
      <div className="lg:block hidden 3xl:w-[60%] 2xl:w-[62%] w-[65%]">
        <div className="h-full flex justify-center items-center">
          <img
            src={LoginBackground}
            alt="hero-image"
            className="w-[600px] h-[600px] "
          />
        </div>
      </div>
      <div className="bg-[#61aeb6] 3xl:w-[40%] 2xl:w-[38%] lg:w-[35%] w-full px-8 lg:block flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4 lg:h-full lg:bg-[#61aeb6] bg-[#3e6b70] md:h-[60%] h-[60%] lg:w-full md:w-[45%] rounded-lg lg:px-0 md:px-8 px-4">
          <h1 className="3xl:text-5xl 2xl:text-4xl lg:text-3xl text-2xl font-semibold text-[#020303] w-full text-start md:py-4 py-1 plus-jakarta-sans-header ">
            Login to NoteZipper
          </h1>
          <div className="w-full">
            {/* <label htmlFor="email">Name:</label> */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              id="email"
              value={params?.email}
              onChange={handleChange}
              className="w-full 3xl:h-16 2xl:h-14 h-10 text-base text-black rounded-md px-4"
            />
          </div>
          <div className="w-full relative">
            {/* <label htmlFor="password">Password</label> */}
            <input
              name="password"
              type={isHidden ? "password" : "text"}
              placeholder="Password"
              id="password"
              value={params?.password}
              onChange={handleChange}
              className="w-full 3xl:h-16 2xl:h-14 h-10 text-base text-black rounded-md px-4"
            />

            <button
              className="absolute right-3 top-2"
              onClick={() => setIsHidden(!isHidden)}
            >
              <img src={isHidden ? "/icons/hidden.svg" : "/icons/shown.svg"} />
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex 3xl:gap-4 gap-2 items-center">
              <input
                type="checkbox"
                name="remember_me"
                value="remember_me"
                id="remember_me"
                className="md:w-5 md:h-5 w-4 h-4 rounded"
              />
              <label
                htmlFor="remember_me"
                className="3xl:text-xl md:text-base text-sm plus-jakarta-sans-normalFont"
              >
                Remember Me
              </label>
            </div>
            <div className="3xl:text-xl md:text-base text-sm plus-jakarta-sans-normalFont">
              Forgot Password?
            </div>
          </div>
          <button
            className="w-full 3xl:py-3 md:py-2 py-1 text-center rounded-lg bg-[#193133] text-white 3xl:text-2xl text-xl font-bold hover:bg-[#3798a1] plus-jakarta-sans-normalFont"
            type="button"
            onClick={() => navigate("/notes")}
          >
            Login
          </button>
          <p className="3xl:text-xl md:text-base text-sm w-full text-start 3xl:py-4 lg:py-2 py-1 plus-jakarta-sans-normalFont">
            Don't have an account?{" "}
            <span
              className="text-[#aec3c5] underline 3xl:text-2xl 2xl:text-xl md:text-lg text-sm plus-jakarta-sans-normalFont"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
