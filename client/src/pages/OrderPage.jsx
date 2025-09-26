import React from "react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const cartData = useSelector((state) => state.cartRed.cartData);

  return (
    <div className="mx-auto container">
      <div className="py-20 px-6 md:px-0">
        <h1 className="text-[#343434] font-500 font-medium text-[28px] uppercase flex items-center md:text-[35px] text-center ">
          <span className="text-[#707070] mr-2">My </span> Orders
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>
      </div>
      <div className="flex flex-col px-6 md:px-0 ">
        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex md:items-center md:flex-row flex-col py-4 gap-4 justify-between border-y border-gray-300/70 "
          >
            <div className="flex items-center gap-3">
              <div className="">
                <img
                  src={item.image}
                  alt="product image"
                  className="w-[114px] h-full  "
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#494949] font-500 font-medium text-[22px] ">
                  {item.title}
                </p>
                <div className="flex items-center gap-3 text-[#494949] font-300 text-[20px] ">
                  <p className="">{item.price}</p>
                  <p className="">Quantity: 1</p>
                  <p className="">Size: L</p>
                </div>
                <div className="text-[18px]">
                  Date: <span className="text-[#989898]">25, May, 2024</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:w-2/4 w-full">
              <div className="flex items-center gap-3">
                <div className="text-[#00A625] h-[12px] w-[12px] bg-[#00A625] rounded-full"></div>
                <p className="text-[#454545] text-[20px] ">Ready to ship</p>
              </div>

              <div className="">
                <button className="px-[24px] rounded-sm text-[#454545] py-[8px] cursor-pointer border-[2px] border-gray-300/60 flex items-center justify-center ">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
