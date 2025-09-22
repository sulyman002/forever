import React from "react";
import Subscribe from "../components/Subscribe";

const SignUp = () => {
  return (
    <div className="mx-auto container">
      <div className="flex items-center flex-col justify-center py-40">
        <h1 className="text-[#414141] font-400 font-[prata] text-[28px] md:text-[40px]  flex items-center  text-center ">
          Sign Up
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>


        <form className="w-full md:w-auto">
          <div className="flex flex-col gap-5 py-8 px-6 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-400 py-2 w-full md:w-[514px] pl-4"
            />
            <input
              type="email"
              name="name"
              placeholder="Email"
              className="border border-gray-400 py-2 w-full md:w-[514px] pl-4"
            />
            <input
              type="password"
              name="name"
              placeholder="Password"
              className="border border-gray-400 py-2 w-full md:w-[514px] pl-4"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="h-[53px] w-[153px] bg-black text-white ">
              Create
            </button>
          </div>
        </form>
        
      </div>
      <Subscribe />
    </div>
  );
};

export default SignUp;
