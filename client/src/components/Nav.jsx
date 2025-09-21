import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/allData";

const Nav = () => {
  const [navBorder, setNavBorder] = useState("home");

  return (
    <div className="mx-auto container">
      <div className="py-6 flex justify-between items-center border-b border-gray-200 px-6 md:px-0">
        {/* company name */}
        <div
          to="/"
          className="uppercase flex items-center text-[25px] md:text-[46px] font-bold font-[Audiowide] "
        >
          Pulsepoint<span className="text-[#C586A5] text-[60px] ">.</span>
        </div>

        {/* Nav menu */}
        <nav className="space-x-6 hidden lg:flex text-[16px] text-[#2A2A2A]">
          <Link
            onClick={() => setNavBorder("home")}
            to="/"
            className="uppercase flex flex-col items-center"
          >
            Home
            {navBorder === "home" ? (
              <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-[#2A2A2A] mt-[1px]" />
            ) : null}
          </Link>
          <Link
            onClick={() => setNavBorder("collection")}
            to="all-collections"
            className="uppercase flex flex-col items-center"
          >
            Collection
            {navBorder === "collection" ? (
              <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-[#2A2A2A] mt-[1px]" />
            ) : null}
          </Link>
          <Link
            onClick={() => setNavBorder("about")}
            to="#"
            className="uppercase flex flex-col items-center"
          >
            About
            {navBorder === "about" ? (
              <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-[#2A2A2A] mt-[1px]" />
            ) : null}
          </Link>
          <Link
            onClick={() => setNavBorder("contact")}
            to="#"
            className="uppercase flex flex-col items-center"
          >
            Contact
            {navBorder === "contact" ? (
              <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-[#2A2A2A] mt-[1px]" />
            ) : null}
          </Link>
        </nav>
        {/* Nav  Icons */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex gap-6 items-center">
            <img
              src={assets.navIcons.search}
              alt="searchIcon"
              className=" w-[18px] md:w-[24px]"
            />
            <img
              src={assets.navIcons.profile}
              alt="profileIcon"
              className="w-[18px] md:w-[24px]"
            />
            <div className="relative">
              <img
                src={assets.navIcons.cart}
                alt="cartIcon"
                className="w-[18px] md:w-[24px]"
              />
              <p className="absolute bottom-[-6px] right-[-5px] font-semibold text-white h-[18px] w-[18px] rounded-full bg-black text-center text-[13px]">
                1
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <img
              src={assets.navIcons.menu}
              alt="menuIcon"
              className="w-[18px] md:w-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
