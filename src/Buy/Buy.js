import React from "react";

const Buy = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20  py-10 flex ">


            <div className="hidden h-full xl:block w-11/12 sm:w-1/2 xl:w-1/4  px-4 py-7 rounded-lg bg-color5">
                <h2 className="pb-2.5 2xl:pb-5 text-white font-semibold">Find Your Home</h2>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-6 h-6 2xl:w-7 2xl:h-7 text-white text-opacity-40 opacity-" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="w-full px-4 py-2 2xl:py-3 pl-10 text-sm 2xl:text-base outline-none  bg-color10 text-white placeholder-white  border-2 border-color5 " style={{ "border-radius": "5px" }} placeholder="Home" />
                </div>

                {/* Property Status */}
                <div className="pt-2">
                    <h2 className="pt-5 pb-3 2xl:py-6 text-white font-semibold">Property Status</h2>
                    <div className="2xl:flex space-y-2 2xl:space-y-0 2xl:space-x-3">
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Buy</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Rent</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Share</label>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Property Type */}
                <div className="py-4">
                    <h2 className="pt-5 pb-3 2xl:py-5 text-white font-semibold">Property Type</h2>
                    <div className=" space-y-2 2xl:space-y-4 ">
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Apartment</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">House</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Flat</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Loft</label>
                            </div>
                        </div>
                        <div class="flex items-start ">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">Townhome</label>
                            </div>
                        </div>
                    </div>

                </div>

                {/* See More */}
                <div className="flex justify-center 2xl:py-10">
                    <h2 className="text-color1 cursor-pointer hover:underline">See More</h2>
                </div>


                {/* Price */}
                <div>
                    <h2 className="pt-5 pb-3 2xl:py-5 text-white font-semibold">Price</h2>

                    <div className="flex justify-between">
                        <div className="bg-color10 font-semibold text-white px-3.5 py-1.5 rounded">0$</div>
                        <div className="bg-color10 font-semibold text-white px-3.5 py-1.5 rounded">600$</div>
                    </div>
                </div>



                {/* Bedrooms */}
                <div className="pt-5">
                    <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Bedrooms</h2>
                    <div className="px-4 py-2 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                        <div className="text-white">Any</div>
                        <img className="w-3" src="Buy/Polygon 11.svg" />
                    </div>
                </div>


                {/* Baths */}
                <div className="pt-5">
                    <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Baths</h2>
                    <div className="px-4 py-2 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                        <div className="text-white">Any</div>
                        <img className="w-3" src="Buy/Polygon 11.svg" />
                    </div>
                </div>


                {/* Location */}
                <div className="pt-5">
                    <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Location</h2>
                    <div className="px-4 py-2 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                        <div className="text-white">Any</div>
                        <img className="w-3" src="Buy/Polygon 11.svg" />
                    </div>
                </div>


                {/* Year Built */}
                <div className="pt-5">
                    <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Year Built</h2>
                    <div className="flex justify-between space-x-3">
                        <div className="w-1/2 px-4 py-2 cursor-pointer rounded flex justify-between bg-color10 font-medium text-white">1999</div>
                        <div className="w-1/2 px-4 py-2 cursor-pointer rounded flex justify-between bg-color10 font-medium text-white">2023</div>
                    </div>
                </div>


                {/* Search */}
                <div className="py-8">
                    <button className="flex justify-center w-full py-2.5  shadow-lg rounded outline-none focus:outline-none space-x-2 bg-color1">
                        <svg aria-hidden="true" class="w-6 h-6 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <h2 className="text-white font-bold">Search</h2>
                    </button>
                </div>









            </div>







            {/* Carts /Product  */}

            <div className="xl:pl-4 w-full ">

                {/* Carts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">



                    {/* Carts 01 */}
                    <div className=" cursor-pointer">
                        <div className="">
                            <div className="">
                                <img className="rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                            </div>
                            <div className=" absolute -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                        </div>
                        <div className=" pl-4 space-y-4 pt-4  pr-3 shadow-md rounded-b-md">
                            <div>
                                <h2 className="text-xl font-bold text-color5">Pool apartment</h2>
                                <h2 className="text-sm text-color5">18 Grattan St, Brookly</h2>
                            </div>
                            <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Vector.svg" />
                                    <h3>6 Bed</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Layer_1.svg" />
                                    <h3>3 Baths</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Group 8935.svg" />
                                    <h3>300sqft</h3>
                                </div>
                            </div>
                            <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                <div className="text-color5 text-sm my-auto">For Buy</div>
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <img src="Buy/Group 9006.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>


            
                    {/* Carts 01 */}
                    <div className=" cursor-pointer">
                        <div className="">
                            <div className="">
                                <img className="rounded-t-md w-full" src="HomePage5/Rectangle 2657.svg" />
                            </div>
                            <div className=" absolute -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                        </div>
                        <div className=" pl-4 space-y-4 pt-4  pr-3 shadow-md rounded-b-md">
                            <div>
                                <h2 className="text-xl font-bold text-color5">Pool apartment</h2>
                                <h2 className="text-sm text-color5">18 Grattan St, Brookly</h2>
                            </div>
                            <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Vector.svg" />
                                    <h3>6 Bed</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Layer_1.svg" />
                                    <h3>3 Baths</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Group 8935.svg" />
                                    <h3>300sqft</h3>
                                </div>
                            </div>
                            <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                <div className="text-color5 text-sm my-auto">For Buy</div>
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <img src="Buy/Group 9006.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>


                
                    {/* Carts 01 */}
                    <div className=" cursor-pointer">
                        <div className="">
                            <div className="">
                                <img className="rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                            </div>
                            <div className=" absolute -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">$2,8000</div>
                        </div>
                        <div className=" pl-4 space-y-4 pt-4  pr-3 shadow-md rounded-b-md">
                            <div>
                                <h2 className="text-xl font-bold text-color5">Pool apartment</h2>
                                <h2 className="text-sm text-color5">18 Grattan St, Brookly</h2>
                            </div>
                            <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Vector.svg" />
                                    <h3>6 Bed</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Layer_1.svg" />
                                    <h3>3 Baths</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <img className=" mr-1" src="HomePage5/Group 8935.svg" />
                                    <h3>300sqft</h3>
                                </div>
                            </div>
                            <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                <div className="text-color5 text-sm my-auto">For Buy</div>
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <img src="Buy/Group 9006.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>


                








                </div>


            </div>






        </div>
    )
}

export default Buy;
