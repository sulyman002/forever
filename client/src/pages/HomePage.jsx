import React, { useEffect, useState } from "react";
import heroImg from "../assets/heroImg.png";
import easyExchange from "../assets/easyExchange.svg";
import returnPolicy from "../assets/returnPolicy.svg";
import customerSupport from "../assets/customerSupport.svg";
import Subscribe from "../components/Subscribe";
import axios from "axios";

const HomePage = () => {
  const [clothData, setClothData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("/public/clothData.json")
        .then((resp) => setClothData(resp.data));
    } catch (error) {
      console.error(`No data found: ${error}`);
    }
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-0">
      <div className="border-[1px] border-[#ADADAD]/30 grid grid-cols-1 md:grid-cols-2 mb-8 ">
        <div className="flex flex-col gap-4 py-20 pl-12 md:pl-18 md:items-start justify-center">
          <p className="flex items-center text-[#414141] font-500 font-medium md:text-[18px] text-[16px] ">
            <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#484848] before:block mr-2'></span>
            OUR BESTSELLER
          </p>
          <h1 className="font-[prata] text-[#414141] text-[52px] md:text-[60px]  ">
            Latest Arrivals
          </h1>
          <p className="flex items-center text-[#414141] font-500 font-medium md:text-[18px] text-[16px] ">
            SHOP NOW
            <span className='before:content-[""] before:h-[1px] before:w-[40px] before:bg-[#484848] before:block ml-2'></span>
          </p>
        </div>
        <div className="w-full">
          <img
            src={heroImg}
            alt="hero image"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      {/* Latest Collections */}
      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
            <span className="text-[#707070] mr-2">Latest </span> Collections
            <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
          </h1>
          <p className="text-center text-[#868686] text-[14px] md:text-[18px] ">
            Lorem Ipsum, is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        {/* map the data here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8 space-y-10">
          {clothData.slice(0, 10).map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <div className=" ">
                <img
                  src={item.image}
                  alt="product image"
                  className="h-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-500 font-medium text-[14px] text-[#494949] ">
                  {item.title}
                </p>
                <p className="font-500 font-medium text-[16px] text-[#494949] ">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Best Seller */}
      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
            <span className="text-[#707070] mr-2">Best </span> Seller
            <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
          </h1>
          <p className="text-center text-[#868686] text-[14px] md:text-[18px] ">
            Lorem Ipsum, is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        {/* map the data here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8 space-y-10">
          {clothData.slice(0, 5).map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <div className=" ">
                <img
                  src={item.image}
                  alt="product image"
                  className="h-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-500 font-medium text-[14px] text-[#494949] ">
                  {item.title}
                </p>
                <p className="font-500 font-medium text-[16px] text-[#494949] ">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* third section */}
      <div className="flex items-center justify-between flex-col md:flex-row gap-20 py-20 md:px-20">
        <div className="flex flex-col gap-3 items-center">
          <img
            src={easyExchange}
            alt="easy-exchange"
            className="h-[43.02px] w-[43.02px] "
          />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">
            Easy Exchange Policy
          </p>
          <p className="text-[#898989] text-[18px] ">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img
            src={returnPolicy}
            alt="return-policy"
            className="h-[43.02px] w-[43.02px] "
          />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">
            7 Days Return Policy
          </p>
          <p className="text-[#898989] text-[18px] ">
            We provide 7 days free return policy{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img
            src={customerSupport}
            alt="customer support"
            className="h-[43.02px] w-[43.02px] "
          />
          <p className="font-600 font-semibold text-[18px] text-[#373737] ">
            Best Customer Support
          </p>
          <p className="text-[#898989] text-[18px] ">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
      {/* Subscribe */}
      <Subscribe />
    </div>
  );
};

export default HomePage;
