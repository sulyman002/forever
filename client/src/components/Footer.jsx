import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-6 md:px-0 ">
       <div className="grid grid-cols-1 md:grid-cols-2">
         <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h1 className="uppercase text-[46px] font-bold">
            Forever<span>.</span>
          </h1>
          <div className=" text-[18px] leading-[18px] text-center md:text-start ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Footer;
