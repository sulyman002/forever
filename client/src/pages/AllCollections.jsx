import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllCollections = () => {
  const [show, setShow] = useState(false);
  const handleShowFilter = () => {
    setShow(!show);
  };

  const productData = useSelector((state) => state.clothRed.product);
  const searchValue = useSelector((state) => state.inputRed.dataInput);

  const navigate = useNavigate();

  const categories = ["Men", "Women", "Girls", "Boys"];
  const types = [
    "T-shirt",
    "Top",
    "Dress",
    "Trousers",
    "Hoodie",
    "Jacket",
    "Skirt",
    "Shorts",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // const [selectByPrice, setSelectByPrice] = useState([]);

  const handleSelectedCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((theCategory) => theCategory !== category)
        : [...prev, category]
    );
  };

  const handleSelectedType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((takeOut) => takeOut !== type)
        : [...prev, type]
    );
  };

  useEffect(() => {
    const matchForCategories = (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchForTypes = (product) =>
      selectedTypes.length === 0 || selectedTypes.includes(product.type);

    const matchSearchValue = (product) =>
      searchValue === "" ||
      product.title.toLowerCase().includes(searchValue.toLowerCase());
    const newFilteredJobs = productData
      .slice()
      .reverse()
      .filter(
        (product) =>
          matchForCategories(product) &&
          matchForTypes(product) &&
          matchSearchValue(product)
      );

    setFilteredData(newFilteredJobs);
  }, [selectedCategories, selectedTypes, productData, searchValue]);

  const [selectOption, setSelectOPtion] = useState("");

  const handleSelect = (event) => {
    setSelectOPtion(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="py-16 container mx-auto px-6 lg:px-0">
      <div className="flex gap-10 ">
        {/* Filter container */}
        <div className="md:w-1/6 flex-col gap-4 hidden md:flex">
          <h2 className="text-[#343434] text-[25px] ">FILTERS</h2>

          {/* filter box 1 */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Categories</p>
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => {
                      handleSelectedCategory(category);
                    }}
                    checked={selectedCategories.includes(category)}
                    type="checkbox"
                    name="man"
                  />
                  <span className="font-300 text-[16px] text-[#272727] capitalize ">
                    {category}
                  </span>
                </div>
                {/*  */}
              </div>
            ))}
          </div>
          {/* Filter box 2 */}
          {/* T-shirt, Top, Dress, Trousers, Hoodie, Jacket, Skirt, Shorts */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Type</p>
            {types.map((type, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <input
                    checked={selectedTypes.includes(type)}
                    onChange={() => {
                      handleSelectedType(type);
                    }}
                    type="checkbox"
                  />
                  <span className="font-300 text-[16px] text-[#272727] capitalize ">
                    {type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* All collections */}
        <div className="w-full md:w-5/6 ">
          <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 items-start  ">
            <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2">All </span> Collections
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
            <select
              value={selectOption}
              onChange={handleSelect}
              name=""
              id=""
              className="border border-gray-300 py-3 px-3"
            >
              <option value="low2high" className="text-[16px] text-[#272727] ">
                Sort by: Price: Low To High
              </option>
              <option value="high2low" className="text-[16px] text-[#272727] ">
                Sort by: Price: High To Low
              </option>
            </select>
          </div>
          {/* FOR MOBILE */}
          <div onClick={handleShowFilter} className="mt-8 flex mb-6 md:hidden">
            <span className="cursor-pointer text-[#343434]/80 text-[20px] border border-gray-300 px-4 py-2 ">
              FILTERS
            </span>
          </div>

          {show && (
            <div className="flex flex-col gap-4">
              {/* filter box 1 */}

              <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
                <p className="uppercase text-[16px] ">Categories</p>
                {categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <input
                        onChange={() => {
                          handleSelectedCategory(category);
                        }}
                        checked={selectedCategories.includes(category)}
                        type="checkbox"
                        name="man"
                      />
                      <span className="font-300 text-[16px] text-[#272727] capitalize ">
                        {category}
                      </span>
                    </div>
                    {/*  */}
                  </div>
                ))}
              </div>
              {/* Filter box 2 */}
              {/* T-shirt, Top, Dress, Trousers, Hoodie, Jacket, Skirt, Shorts */}

              <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
                <p className="uppercase text-[16px] ">Type</p>
                {types.map((type, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <input
                        checked={selectedTypes.includes(type)}
                        onChange={() => {
                          handleSelectedType(type);
                        }}
                        type="checkbox"
                      />
                      <span className="font-300 text-[16px] text-[#272727] capitalize ">
                        {type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* All product data is mapped here */}
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 space-y-2">
              {filteredData?.map((item, index) => (
                <div
                  onClick={() => {
                    navigate(`/all-collections/${item.id}`);
                    window.scrollTo({top: 0, behavior: "smooth"});
                    
                  }}
                  className="flex flex-col cursor-pointer gap-2 transform hover:scale-105 duration-500 transition hover:shadow-lg rounded-md"
                  key={index}
                >
                  <div className=" ">
                    <img
                      src={item.image}
                      alt="product image"
                      className="lg:h-[300px] w-full rounded-t-md"
                    />
                  </div>
                  <div className="flex flex-col p-4">
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
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
