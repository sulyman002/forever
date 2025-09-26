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


console.log(cartData);

let getNew = cartData.map((item) => {
  let Subtotal = item.quantity * item.price;
  
  
  return {Subtotal}
})

console.log(getNew);




  

  return (
    <div className="mx-auto container ">
      <div className="py-20 px-6 md:px-0">
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
            className="flex items-center md:flex-row flex-col py-4 justify-between border-y border-gray-300/70 "
          >
            <div className="flex items-center gap-3 md:w-[500px]">
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
                  <p className="">${item.price}</p>
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
      <div className="w-full flex items-start justify-end my-10 ">
        <div className="md:w-1/3 flex flex-col space-y-6 p-6 w-full ">
          <div className="">
            <h1 className="text-[#343434] font-400 text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2">Cart </span> Totals
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
          </div>

          <div className="flex flex-col gap-5 ">
            <div className="border-b border-[#E5E5E5] flex items-center justify-between font-500 font-medium text-[16px] ">
              <p className=" text-[#555555] ">Subtotal</p>
              <p className="text-[#454545] ">$60.00</p>
            </div>

            <div className="border-b border-[#E5E5E5] flex items-center justify-between font-500 font-medium text-[16px] ">
              <p className=" text-[#555555] ">Shipping Fee</p>
              <p className="text-[#454545] ">$60.00</p>
            </div>
            <div className="border-b border-[#E5E5E5] flex items-center justify-between font-500 font-medium text-[16px] ">
              <p className=" text-[#454545] text-[18px] font-bold font-700 ">
                Total
              </p>
              <p className="text-[#454545] "></p>
            </div>
            
              <div className="flex justify-end items-center mt-8">
                <div className="bg-[#1D1D1D] cursor-pointer text-white font-600 font-semibold text-[16px] flex items-center justify-center px-8 h-[59px] ">
                  PROCEED TO CHECKOUT
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
