import React from "react";
import heroImg from "../assets/heroImg.png";
import easyExchange from "../assets/easyExchange.svg";
import returnPolicy from "../assets/returnPolicy.svg";
import customerSupport from "../assets/customerSupport.svg";
import Subscribe from "../components/Subscribe";

const HomePage = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="border-[1px] border-[#ADADAD]/30 grid grid-cols-1 md:grid-cols-2 mb-8 ">
        <div className="flex flex-col gap-4 py-20 pl-12 md:pl-18 md:items-start justify-center">
          <p className="flex items-center text-[#414141] font-500 font-medium text-[18px] ">
            <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#484848] before:block mr-2'></span>
            OUR BESTSELLER
          </p>
          <h1 className="font-[prata] text-[#414141] text-[60px]  ">Latest Arrivals</h1>
          <p className="flex items-center text-[#414141] font-500 font-medium text-[18px] ">
            
            SHOP NOW
            <span className='before:content-[""] before:h-[1px] before:w-[40px] before:bg-[#484848] before:block ml-2'></span>
          </p>

        </div>
        <div className="w-full">
          <img src={heroImg} alt="hero image" className="w-full object-cover" />
        </div>
      </div>
      {/* third section */}
      <div className="flex items-center justify-between flex-col md:flex-row gap-20 py-20 md:px-20">
        <div className="flex flex-col gap-3 items-center">
          <img src={easyExchange} alt="easy-exchange" className="h-[43.02px] w-[43.02px] " />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">Easy Exchange Policy</p>
          <p className="text-[#898989] text-[18px] ">We offer hassle free  exchange policy</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={returnPolicy} alt="return-policy" className="h-[43.02px] w-[43.02px] " />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">7 Days Return Policy</p>
          <p className="text-[#898989] text-[18px] ">We provide 7 days free return policy </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={customerSupport} alt="customer support" className="h-[43.02px] w-[43.02px] " />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">Best Customer Support</p>
          <p className="text-[#898989] text-[18px] ">We provide 24/7 customer support</p>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default HomePage;
