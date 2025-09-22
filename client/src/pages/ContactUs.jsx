import React from "react";
import contactUsImg from "../assets/contactImg.png";
import Subscribe from "../components/Subscribe";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-16 px-6 md:px-0">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
          <span className="text-[#707070] mr-2 font-medium">Contact </span>{" "}
          Seller
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>
        <div className="flex items-center gap-10 py-20 flex-col-reverse md:flex-row">
          <div className="">
            <img src={contactUsImg} alt="contact us" className="h-[598px] " />
          </div>
          <div className="flex flex-col gap-8 py-10">
            <h2 className="uppercase font-600 font-semibold text-[24px] text-[#4E4E4E]">
              Our Store
            </h2>
            <p className="text-[#6D6D6D] text-[18px] ">
              Flat 38 Akunlemu <br />
              Atiba LGA, Oyo, Oyo Nigeria
            </p>
            <p className="text-[#6D6D6D] text-[18px] ">
              Tel: (234) 807-6293-177
            </p>
            <p className="text-[#6D6D6D] text-[18px] ">
              Email: oyedelesulaiman@gmail.com
            </p>
            <div className="flex flex-col gap-6">
              <h2 className="font-600 font-semibold text-[24px] text-[#4E4E4E] uppercase ">
                Careers at Forever
              </h2>
              <p className="text-[#6D6D6D] text-[18px] ">
                Learn more about our teams and job openings.
              </p>
              <div className="">
                <button className="px-[20px] py-[10px] border-[2px] border-black/40 flex items-center justify-center ">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* subscribe */}
        <Subscribe />
      </div>
    </div>
  );
};

export default ContactUs;
