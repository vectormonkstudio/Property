import React, { useState } from "react";

const StudentAccommodation = ({ onScroll }) => {
    const [filter, setFilter] = useState(false);
    const [bedroommin, setBedroommin] = useState(false);
    const [bedroommax, setBedroommax] = useState(false);
    const [bathsmin, setBathmin] = useState(false);
    const [bathmax, setBathmax] = useState(false);
    const [sizemin, setSizemin] = useState(false);
    const [sizemax, setSizemax] = useState(false);
    const [rooms, setRooms] = useState(false);



    return (
        <div className="pt-32 sm:pt-32 2xl:pt-36">


            <div onClick={() => setFilter(!filter)} className="fixed sm:hidden w-full flex justify-center px-6 bottom-0 py-6">
                <button className="font-bold w-full bg-color1 py-2 text-white rounded-sm hover:bg-white hover:text-color1 hover:shadow-lg outline-none focus:outline-none">Filter</button>
            </div>


            {/* for desktop ==> search */}
            <div className="hidden md:block xl:pt-5 px-4 xs:px-6 sm:px-8 lg:px-20">
                <h3 className="sm:hidden pb-5 md:text-xl lg:text-2xl font-bold text-color5 ">Property for Sale</h3>
                {/* search */}
                <div className="sm:flex sm:justify-end">
                    <div className="my-auto sm:w-1/2 md:w-2/5 2xl:w-1/3">
                        <div className="flex justify-end right-0 border-2 border-color5 border-opacity-30 rounded-sm lg:rounded">
                            <svg aria-hidden="true" className="mt-2 2xl:mt-2.5 ml-2 w-6 h-6 text-color5 text-opacity-50 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <input type="search" id="default-search" className="w-full pl-2 pr-4 py-2.5 2xl:py-2.5 text-sm 2xl:text-base outline-none placeholder-color5 placeholder-opacity-50 focus:placeholder-opacity-100" placeholder="County, Cite, Town or Aria" />
                        </div>
                    </div>
                </div>
                <h3 className=" py-4  md:text-left md:pb-10 md:text-xl lg:text-2xl font-bold text-color5 ">2,857 Properties for Sale in Dublin City</h3>
            </div>


            <div className=" px-4 xs:px-6 sm:px-8 lg:px-20  pb-10 md:flex md:space-x-4">



                {/* Side Bar for mobile */}

                {
                    filter &&
                    <div className="md:hidden h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/3 rounded sm:rounded-lg bg-color5">

                        <div className="flex justify-end px-3 pt-3 pb-5">
                            <img className="md:hidden cursor-pointer hover:opacity-50" src="HomePage5/Group 9442.svg" />
                        </div>

                        <div className=" px-7 xs:px-10 md:px-4 lg:px-4 2xl:px-6 pb-14">

                            {/* search */}
                            <h2 className=" pb-3 2xl:py-6 text-lg text-white font-semibold">Find Your Home </h2>
                            <div className="flex bg-color19 rounded-sm py-1 px-1 md:p-0">
                                <svg aria-hidden="true" className="mt-1.5 2xl:mt-2.5 ml-2 w-6 h-6  text-white text-opacity-40 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="search" id="default-search" className="rounded-sm w-full pl-2 pr-4 py-2 2xl:py-2.5 bg-color19  text-white  text-sm 2xl:text-base outline-none placeholder-white placeholder-opacity-40 focus:placeholder-opacity-100" placeholder="Search Car" />
                            </div>

                            {/* Property Status */}
                            <div className="pt-2">
                                <h2 className="pt-5 pb-3 2xl:py-6 text-lg text-white font-semibold">Property Status</h2>
                                <div className="flex flex-wrap gap-4">
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml3 text-sm">
                                            <label for="remember" class=" text-white dark:text-gray-300">Buy</label>
                                        </div>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml3 text-sm">
                                            <label for="remember" class=" text-white dark:text-gray-300">Rent</label>
                                        </div>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml3 text-sm">
                                            <label for="remember" class=" text-white dark:text-gray-300">Share</label>
                                        </div>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml3 text-sm">
                                            <label for="remember" class=" text-white dark:text-gray-300">Commercial</label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Property Type */}
                            <div className="py-4">
                                <h2 className="pt-5 pb-3 2xl:py-5 text-lg text-white font-semibold">Property Type</h2>
                                <div className=" space-y-4 2xl:space-y-4 ">
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Any Property</label>
                                        </div>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">House</label>
                                        </div>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Apartment</label>
                                        </div>
                                    </div>

                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                        </div>
                                        <div class="ml-2 2xl:ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Flat </label>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Price */}
                            <div className="pt-5">
                                <h2 className=" pb-3 2xl:py-5 text-white font-semibold">Price</h2>
                                <div className=" space-y-3">
                                    <img src="HomePage5/Group 9854.svg" />
                                    <div className="flex justify-between">
                                        <div className="bg-color19 font-semibold text-white px-4 py-2 rounded-sm">0$</div>
                                        <div className="bg-color19 font-semibold text-white px-4 py-2 rounded-sm">0$</div>
                                    </div>
                                </div>
                            </div>


                            {/* Rooms */}
                            <div className="pt-7 space-y-3">
                                <h3 className=" text-white">Rooms</h3>
                                <div className="relative inline-block text-left w-full">
                                    <div className="w-full">
                                        <button onClick={() => setRooms(!rooms)} className="flex w-full px-4 py-2 rounded-sm  justify-between cursor-pointer bg-color19 outline-none focus:outline-none">
                                            <h3 className="my-auto text-white 2xl:text-xl">Any</h3>
                                            <img className="my-auto" src="HomePage5/downarrow.svg" />
                                        </button>
                                    </div>

                                    {rooms &&
                                        <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b-sm md:rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div className="flex overflow-y-scroll pb-10 " >
                                                <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">123</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">Dublin</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">Leinster</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Ulster</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Antrim</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Carlow</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="pt-14 pb-5">
                                <button className="bg-color1 hover:bg-color19 py-3 rounded-sm w-full outline-none focus:outline-none"> <img className="mx-auto" src="HomePage5/Group 9693.svg" /> </button>
                            </div>


                            <div className=" text-white flex justify-center py-2 bg-color4 hover:bg-opacity-80  cursor-pointer rounded-sm" >
                                <img className="my-auto mr-2 w-6 2xl:w-max" src="HomePage5/Star.svg" />
                                <h3 className="text-sm xl:text-base my-auto font-medium">Save Search</h3>
                            </div>



                        </div>
                    </div>
                }





                {/* Side Bar for Desktop */}
                <div className="hidden md:block h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/3 rounded sm:rounded-lg bg-color5">

                    <div className="flex justify-end px-3 pt-3 pb-5">
                        <img className="md:hidden cursor-pointer hover:opacity-50" src="HomePage5/Group 9442.svg" />
                    </div>

                    <div className=" px-7 xs:px-10 md:px-4 lg:px-4 2xl:px-6 pb-14">

                        {/* search */}
                        <h2 className=" pb-3 2xl:py-6 text-lg text-white font-semibold">Find Your Home </h2>
                        <div className="flex bg-color19 rounded-sm py-1 px-1 md:p-0">
                            <svg aria-hidden="true" className="mt-1.5 2xl:mt-2.5 ml-2 w-6 h-6  text-white text-opacity-40 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <input type="search" id="default-search" className="rounded-sm w-full pl-2 pr-4 py-2 2xl:py-2.5 bg-color19  text-white  text-sm 2xl:text-base outline-none placeholder-white placeholder-opacity-40 focus:placeholder-opacity-100" placeholder="Search Car" />
                        </div>

                        {/* Property Status */}
                        <div className="pt-2">
                            <h2 className="pt-5 pb-3 2xl:py-6 text-lg text-white font-semibold">Property Status</h2>
                            <div className="flex flex-wrap gap-4">
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml3 text-sm">
                                        <label for="remember" class=" text-white dark:text-gray-300">Buy</label>
                                    </div>
                                </div>
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml3 text-sm">
                                        <label for="remember" class=" text-white dark:text-gray-300">Rent</label>
                                    </div>
                                </div>
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml3 text-sm">
                                        <label for="remember" class=" text-white dark:text-gray-300">Share</label>
                                    </div>
                                </div>
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml3 text-sm">
                                        <label for="remember" class=" text-white dark:text-gray-300">Commercial</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Property Type */}
                        <div className="py-4">
                            <h2 className="pt-5 pb-3 2xl:py-5 text-lg text-white font-semibold">Property Type</h2>
                            <div className=" space-y-4 2xl:space-y-4 ">
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml-3 text-sm">
                                        <label for="remember" class="text-white dark:text-gray-300">Any Property</label>
                                    </div>
                                </div>
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml-3 text-sm">
                                        <label for="remember" class="text-white dark:text-gray-300">House</label>
                                    </div>
                                </div>
                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml-3 text-sm">
                                        <label for="remember" class="text-white dark:text-gray-300">Apartment</label>
                                    </div>
                                </div>

                                <div class="flex items-start ">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                    </div>
                                    <div class="ml-2 2xl:ml-3 text-sm">
                                        <label for="remember" class="text-white dark:text-gray-300">Flat </label>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Price */}
                        <div className="pt-5">
                            <h2 className=" pb-3 2xl:py-5 text-white font-semibold">Price</h2>
                            <div className=" space-y-3">
                                <img src="HomePage5/Group 9854.svg" />
                                <div className="flex justify-between">
                                    <div className="bg-color19 font-semibold text-white px-4 py-2 rounded-sm">0$</div>
                                    <div className="bg-color19 font-semibold text-white px-4 py-2 rounded-sm">0$</div>
                                </div>
                            </div>
                        </div>


                        {/* Rooms */}
                        <div className="pt-7 space-y-3">
                            <h3 className=" text-white">Rooms</h3>
                            <div className="relative inline-block text-left w-full">
                                <div className="w-full">
                                    <button onClick={() => setRooms(!rooms)} className="flex w-full px-4 py-2 rounded-sm  justify-between cursor-pointer bg-color19 outline-none focus:outline-none">
                                        <h3 className="my-auto text-white 2xl:text-xl">Any</h3>
                                        <img className="my-auto" src="HomePage5/downarrow.svg" />
                                    </button>
                                </div>

                                {rooms &&
                                    <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b-sm md:rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="flex overflow-y-scroll pb-10 " >
                                            <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">123</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">Dublin</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">Leinster</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Ulster</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Antrim</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Carlow</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="pt-14 pb-5">
                            <button className="bg-color1 hover:bg-color19 py-3 rounded-sm w-full outline-none focus:outline-none"> <img className="mx-auto" src="HomePage5/Group 9693.svg" /> </button>
                        </div>


                        <div className=" text-white flex justify-center py-2 bg-color4 hover:bg-opacity-80  cursor-pointer rounded-sm" >
                            <img className="my-auto mr-2 w-6 2xl:w-max" src="HomePage5/Star.svg" />
                            <h3 className="text-sm xl:text-base my-auto font-medium">Save Search</h3>
                        </div>

                    </div>
                </div>


                {/* for mobile ==> search */}
                <div className="pt-5 md:hidden">
                    <h3 className="sm:hidden pb-5 md:text-xl lg:text-2xl font-bold text-color5 ">Property for Sale</h3>
                    {/* search */}
                    <div className="sm:flex sm:justify-end">
                        <div className="my-auto sm:w-1/2 md:w-2/5 2xl:w-1/3">
                            <div className="flex justify-end right-0 border-2 border-color5 border-opacity-30 rounded-sm lg:rounded">
                                <svg aria-hidden="true" className="mt-2 2xl:mt-2.5 ml-2 w-6 h-6 text-color5 text-opacity-50 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="search" id="default-search" className="w-full pl-2 pr-4 py-2.5 2xl:py-2.5 text-sm 2xl:text-base outline-none placeholder-color5 placeholder-opacity-50 focus:placeholder-opacity-100" placeholder="County, Cite, Town or Aria" />
                            </div>
                        </div>
                    </div>
                    <h3 className=" py-4  md:text-left md:pb-10 md:text-xl lg:text-2xl font-bold text-color5 ">2,857 Properties for Sale in Dublin City</h3>
                </div>





                {/* Carts /Product  */}
                <div className=" w-full pt-4 sm:pt-0">

                    {/* Carts */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">


                        {/* Carts */}
                        <div className=" md:cursor-pointer">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                                </div>
                                <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-medium bg-color1">
                                    <span className="2xl:text-xl">€1,550</span>
                                    <span className="text-xs ml-1">Per Month</span>
                                </div>                            </div>
                            <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                                <div className=" space-y-2">
                                    <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                    <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                </div>
                                <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Vector.svg" />
                                        <h3 className="text-xs my-auto">6 Bed</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Layer_1.svg" />
                                        <h3 className="text-xs my-auto">3 Baths</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 8935.svg" />
                                        <h3 className="text-xs my-auto">300sqft</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 10383.svg" />
                                        <h3 className="text-xs my-auto">Apartment</h3>
                                    </div>
                                </div>
                                <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                    <div className="text-color5 text-sm my-auto">For Buy</div>
                                    <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img className="cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* cart */}
                        <div className=" md:cursor-pointer">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2657.svg" />
                                </div>
                                <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-medium bg-color1"> 
                                   <span className="2xl:text-xl">€1,550</span>
                                   <span className="text-xs ml-1">Per Month</span>
                                </div>                            </div>
                            <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                                <div className=" space-y-2">
                                    <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                    <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                </div>
                                <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Vector.svg" />
                                        <h3 className="text-xs my-auto">6 Bed</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Layer_1.svg" />
                                        <h3 className="text-xs my-auto">3 Baths</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 8935.svg" />
                                        <h3 className="text-xs my-auto">300sqft</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 10383.svg" />
                                        <h3 className="text-xs my-auto">Apartment</h3>
                                    </div>
                                </div>
                                <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                    <div className="text-color5 text-sm my-auto">For Buy</div>
                                    <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img className="cursor-pointer hover:opacity-50" src="Buy/Group 9006.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* cart */}
                        <div className=" md:cursor-pointer">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2656.svg" />
                                </div>
                                <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-medium bg-color1"> 
                                   <span className="2xl:text-xl">€1,550</span>
                                   <span className="text-xs ml-1">Per Month</span>
                                </div>                            </div>
                            <div className=" pl-4 space-y-4 pt-10  pr-3 shadow-md rounded-b-sm md:rounded-b-md">
                                <div className=" space-y-2">
                                    <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                    <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                </div>
                                <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Vector.svg" />
                                        <h3 className="text-xs my-auto">6 Bed</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-4 xs:w-5 " src="HomePage5/Layer_1.svg" />
                                        <h3 className="text-xs my-auto">3 Baths</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 8935.svg" />
                                        <h3 className="text-xs my-auto">300sqft</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1 w-3 xs:w-4 " src="HomePage5/Group 10383.svg" />
                                        <h3 className="text-xs my-auto">Apartment</h3>
                                    </div>
                                </div>
                                <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                    <div className="text-color5 text-sm my-auto">For Buy</div>
                                    <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
    )
}

export default StudentAccommodation;
