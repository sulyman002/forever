import React from "react";

const OrderPage = () => {
  return (
    <div className="mx-auto container">
      <div className="py-20">
        <h1 className="text-[#343434] font-500 font-medium text-[28px] uppercase flex items-center md:text-[35px] text-center ">
          <span className="text-[#707070] mr-2">My </span> Orders
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[#494949] font-500 font-medium text-[22px] ">Men Round Neck Pure Cotton T-shirt</p>
                <div className="flex items-center gap-3 text-[#494949] font-300 text-[22px] ">
                    <p className="">$149</p>
                    <p className="">Quantity: 1</p>
                    <p className="">Size: L</p>
                </div>
                <div className="">Date: 25, May, 2024</div>
            </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default OrderPage;
