import React from "react";
import { Link, Links, useNavigate } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear();
    const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-6 md:px-0 py-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-300 gap-10 pb-7 md:gap-50">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-10">
            <h1 className="uppercase text-[25px] md:text-[46px] font-bold font-[Audiowide]">
              Pulsepoint<span className="text-[#C586A5] text-[60px] ">.</span>
            </h1>
            <div className=" text-[18px]  text-center md:text-start text-[#595959] leading-[30px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>

          <div className=" flex flex-col md:flex-row md:justify-between md:items-start items-center justify-center gap-5">
            <div className="flex flex-col space-y-10">
                <h1 className="hidden md:flex font-semibold text-[22px] leading-[30px] text-[#5A5A5A] ">COMPANY</h1>
                <div className="flex items-center text-[#595959] text-[18px] leading-[30px] space-x-6 md:flex-col md:items-start justify-center md:justify-start">
                    <div onClick={() => {
                      navigate("/")
                      window.scrollTo({top: 0, behavior: "smooth"})
                    }} >Home</div>
                    <div onClick={() => {
                      navigate("/about-us")
                      window.scrollTo({top: 0, behavior: "smooth"})
                    }} >About Us</div>
                    <div onClick={() => {
                      navigate("/")
                      window.scrollTo({top: 0, behavior: "smooth"})
                    }} >Delivery</div>
                    <div onClick={() => {
                      navigate("/")
                      window.scrollTo({top: 0, behavior: "smooth"})
                    }} >Privacy policy</div>
                </div>
            </div>

            <div className="space-y-10">
                <h1 className="hidden md:flex font-semibold text-[22px] leading-[30px] text-[#5A5A5A] ">GET IN TOUCH</h1>
                <div className="flex text-[#595959] md:flex-col items-center gap-6 md:items-start">
                    <p>+234 807-629-3177</p>
                    <p>oyedelesulaiman@gmail.com</p>
                </div> 
            </div>
          </div>
        </div>
        <div className="text-center py-6 text-[18px] text-[#565656]">
           { `Copyright ${date} © Pulsepoint.dev - All Right Reserved`}

        </div>

      </div>
    </>
  );
};

export default Footer;
