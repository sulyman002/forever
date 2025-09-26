import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/allData";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../Redux/InputSlice.js";

const NavPage = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.inputRed.dataInput);
  const cartData = useSelector((state) => state.cartRed.cartData);

  const [navBorder, setNavBorder] = useState("home");
  const [openHamburger, setOpenHamburger] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleToggleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpensearch = () => {
    setOpenSearch(!openSearch);
  };

  const navigate = useNavigate();
  return (
    <div className="mx-auto container">
      <div className="py-6 flex justify-between items-center border-b border-gray-200 px-6 md:px-0">
        {/* company name */}
        <div
          onClick={() => navigate("/")}
          className="uppercase flex items-center text-[25px] md:text-[46px] font-bold font-[Audiowide] "
        >
          Pulsepoint<span className="text-[#C586A5] text-[30px] md:text-[60px]">.</span>
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
            to="about-us"
            className="uppercase flex flex-col items-center"
          >
            About
            {navBorder === "about" ? (
              <hr className="border-none w-[70%] h-[2px]  rounded-[10px] bg-[#2A2A2A] mt-[1px]" />
            ) : null}
          </Link>
          <Link
            onClick={() => setNavBorder("contact")}
            to="contact-us"
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
              onClick={() => handleOpensearch()}
              src={assets.navIcons.search}
              alt="searchIcon"
              className=" w-[18px] md:w-[24px] cursor-pointer"
            />

            <img
              onClick={() => {
                handleOpenProfile();
                console.log("you are about to open profile");
              }}
              src={assets.navIcons.profile}
              alt="profileIcon"
              className="w-[18px] md:w-[24px] cursor-pointer"
            />
            {/* Profile Container */}
            {openProfile && (
              <div className=" fixed group-hover top-[110px] w-[200px] p-6  bg-[#F8F8F8] rounded-[4px] shadow flex flex-col gap-4 ">
                <p onClick={() => {
                  navigate("/sign-in");
                  window.scrollTo({top: 0, behavior: "smooth"});
                }} className="text-[#5B5B5B] text-[18px] cursor-pointer ">
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/order-page");
                    handleOpenProfile();
                  }}
                  className="text-[#5B5B5B] text-[18px] cursor-pointer "
                >
                  Orders
                </p>
                <p className="text-[#5B5B5B] text-[18px] cursor-pointer ">
                  Logout
                </p>
              </div>
            )}

            {/* Profile container */}

            <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
              <img
                src={assets.navIcons.cart}
                alt="cartIcon"
                className="w-[18px] md:w-[24px] cursor-pointer"
              />
              <p className="absolute bottom-[-6px] right-[-5px] font-semibold text-white h-[18px] w-[18px] rounded-full bg-black text-center text-[13px]">
                {cartData.length}
              </p>
            </div>
          </div>
          <div onClick={() => handleToggleHamburger()} className="lg:hidden">
            <img
              src={assets.navIcons.menu}
              alt="menuIcon"
              className="w-[18px] md:w-[24px] cursor-pointer"
            />
          </div>
        </div>
        {/* Mobile Nav menu */}

        <div
          className={`fixed w-3/4 bg-[#F9FBFC] z-20 top-0 left-0 h-screen flex-col space-y-4 p-10 shadow-lg transform transition-transform duration-1000 ${
            openHamburger ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col  w-full">
            <div
              onClick={() => {
                navigate("/");
                window, scrollTo({ top: 0, behavior: "smooth" });
                setOpenHamburger(false);
              }}
              className="text-[#2A2A2A]  cursor-pointer flex items-center justify-start pl-4 hover:justify-center uppercase font-medium text-[16px] h-[40px] border border-gray-300 hover:scale-110 hover:shadow-md transition duration-500"
            >
              Home
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div
              onClick={() => {
                navigate("/all-collections");
                window, scrollTo({ top: 0, behavior: "smooth" });
                setOpenHamburger(false);
              }}
              className="text-[#2A2A2A]  cursor-pointer flex items-center justify-start pl-4 hover:justify-center uppercase font-medium text-[16px] h-[40px] border border-gray-300 hover:scale-110 hover:shadow-md transition duration-500"
            >
              Collection
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div
              onClick={() => {
                navigate("/about-us");
                window, scrollTo({ top: 0, behavior: "smooth" });
                setOpenHamburger(false);
              }}
              className="text-[#2A2A2A]  cursor-pointer flex items-center justify-start pl-4 hover:justify-center uppercase font-medium text-[16px] h-[40px] border border-gray-300 hover:scale-110 hover:shadow-md transition duration-500"
            >
              About
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div
              onClick={() => {
                navigate("/contact-us");
                window, scrollTo({ top: 0, behavior: "smooth" });
                setOpenHamburger(false);
              }}
              className="text-[#2A2A2A]  cursor-pointer flex items-center justify-start pl-4 hover:justify-center uppercase font-medium text-[16px] h-[40px] border border-gray-300 hover:scale-110 hover:shadow-md transition duration-500"
            >
              Contact
            </div>
          </div>
        </div>

        {/* Search box */}
        <div
          className={`fixed top-0 left-0 right-0 h-[150px] bg-white shadow transform transition-transform duration-1500 ${
            openSearch ? "translate-y-0" : "-translate-y-full"
          } flex items-center justify-center `}
        >
          <div className="flex items-center justify-center gap-3 w-full md:w-2/4 px-8">
            <input
              value={searchValue}
              onChange={(event) => dispatch(setInput(event.target.value))}
              type="text"
              placeholder="Search product here!"
              className="outline-none border border-gray-200 py-2 w-full pl-3 rounded-md shadow"
            />
            <img
              onClick={() => {
                setOpenSearch(false);
              }}
              src={assets.navIcons.search}
              alt="searchIcon"
              className=" w-[18px] md:w-[24px] hover:scale-120 duration-500 transition cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavPage;
