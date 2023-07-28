import React, { useState } from "react";

const HomePage5 = ({ onScroll }) => {
  const [type, setType] = useState(false);


  return (
    <div className="pt-20 xs:pt-24">

      {/* Mobile version */}
      <div className="flex justify-center items-center ">
        <div className="md:hidden bg-cover bg-center  w-full" style={{ backgroundImage: "url('HomePage5/Group 10414.svg')", }}>

          <div className="text-center pt-9 space-y-1">
            <h1 className="text-xl text-white font-semibold">Find Your Dream Home</h1>
            <h1 className="text-base text-white font-semibold">Let’s find a home that’s perfect for you</h1>
          </div>

          <div className="flex justify-center pt-16">
            <button className="pb-3 px-5 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-0 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
              <h2 className="text-sm font-semibold">Buy</h2>
            </button>
            <button className="pb-3 px-5 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-0 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
              <h2 className="text-sm font-semibold">Rent</h2>
            </button>
            <button className="pb-3 px-5 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-0 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
              <h2 className="text-sm font-semibold">Share</h2>
            </button>
            <button className="pb-3 px-5 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-0 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
              <h2 className="text-sm font-semibold">Commercial</h2>
            </button>
          </div>

          <div className="px-4 xs:px-6 sm:w-3/4 sm:mx-auto pt-4 pb-9 space-y-2.5">
            {/* search */}
            <div>
              <input className="w-full text-xs px-4 py-3 rounded-sm placeholder-color5 outline-none focus:outline-none placeholder-opacity-50" placeholder="County, Cite, Town or Aria" />
            </div>

            {/* Type */}
            <div className="">
              <div className="relative inline-block text-left w-full">
                <div className="w-full">
                  <button onClick={() => setType(!type)} type="button" className="w-full flex justify-between bg-white px-4 py-3 text-xs  rounded-sm outline-none focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <div className="flex justify-between w-full">
                      <h2 className="text-color5 text-opacity-50">Type</h2>
                      <img className="w-2.5 2xl:w-3.5" src="HomePage5/Polygon 1.svg" />
                    </div>
                  </button>
                </div>
                {
                  type &&
                  <div className="absolute left-0 z-10 mt-1 2xl:mt-6 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-0">Residential Sale</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-1">Commercial Sale</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Parking Sale</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Residential Rent</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Commercial Rent</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Sharing (Rent A Room)</a>
                      <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Parking Rent</a>
                    </div>
                  </div>
                }
              </div>

            </div>

            <div className="pt-3 space-y-2">
              <button className="w-full py-2.5 bg-color2 hover:shadow-lg rounded-sm outline-none focus:outline-none">
                <img className="mx-auto w-24" src="HomePage5/Group 9775.svg" />
              </button>
              <button className="w-full py-3 bg-color1 hover:shadow-lg rounded-sm outline-none focus:outline-none">
                <img className="mx-auto " src="HomePage5/Group 9693.svg" />
              </button>
            </div>



          </div>



        </div>
      </div>



      {/* Desktop version */}
      <div className="flex justify-center items-center ">
        <div className="hidden md:block bg-cover bg-center  w-full" style={{ backgroundImage: "url('HomePage5/Rectangle 1662.svg')", }}>
          <div className=" py-5 md:pt-10 xl:mt-20 2xl:pt-20 text-white text-center   space-y-2 lg:space-y-3">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-semibold">Find Your Dream Home</h1>
            <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl font-medium">Let’s find a home that’s perfect for you</h1>
          </div>
          <div className="flex justify-center  px-4  md:px-8 lg:px-20 2xl:px-36 pb-8 sm:py-10 md:py-10 lg:py-20 xl:pt-20 xl:pb-32 2xl:py-56">
            <div className="hidden md:block xl:w-3/4 bg-color5 space-y-4 px-8 py-7 2xl:py-9 rounded-lg bg-opacity-70">

              <div className="flex justify-center">
                <button className="pb-3 px-8 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-30 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
                  <h2 className=" xl:text-xl 2xl:text-2xl font-semibold">Buy</h2>
                </button>
                <button className="pb-3 px-8 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-30 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
                  <h2 className=" xl:text-xl 2xl:text-2xl font-semibold">Rent</h2>
                </button>
                <button className="pb-3 px-8 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-30 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
                  <h2 className=" xl:text-xl 2xl:text-2xl font-semibold">Share</h2>
                </button>
                <button className="pb-3 px-8 w-max text-white  cursor-pointer border-b-2 border-color5 border-opacity-30 hover:text-color8 hover:border-color8 focus:border-color8 outline-none focus:outline-none">
                  <h2 className=" xl:text-xl 2xl:text-2xl font-semibold">Commercial</h2>
                </button>
              </div>

              <div className="flex 2xl:text-lg bg-white px-8 py-2 rounded-lg">
                <div className="w-1/3 2xl:py-3 flex space-x-2 border-color5 border-opacity-30">
                  <img className="w-6 2xl:w-7 " src="HomePage5/Group 8929.svg" />
                  <input className=" w-11/12  py-2 px-5 outline-none placeholder-color5" placeholder="Search" />
                </div>

                {/* Type */}
                <div className="w-1/3 cursor-pointer flex justify-between space-x-2 border-l border-color5 border-opacity-30">
                  <div className="relative inline-block text-left w-full">
                    <div className="w-full">
                      <button onClick={() => setType(!type)} type="button" className="w-full flex justify-between rounded-md py-2 px-3 2xl:px-6 2xl:py-4 outline-none focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <div className="flex justify-between w-full">
                          <h2 className="text-color5">Type</h2>
                          <img className="w-2.5 2xl:w-3.5" src="HomePage5/Polygon 1.svg" />
                        </div>
                      </button>
                    </div>
                    {
                      type &&
                      <div className="absolute left-0 z-10 mt-4 2xl:mt-6 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="" role="none">
                          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-0">Residential Sale</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-1">Commercial Sale</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Parking Sale</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Residential Rent</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Commercial Rent</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Sharing (Rent A Room)</a>
                          <a href="#" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Parking Rent</a>
                        </div>
                      </div>
                    }
                  </div>

                </div>

                <div className="w-1/3 pl-4 flex justify-between space-x-2 border-l border-color5 border-opacity-30">
                  <img className="w-6 2xl:w-8 cursor-pointer" src="HomePage5/filters.svg" />
                  <h3 className=" text-color5 my-auto font-semibold">Advanced</h3>
                  <img className="w-10 2xl:w-14 cursor-pointer hover:opacity-70" src="HomePage5/search.svg" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>



      {/* Browser By Section */}
      <div className="bg-color5 bg-opacity-5 pb-10 pt-8 2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:px-20 2xl:px-28 w-full " >
        <div className="pb-4 pr-4 xs:pr-6 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Browser By Section</h3>
        </div>
        {/* <!--  --> */}

        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className=" flex flex-nowrap space-x-2 sm:space-x-4 lg:space-x-0 lg:w-full lg:grid lg:grid-cols-6 lg:mx-auto lg:gap-3 xl:gap-4 " >

              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10415.svg" />
                  </a>
                </div>
              </div>
              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10416.svg" />
                  </a>
                </div>
              </div>
              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10419.svg" />
                  </a>
                </div>
              </div>
              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10420.svg" />
                  </a>
                </div>
              </div>
              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10421.svg" />
                  </a>
                </div>
              </div>
              <div className="inline-block cursor-pointer">
                <div className="w-28 md:w-full md:h-full max-w-xs overflow-hidden shadow-md hover:shadow-lg  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <a className=" cursor-pointer">
                    <img className="w-full h-full " src="HomePage5/Browser_By_Section/Group 10422.svg" />
                  </a>
                </div>
              </div>



            </div>
          </div>
        </div>


      </div>









      <div className="py-10 px-4 md:px-8 lg:px-20 2xl:px-28 ">
        <h3 className="pb- md:pb-8 2xl:pb-20 sm:text-left sm:text-xl lg:text-2xl font-bold text-color5">Discover Our Featured Listings</h3>
        <div className="py-6 flex justify-end space-x-4">
          <button className="text-sm 2xl:text-xl text-color5 bg-color18 md:bg-white md:border-2 md:border-color17 md:text-color17 font-medium py-2 px-4 xl:px-7 2xl:py-2 2xl:px-9 rounded-sm md:rounded hover:bg-color1 hover:text-white hover:border-color1 focus:bg-color1 focus:text-white focus:border-color1 focus:outline-none outline-none">Buy</button>
          <button className="text-sm 2xl:text-xl text-color5 bg-color18 md:bg-white md:border-2 md:border-color17 md:text-color17 font-medium py-2 px-4 xl:px-7 2xl:py-2 2xl:px-9 rounded-sm md:rounded hover:bg-color1 hover:text-white hover:border-color1 focus:bg-color1 focus:text-white focus:border-color1 focus:outline-none outline-none">Rent</button>
          <button className="text-sm 2xl:text-xl text-color5 bg-color18 md:bg-white md:border-2 md:border-color17 md:text-color17 font-medium py-2 px-4 xl:px-7 2xl:py-2 2xl:px-9 rounded-sm md:rounded hover:bg-color1 hover:text-white hover:border-color1 focus:bg-color1 focus:text-white focus:border-color1 focus:outline-none outline-none">Share</button>
        </div>

        {/* carts */}
        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className="w-full flex flex-nowrap  space-x-2 sm:space-x-4 md:space-x-0 md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >


              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-80 md:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer">
                    <div className="">
                      <div className="">
                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                      </div>
                      <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                    </div>
                    <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                      <div>
                        <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                        <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                      </div>
                      <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4 " src="HomePage5/Vector.svg" />
                          <h3 className="text-xs">6 Bed</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4 " src="HomePage5/Layer_1.svg" />
                          <h3 className="text-xs">3 Baths</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3 " src="HomePage5/Group 8935.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3 " src="HomePage5/Group 10383.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                      </div>
                      <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                        <div className="text-color5 text-sm my-auto">For Buy</div>
                        <div className="flex space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          <img className=" cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-80 md:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer">
                    <div className="">
                      <div className="">
                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2657.svg" />
                      </div>
                      <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                    </div>
                    <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                      <div>
                        <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                        <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                      </div>
                      <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Vector.svg" />
                          <h3 className="text-xs">6 Bed</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Layer_1.svg" />
                          <h3 className="text-xs">3 Baths</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 8935.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 10383.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                      </div>
                      <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                        <div className="text-color5 text-sm my-auto">For Buy</div>
                        <div className="flex space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          <img className="cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-80 md:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer">
                    <div className="">
                      <div className="">
                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2656.svg" />
                      </div>
                      <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                    </div>
                    <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                      <div>
                        <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                        <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                      </div>
                      <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Vector.svg" />
                          <h3 className="text-xs">6 Bed</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Layer_1.svg" />
                          <h3 className="text-xs">3 Baths</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 8935.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 10383.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                      </div>
                      <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                        <div className="text-color5 text-sm my-auto">For Buy</div>
                        <div className="flex space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          <img className="cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-80 md:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className="">
                    <div className="">
                      <div className="">
                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                      </div>
                      <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                    </div>
                    <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                      <div>
                        <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                        <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                      </div>
                      <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Vector.svg" />
                          <h3 className="text-xs">6 Bed</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-4" src="HomePage5/Layer_1.svg" />
                          <h3 className="text-xs">3 Baths</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 8935.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                        <div className="text-sm flex space-x-1">
                          <img className=" mr-1 w-3" src="HomePage5/Group 10383.svg" />
                          <h3 className="text-xs">300sqft</h3>
                        </div>
                      </div>
                      <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                        <div className="text-color5 text-sm my-auto">For Buy</div>
                        <div className="flex space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          <img className="cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>






            </div>
          </div>
        </div>


      </div>






      {/* Properties By Cities */}
      <div className="bg-color5 bg-opacity-5 md:bg-white pb-10 pt-8 2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:pl-20 2xl:pl-28 w-full " >
        <div className="pb-4 pr-4 xs:pr-6 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Properties By Cities</h3>
        </div>
        {/* <!--  --> */}

        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll pb-5 md:pb-10 " >
            <div className=" flex flex-nowrap space-x-2 sm:space-x-4 lg:space-x-4 lg:w-full  " >


              {/* cart */}
              <div className="inline-block cursor-pointer 2xl:w-full">
                <div className="w-60 sm:w-64 lg:w-80 max-w-xs overflow-hidden shadow-md hover:shadow-xl  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <div className="w-full cursor-pointer text-color5 flex rounded-sm border md:rounded 2xl:rounded-lg">
                    <div className="">
                      <img className="w-20 sm:w-24 lg:w-28 2xl:w-32 h-full rounded-l-sm md:rounded-l 2xl:rounded-l-lg" src="HomePage5/city/Rectangle 2665.svg" />
                    </div>
                    <div className=" px-4 space-y-1  my-auto ">
                      <h2 className=" text-base sm:text-xl 2xl:text-2xl font-bold">Dublin</h2>
                      <h2 className="text-xs sm:text-sm 2xl:text-xl">20 Properties</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart */}
              <div className="inline-block cursor-pointer 2xl:w-full">
                <div className="w-60 sm:w-64 lg:w-80 max-w-xs overflow-hidden shadow-md hover:shadow-xl  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <div className="w-full cursor-pointer text-color5 flex rounded-sm border md:rounded 2xl:rounded-lg">
                    <div className="">
                      <img className="w-20 sm:w-24 lg:w-28 2xl:w-32 h-full rounded-l-sm md:rounded-l 2xl:rounded-l-lg" src="HomePage5/city/Rectangle 2668.svg" />
                    </div>
                    <div className=" px-4 space-y-1  my-auto ">
                      <h2 className=" text-base sm:text-xl 2xl:text-2xl font-bold">Galway</h2>
                      <h2 className="text-xs sm:text-sm 2xl:text-xl">20 Properties</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart */}
              <div className="inline-block cursor-pointer 2xl:w-full">
                <div className="w-60 sm:w-64 lg:w-80 max-w-xs overflow-hidden shadow-md hover:shadow-xl  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <div className="w-full cursor-pointer text-color5 flex rounded-sm border md:rounded 2xl:rounded-lg">
                    <div className="">
                      <img className="w-20 sm:w-24 lg:w-28 2xl:w-32 h-full rounded-l-sm md:rounded-l 2xl:rounded-l-lg" src="HomePage5/city/Rectangle 2670.svg" />
                    </div>
                    <div className=" px-4 space-y-1  my-auto ">
                      <h2 className=" text-base sm:text-xl 2xl:text-2xl font-bold">Limerick</h2>
                      <h2 className="text-xs sm:text-sm 2xl:text-xl">20 Properties</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart */}
              <div className="inline-block cursor-pointer 2xl:w-full">
                <div className="w-60 sm:w-64 lg:w-80 max-w-xs overflow-hidden shadow-md hover:shadow-xl  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <div className="w-full cursor-pointer text-color5 flex rounded-sm border md:rounded 2xl:rounded-lg">
                    <div className="">
                      <img className="w-20 sm:w-24 lg:w-28 2xl:w-32 h-full rounded-l-sm md:rounded-l 2xl:rounded-l-lg" src="HomePage5/city/Rectangle 2672.svg" />
                    </div>
                    <div className=" px-4 space-y-1  my-auto ">
                      <h2 className=" text-base sm:text-xl 2xl:text-2xl font-bold">Waterford</h2>
                      <h2 className="text-xs sm:text-sm 2xl:text-xl">20 Properties</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart */}
              <div className="inline-block cursor-pointer 2xl:w-full">
                <div className="w-60 sm:w-64 lg:w-80 max-w-xs overflow-hidden shadow-md hover:shadow-xl  rounded-sm md:rounded bg-white  duration-300 ease-in-out" >
                  <div className="w-full cursor-pointer text-color5 flex rounded-sm border md:rounded 2xl:rounded-lg">
                    <div className="">
                      <img className="w-20 sm:w-24 lg:w-28 2xl:w-32 h-full rounded-l-sm md:rounded-l 2xl:rounded-l-lg" src="HomePage5/city/Rectangle 2674.svg" />
                    </div>
                    <div className=" px-4 space-y-1  my-auto ">
                      <h2 className=" text-base sm:text-xl 2xl:text-2xl font-bold">Cork</h2>
                      <h2 className="text-xs sm:text-sm 2xl:text-xl">20 Properties</h2>
                    </div>
                  </div>
                </div>
              </div>






            </div>
          </div>
        </div>


      </div>























    </div>
  )
}

export default HomePage5;
