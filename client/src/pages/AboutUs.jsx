import React from "react";
import AboutUsImg from "../assets/aboutImg.png";
import Subscribe from "../components/Subscribe";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 px-6 md:px-0">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
          <span className="text-[#707070] mr-2 font-medium">About </span> Us
          <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
        </h1>
        <div className="flex py-16 flex-col-reverse md:flex-row gap-16">
          <div className="flex-1">
            <img
              src={AboutUsImg}
              alt="about us image"
              className="md:h-[697px] w-full"
            />
          </div>
          <div className="flex items-center flex-col flex-1 justify-center gap-6">
            <p className="text-[#6D6D6D] text-[18px] ">
              Pulsepoint was born out of a passion for innovation and a desire
              to revolutionize the way people shop online. Our journey began
              with a simple idea: to provide a platform where customers can
              easily discover, explore, and purchase a wide range of products
              from the comfort of their homes.
            </p>
            <p className="text-[#6D6D6D]  text-[18px] ">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-[#6D6D6D] font-700 font-bold text-[18px]  ">
                Our Mission
              </p>
              <p className="text-[#6D6D6D]  text-[18px] ">
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" w-full">
            <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2 font-medium font-400">
                Why{" "}
              </span>{" "}
              Choose Us
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
            <div className="border border-gray-300 flex flex-col md:flex-row my-10 mb-30 ">
              <div className="flex flex-col  p-16 gap-5 ">
                <p className="uppercase font-600 font-semibold text-[18px] ">
                  Quality Assurance:
                </p>
                <p className="text-[18px] text-[#6D6D6D]">
                  We meticulously select and vet each product to ensure it meets
                  our stringent quality standards.
                </p>
              </div>
              <div className="flex flex-col p-16 gap-5 md:border-l border-t border-gray-300">
                <p className="uppercase font-600 font-semibold text-[18px] ">
                  {" "}
                  Convenience:{" "}
                </p>
                <p className="text-[18px] text-[#6D6D6D]">
                  With our user-friendly interface and hassle-free ordering
                  process, shopping has never been easier.
                </p>
              </div>
              <div className="flex flex-col p-16 gap-5 md:border-l border-t border-gray-300">
                <p className="uppercase font-600 font-semibold text-[18px] ">
                  Exceptional Customer Service:
                </p>
                <p className="text-[18px] text-[#6D6D6D]">
                  Our team of dedicated professionals is here to assist you the
                  way, ensuring your satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default AboutUs;
