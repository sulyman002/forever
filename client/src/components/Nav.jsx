import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/allData";

const Nav = () => {
  const [navBorder, setNavBorder] = useState("home");


  return (
    <div className="mx-auto container">
      <div className="py-6 flex justify-between items-center border-b border-gray-200 px-6 md:px-0">
        <h1 className="uppercase cursor-pointer">Forever</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link onClick={() => setNavBorder("home")} to="/"  className="uppercase flex flex-col items-center">
            Home 
            { navBorder === "home" ? <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-gray-800 mt-[1px]"/> : null}
          </Link>
          <Link onClick={() => setNavBorder("collection")} to="#" className="uppercase flex flex-col items-center">
            Collection
            { navBorder === "collection" ? <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-gray-800 mt-[1px]" /> : null}
          </Link>
          <Link onClick={() => setNavBorder("about")} to="#" className="uppercase flex flex-col items-center">
            About
            { navBorder === "about" ? <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-gray-800 mt-[1px]" /> : null}
          </Link>
          <Link onClick={() => setNavBorder("contact")} to="#" className="uppercase flex flex-col items-center">
            Contact
            { navBorder === "contact" ? <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-gray-800 mt-[1px]" /> : null}
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 items-center">
            <img src={assets.navIcons.search} alt="searchIcon" className="w-[24px]" />
            <img src={assets.navIcons.profile} alt="profileIcon" className="w-[24px]" />
            <img src={assets.navIcons.cart} alt="cartIcon" className="w-[24px]" />
          </div>
          <div className="md:hidden">
            <img src={assets.navIcons.menu} alt="menuIcon" className="w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
