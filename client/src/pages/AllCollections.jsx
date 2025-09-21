import React, { useState } from "react";

const AllCollections = () => {
    const [show, setShow] = useState(false);
    const handleShowFilter = () => {
        setShow(!show)
        console.log(`show is : ${show}`)
    }
  return (
    <div className="py-16 container mx-auto px-6 lg:px-0">
      <div className="flex gap-10 ">
        {/* Filter container */}
        <div className="md:w-1/6 flex-col gap-4 hidden md:flex">
          <h2 className="text-[#343434] text-[25px] ">FILTERS</h2>
          {/* filter box 1 */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Categories</p>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="man" />
              <span className="font-300 text-[16px] text-[#272727] ">Men</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="women" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Women
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="girls" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Girls
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="boys" />
              <span className="font-300 text-[16px] text-[#272727] ">Boys</span>
            </div>
          </div>
          {/* Filter box 2 */}
          {/* T-shirt, Top, Dress, Trousers, Hoodie, Jacket, Skirt, Shorts */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Type</p>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="tShirt" />
              <span className="font-300 text-[16px] text-[#272727] ">
                T-shirt
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="top" />
              <span className="font-300 text-[16px] text-[#272727] ">Top</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="dress" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Dress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="trousers" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Trousers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="hoodie" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Hoodie
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="jacket" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Jacket
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="skirt" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Skirt
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="shorts" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Short
              </span>
            </div>
          </div>
        </div>
        {/* All collections */}
        <div className="w-full md:w-5/6 ">
          <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 items-start  ">
            <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2">All </span> Collections
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
            <select name="" id="" className="border border-gray-300 py-3 px-3">
              <option value="low2high" className="text-[16px] text-[#272727] ">
                Sort by:
                Price: Low To High
              </option>
            </select>
          </div>

          <div className="mt-8">
            {}
          </div>
          {/* FOR MOBILE */}
          <div onClick={handleShowFilter} className="mt-8 flex mb-6 lg:hidden">
            <span className="cursor-pointer text-[#343434]/80 text-[20px] border border-gray-300 px-4 py-2 ">
              FILTERS
            </span>
          </div>

          {show && (
             <div className="flex flex-col gap-4">
          
          {/* filter box 1 */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Categories</p>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="man" />
              <span className="font-300 text-[16px] text-[#272727] ">Men</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="women" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Women
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="girls" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Girls
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="boys" />
              <span className="font-300 text-[16px] text-[#272727] ">Boys</span>
            </div>
          </div>
          {/* Filter box 2 */}
          {/* T-shirt, Top, Dress, Trousers, Hoodie, Jacket, Skirt, Shorts */}
          <div className="border border-[#C8C8C8]/40 flex flex-col p-4 gap-3">
            <p className="uppercase text-[16px] ">Type</p>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="tShirt" />
              <span className="font-300 text-[16px] text-[#272727] ">
                T-shirt
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="top" />
              <span className="font-300 text-[16px] text-[#272727] ">Top</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="dress" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Dress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="trousers" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Trousers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="hoodie" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Hoodie
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="jacket" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Jacket
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="skirt" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Skirt
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="shorts" />
              <span className="font-300 text-[16px] text-[#272727] ">
                Short
              </span>
            </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
