import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../Redux/CartDataSlice";
import bin_icon from "../assets/bin_icon.svg";
import increment from "../assets/arr-Up.svg";
import decrement from "../assets/arr_down.svg";
import {
  cartIncrement,
  cartDecrement,
  removeFromCart,
} from "../Redux/CartDataSlice";

const CartPage = () => {
  const cartData = useSelector((state) => state.cartRed.cartData);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto container">
      <div className="py-20">
        <h1 className="text-[#343434] font-500 font-medium text-[28px] uppercase flex items-center md:text-[35px] text-center ">
          <span className="text-[#707070] mr-2">Your </span> Cart
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>
      </div>
      {/* Display Cart */}
      <div className="flex flex-col ">
        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-4 justify-between border-y border-gray-300/70 "
          >
            <div className="flex items-center gap-3 w-[500px]">
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
            <div className="flex items-center px-6 w-[140px] h-[50px] justify-between border border-[#DFDFDF]">
              <div className="">{item.quantity}</div>
              <div className="flex flex-col gap-1 items-center">
                <img
                  onClick={() => dispatch(cartIncrement(item.id))}
                  src={increment}
                  alt="increment"
                  className="h-[13px] w-[15px] "
                />
                <img
                  onClick={() => dispatch(cartDecrement(item.id))}
                  src={decrement}
                  alt="decrement"
                  className="h-[13px] w-[15px] "
                />
              </div>
            </div>
            <div className="cursor-pointer ">
              <img
                onClick={() => dispatch(removeFromCart(item.id))}
                src={bin_icon}
                alt="bin icon"
                className="w-[25px] h-[25px] "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Check Out */}
      <div className="w-full flex items-start justify-end bg-red-100 my-10">
        <div className="w-1/3 flex  bg-gray-300 h-[500px] p-6 ">
          <div className="">
            <h1 className="text-[#343434] font-400 text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2">Cart </span> Totals
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
