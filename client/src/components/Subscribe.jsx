import React, { useState } from "react";

const Subscribe = () => {
  const [change, setChange] = useState("");
  const handleChange = (event) => {
    setChange(event.target.value);
    console.log(event.target.value);
    
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="font-500 font-medium md:text-[28px] text-[22px] text-center text-[#373737] ">
          Subscribe now & get 20% off
        </h2>
        <p className="md:text-[16px] text-[12px]  text-center text-[#9A9A9A]">
          Lorem Ipsum, is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center border border-[#C7C7C7] md:gap-20 ">
        <input
          name="email"
          onChange={handleChange}
          value={change}
          type="email"
          required
          placeholder="Enter your email id"
          className="pl-4  outline-none"
        />
        <button className="text-[16px] text-white md:px-[40px] px-[20px] h-[54px] bg-black ">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
