import React from "react";

const Share2 = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20 py-10 ">


            <div className="space-y-4">
                <div className="hidden sm:block">
                    <div className=" w-full p-4 2xl:p-7 space-x-2 lg:space-x-4 rounded-lg bg-color5  flex justify-between">
                        <div className="flex py-2 2xl:py-3 px-6 bg-white w-full rounded-lg">
                            <div className="flex py-2 2xl:py-3 w-5/12 2xl:px-9 2xl:w-5/12 cursor-pointer border-r-2 border-color5 border-opacity-30 text-color5 space-x-2 md:space-x-4">
                                <svg aria-hidden="lg:true" class="w-5 h-5 2xl:w-8 2xl:h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <h2 className="my-auto md:text-xs xl:text-sm 2xl:text-xl text-color5">+Add Location</h2>
                            </div>
                            <div className="w-1/3 px-4 lg:px-7 2xl:px-9 flex cursor-pointer justify-between border-r-2 border-color5 border-opacity-30">
                                <h3 className="my-auto md:text-xs xl:text-sm 2xl:text-xl text-color5">Price</h3>
                                <img className="w-2.5 2xl:w-3.5" src="HomePage5/Polygon 1.svg" />
                            </div>
                            <div className="w-1/3 px-4 lg:px-7 2xl:px-9 flex cursor-pointer justify-between border-r-2 border-color5 border-opacity-30">
                                <h3 className="my-auto md:text-xs xl:text-sm 2xl:text-xl text-color5">Beds</h3>
                                <img className="w-2.5 2xl:w-3.5" src="HomePage5/Polygon 1.svg" />
                            </div>
                            <div className=" px-4 lg:px-7 2xl:px-9 space-x-5 flex cursor-pointer justify-between">
                                <img className="w-4 lg:w-5 2xl:w-6 cursor-pointer" src="HomePage5/filters.svg" />
                                <h3 className="text-xs lg:text-sm 2xl:text-xl my-auto font-semibold">Filters</h3>
                            </div>
                        </div>
                        <button className="px-4 lg:px-8 2xl:px-10 text-white text-xs lg:text-sm 2xl:text-xl font-bold hover:text-color1 hover:bg-white outline-none focus:outline-none rounded-lg bg-color1">Search</button>
                    </div>
                </div>






                <div className="  bg-color5  rounded-lg">

                    <div className="flex justify-end py-2 pr-2 cursor-pointer">
                        <img className="w-10 2xl:w-max" src="Share/cross-with-circle.svg" />
                    </div>

                    <div className="flex">

                        <div className="w-1/4 px-4 2xl:px-7 pb-4 2xl:pb-8 border-r border-white border-opacity-20 ">
                            <h2 className="pb-2.5 2xl:pb-5 text-white font-semibold">Find Your Home</h2>
                            {/* Seach bar */}
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-6 h-6 2xl:w-7 2xl:h-7 text-white text-opacity-40 opacity-" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="w-full px-4 py-2 2xl:py-3 pl-10 text-sm 2xl:text-base outline-none  bg-color10 text-white placeholder-white  border-2 border-color5 " style={{ "border-radius": "5px" }} placeholder="Home" />
                            </div>
                            {/* Property Status */}
                            <div className="pt-7">
                                <h2 className="pt-5 pb-3 2xl:py-6 text-white font-semibold">Property Status</h2>
                                <div className="flex gap-5">
                                    <div class="flex w-1/5 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Buy</label>
                                        </div>
                                    </div>
                                    <div class="flex w-1/5 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Rent</label>
                                        </div>
                                    </div>
                                    <div class="flex w-1/5 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Share</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-1/4 px-4 2xl:px-7 pb-4 2xl:pb-8 border-r border-white border-opacity-20">
                            {/* Property Type */}
                            <h2 className="pb-3 2xl:pb-6 text-white font-semibold">Property Type</h2>
                            <div className="flex flex-wrap gap-3 2xl:gap-5">
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">Apartment</label>
                                        </div>
                                    </div>
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">Bungalow</label>
                                        </div>
                                    </div>
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">House</label>
                                        </div>
                                    </div>
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">Loft</label>
                                        </div>
                                    </div>
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">Villa</label>
                                        </div>
                                    </div>
                                    <div class="flex 2xl:w-1/4 ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 mt-1 2xl:ml-3 text-xs 2xl:text-sm">
                                            <label for="remember" className=" text-white dark:text-gray-300">Townhome</label>
                                        </div>
                                    </div>
                            </div>
                            {/* Bedrooms */}
                            <div className="-mt-1 xl:mt-0 xl:pt-7 2xl:pt-1">
                                <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Bedrooms</h2>
                                <div className="px-4 py-2 2xl:py-3 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                                    <div className="text-white">Any</div>
                                    <img className="w-3" src="Buy/Polygon 11.svg" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 px-4 2xl:px-7 pb-4 2xl:pb-8 border-r border-white border-opacity-20">
                            {/* Price */}
                            <div className="">
                                <h2 className="pb-3  text-white font-semibold">Price</h2>
                                <img className="mx-auto" src="Share/Group 9391.svg" />
                                <div className="flex pt-3 justify-between">
                                    <div className="bg-color10 font-semibold text-white px-3.5 2xl:px-8 py-1.5 2xl:py-2 rounded">0$</div>
                                    <div className="bg-color10 font-semibold text-white px-3.5 2xl:px-8 py-1.5 2xl:py-2 rounded">600$</div>
                                </div>
                            </div>
                            {/* Baths */}
                            <div className="pt-4 xl:pt-3 2xl:pt-2">
                                <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Baths</h2>
                                <div className="px-4 py-2 2xl:py-3 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                                    <div className="text-white">Any</div>
                                    <img className="w-3" src="Buy/Polygon 11.svg" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 px-4 2xl:px-7 pb-4 2xl:pb-8">
                            {/* Year Built */}
                            <div className="">
                                <h2 className=" pb-3 text-white font-semibold">Year Built</h2>
                                <div className="flex justify-between space-x-3">
                                    <div className="w-1/2 px-4 py-2 2xl:py-3 cursor-pointer rounded flex justify-between bg-color10 font-medium text-white">1999</div>
                                    <div className="w-1/2 px-4 py-2 2xl:py-3 cursor-pointer rounded flex justify-between bg-color10 font-medium text-white">2023</div>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="pt-10">
                                <h2 className="py-6 pb-3 2xl:py-5 text-white font-semibold">Location</h2>
                                <div className="px-4 py-2 2xl:py-3 cursor-pointer rounded flex justify-between bg-color10 font-medium">
                                    <div className="text-white">Any</div>
                                    <img className="w-3" src="Buy/Polygon 11.svg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="py-8 2xl:py-10 flex justify-center">
                        <button className="flex justify-center px-10 2xl:px-28 py-2.5  shadow-lg rounded outline-none focus:outline-none space-x-2 bg-color1">
                            <svg aria-hidden="true" class="w-6 h-6 my-auto text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <h2 className="text-white 2xl:text-lg font-bold">Search</h2>
                        </button>
                    </div>


                </div>
            </div>








            {/* Cart */}
            <div className="space-y-6 pt-10 2xl:pt-16">
                {/* Cart */}
                <div className=" sm:px-8 md:px-16 2xl:px-32">
                    <div className="flex ">
                        <img className=" w-8/12  rounded-tl-lg lg:rounded-tl-3xl" src="HomePage5/Rectangle 2657.png" />
                        <div className="w-1/3 ">
                            <img className="pl-1 lg:pl-3 w-full rounded-tr-lg lg:rounded-tr-3xl" src="HomePage5/Rectangle 2659.svg" />
                            <img className="pl-1 lg:pl-3 pt-1 lg:pt-3 w-full" src="HomePage5/Rectangle 2659.svg" />
                            <img className="pl-1 lg:pl-3 pt-1 lg:pt-3 w-full" src="HomePage5/Rectangle 2659.svg" />
                        </div>
                    </div>
                    <div className="px-4 sm:px-8 2xl:px-14 pt-4 sm:pt-8 2xl:pt-12 space-y-4 shadow-md rounded-b-lg 2xl:rounded-b-3xl">
                        <div className="sm:flex justify-between">
                            <div className="pb-2 sm:pb-0">
                                <h2 className="sm:text-2xl 2xl:text-4xl font-bold text-color5">High Quality Student Living</h2>
                                <h2 className="pt-2 text-sm 2xl:text-2xl text-color5">13 Clontarf Road, Dublin 3, Fairview, Dublin 3</h2>
                            </div>
                            <button className="flex h-12 text-white px-4 py-2  rounded bg-color1 outline-none focus:outline-none">
                                <h2 className="text sm:text-lg">$2,8000</h2>
                                <h4 className="text-xs mt-2 ml-0.5">Per Month</h4>
                            </button>
                        </div>
                        <div className="pt-2 xl:py-4 2xl:py-6 flex flex-wrap space-x-3 md:space-x-4 text-color5">
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Vector.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">6 Bed</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Layer_1.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">3 Baths</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-5 2xl:w-8 mr-1" src="HomePage5/Group 8935.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">300sqft</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between py-2 xl:py-5 2xl:py-10 border-t border-color5 border-opacity-30">
                            <div className="text-color5 text-sm xl:text-base 2xl:text-3xl my-auto">For Share</div>
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 2xl:w-10 2xl:h-10 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Cart */}
                <div className=" sm:px-8 md:px-16 2xl:px-32">
                    <div className="flex ">
                        <img className=" w-8/12  rounded-tl-lg lg:rounded-tl-3xl" src="HomePage5/Rectangle 2657.png" />
                        <div className="w-1/3 ">
                            <img className="pl-1 lg:pl-3 w-full rounded-tr-lg lg:rounded-tr-3xl" src="HomePage5/Rectangle 2659.svg" />
                            <img className="pl-1 lg:pl-3 pt-1 lg:pt-3 w-full" src="HomePage5/Rectangle 2659.svg" />
                            <img className="pl-1 lg:pl-3 pt-1 lg:pt-3 w-full" src="HomePage5/Rectangle 2659.svg" />
                        </div>
                    </div>
                    <div className="px-4 sm:px-8 2xl:px-14 pt-4 sm:pt-8 2xl:pt-12 space-y-4 shadow-md rounded-b-lg 2xl:rounded-b-3xl">
                        <div className="sm:flex justify-between">
                            <div className="pb-2 sm:pb-0">
                                <h2 className="sm:text-2xl 2xl:text-4xl font-bold text-color5">High Quality Student Living</h2>
                                <h2 className="pt-2 text-sm 2xl:text-2xl text-color5">13 Clontarf Road, Dublin 3, Fairview, Dublin 3</h2>
                            </div>
                            <button className="flex h-12 text-white px-4 py-2  rounded bg-color1 outline-none focus:outline-none">
                                <h2 className="text sm:text-lg">$2,8000</h2>
                                <h4 className="text-xs mt-2 ml-0.5">Per Month</h4>
                            </button>
                        </div>
                        <div className="pt-2 xl:py-4 2xl:py-6 flex flex-wrap space-x-3 md:space-x-4 text-color5">
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Vector.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">6 Bed</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Layer_1.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">3 Baths</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Group 8935.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">300sqft</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between py-2 xl:py-5 2xl:py-10 border-t border-color5 border-opacity-30">
                            <div className="text-color5 text-sm xl:text-base 2xl:text-3xl my-auto">For Share</div>
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 2xl:w-10 2xl:h-10 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default Share2;
