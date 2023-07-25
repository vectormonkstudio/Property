import React, { useState } from "react";

const Buy = ({ onScroll }) => {
    const [filter, setFilter] = useState(false);
    const [country, setCountry] = useState(false);
    const [categories, setCategories] = useState(false);



    return (
        <div className="">


            <div onClick={() => setFilter(!filter)} className="fixed sm:hidden w-full flex justify-center px-6 bottom-0 py-6">
                <button className="font-bold w-full bg-color1 py-2 text-white rounded-sm hover:bg-white hover:text-color1 hover:shadow-lg outline-none focus:outline-none">Filter</button>
            </div>

            <div className=" px-4 xs:px-6 sm:px-8 lg:px-20 pt-32 sm:pt-32 2xl:pt-36 py-10 md:flex md:space-x-4">


                {/* Side Bar for mobile */}

                {
                    filter &&
                    <div className="sm:hidden h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded sm:rounded-lg bg-color5">

                        <div className="flex justify-end px-3 pt-3 pb-5">
                            <img className="md:hidden cursor-pointer hover:opacity-50" src="MainPageImage/Group 9442.svg" />
                        </div>

                        <div className="px-10 md:px-4 lg:px-6 pb-14">

                            <div className="text-white flex justify-center py-2 bg-color4 rounded-sm md:rounded" >
                                <img className="my-auto mr-2" src="MainPageImage/Star.svg" />
                                <h3 className="mt-1">Save Search</h3>
                            </div>

                            <div className="flex justify-between py-6">
                                <h2 className="text-white text-2xl font-semibold my-auto cursor-pointer">Filters</h2>
                                <button className="my-auto text-sm cursor-pointer py-1 px-2 outline-none focus:outline-none" style={{ "color": "#00AAFF" }}>Reset All</button>
                            </div>

                            <div className="flex px-4 py-2 cursor-pointer space-x-2 bg-color1 rounded-sm md:rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto" style={{ "color": "#D9D9D9" }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-white font-medium ">My Last Search</h3>
                                    <h4 className="text-xs" style={{ "color": "#D9D9D9" }}>All Sections</h4>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="pt-5 space-y-3">
                                <h3 className="pb-2 text-white 2xl:text-xl">Categories</h3>

                                <div className="relative inline-block text-left w-full">
                                    <div className="w-full">
                                        <button onClick={() => setCategories(!categories)} className="flex w-full px-4 py-2 rounded-s rounded-smmmd: md:rounded-md border justify-between cursor-pointer border-color12 outline-none focus:outline-none">
                                            <h3 className="my-auto text-white 2xl:text-xl">All Makes</h3>
                                            <img className="my-auto" src="MainPageImage/downarrow.svg" />
                                        </button>
                                    </div>

                                    {
                                        categories &&
                                        <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div className="flex overflow-y-scroll pb-10 " >
                                                <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">All Makes</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>

                            </div>

                            <div className=" py-6 space-y-3 2xl:text-xl">
                                <h3 className="pb-2 text-white 2xl:text-xl">Subcategories</h3>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">Home</h3>
                                    <h3 className="my-auto text-white">1500</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">kitchen</h3>
                                    <h3 className="my-auto text-white">352</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">living room</h3>
                                    <h3 className="my-auto text-white">500</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">bedroom</h3>
                                    <h3 className="my-auto text-white">100</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">wardrobe</h3>
                                    <h3 className="my-auto text-white">300</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">bathroom</h3>
                                    <h3 className="my-auto text-white">500</h3>
                                </button>
                                <button className="w-full flex px-4 py-2 rounded-sm md:rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                    <h3 className="my-auto text-white">Other</h3>
                                    <h3 className="my-auto text-white">600</h3>
                                </button>
                                <button className="w-full mt-3 text-color12 outline-none focus:outline-none font-medium">See All</button>
                            </div>


                            {/* Location */}
                            <div className=" space-y-3">
                                <h3 className="pb-2 text-white">Location</h3>
                                <div className="relative inline-block text-left w-full">
                                    <div className="w-full">
                                        <button onClick={() => setCountry(!country)} className="flex w-full px-4 py-2 rounded-sm md:rounded-md border justify-between cursor-pointer border-color12 outline-none focus:outline-none">
                                            <h3 className="my-auto text-white 2xl:text-xl">All Ireland</h3>
                                            <img className="my-auto" src="MainPageImage/downarrow.svg" />
                                        </button>
                                    </div>

                                    {country &&
                                        <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div className="flex overflow-y-scroll pb-10 " >
                                                <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">All Ireland</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                    <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Price */}
                            <div className="pt-5">
                                <h2 className=" pb-3 2xl:py-5 text-white font-semibold">Price</h2>
                                <div className=" space-y-3">
                                    <img src="HomePage5/pets/Group 9854.svg" />
                                    <div className="flex justify-between">
                                        <div className="bg-color1 font-semibold text-white px-3.5 py-1.5 rounded-sm md:rounded">0$</div>
                                        <div className="bg-color1 font-semibold text-white px-3.5 py-1.5 rounded-sm md:rounded">0$</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5 space-y">
                                <h3 className="pb-2.5 text-white">Seller Type</h3>
                                <div className="flex xl:text-sm border border-color12 rounded">
                                    <button className=" w-full text-center text-white px-4 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Any</button>
                                    <button className=" w-full text-center text-white px-4 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Private</button>
                                    <button className=" w-full text-center text-white px-4 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Trade</button>
                                </div>
                            </div>

                            <div className="pt-5 space-y">
                                <h3 className="pb-2.5 text-white">For Sale / Waned</h3>
                                <div className="flex xl:text-sm border border-color12 rounded">
                                    <button className=" w-full text-center text-white px-4 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">For Sale</button>
                                    <button className=" w-full text-center text-white px-4 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Wanted</button>
                                </div>
                            </div>

                        </div>
                    </div>
                }



                {/* Side Bar for Desktop */}
                <div className="hidden md:block h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded sm:rounded-lg bg-color5">

                    <div className="flex justify-end px-3 pt-3 pb-5">
                        <img className="md:hidden cursor-pointer hover:opacity-50" src="MainPageImage/Group 9442.svg" />
                    </div>

                    <div className="px-10 md:px-4 lg:px-6 pb-14">

                        <div className="text-white flex justify-center py-2 bg-color4 rounded" >
                            <img className="my-auto mr-2 w-6 xl:w-max" src="MainPageImage/Star.svg" />
                            <h3 className="text-sm xl:text-base my-auto font-medium">Save Search</h3>
                        </div>

                        <div className="flex justify-between py-6">
                            <h2 className="text-white text-xl xl:text-2xl font-semibold my-auto cursor-pointer">Filters</h2>
                            <button className="my-auto text-xs xl:text-sm cursor-pointer py-1 px-2 outline-none focus:outline-none" style={{ "color": "#00AAFF" }}>Reset All</button>
                        </div>

                        <div className="flex px-2 lg:px-4 py-2 cursor-pointer space-x-2 bg-color1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 xl:w-6 xl:h-6 my-auto" style={{ "color": "#D9D9D9" }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-white font-medium text-sm xl:text-base">My Last Search</h3>
                                <h4 className="text-xs" style={{ "color": "#D9D9D9" }}>All Sections</h4>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="pt-5 space-y-3">
                            <h3 className="pb-2 text-white 2xl:text-xl">Categories</h3>

                            <div className="relative inline-block text-left w-full">
                                <div className="w-full">
                                    <button onClick={() => setCategories(!categories)} className="flex w-full px-4 py-2 rounded-md border justify-between cursor-pointer border-color12 outline-none focus:outline-none">
                                        <h3 className="my-auto text-white text-sm xl:text-base 2xl:text-xl">All Makes</h3>
                                        <img className="my-auto" src="MainPageImage/downarrow.svg" />
                                    </button>
                                </div>

                                {
                                    categories &&
                                    <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="flex overflow-y-scroll pb-10 " >
                                            <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">All Makes</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>

                        <div className=" py-6 space-y-3 text-sm xl:text-base 2xl:text-xl">
                            <h3 className="pb-2 text-white text-base 2xl:text-xl">Subcategories</h3>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">Home</h3>
                                <h3 className="my-auto text-white">1500</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">kitchen</h3>
                                <h3 className="my-auto text-white">352</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">living room</h3>
                                <h3 className="my-auto text-white">500</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">bedroom</h3>
                                <h3 className="my-auto text-white">100</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">wardrobe</h3>
                                <h3 className="my-auto text-white">300</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">bathroom</h3>
                                <h3 className="my-auto text-white">500</h3>
                            </button>
                            <button className="w-full flex px-4 py-2 rounded-md  justify-between cursor-pointer border border-color5 hover:border-color12 focus:border-color12 outline-none focus:outline-none">
                                <h3 className="my-auto text-white">Other</h3>
                                <h3 className="my-auto text-white">600</h3>
                            </button>
                            <button className="w-full mt-3 text-color12 outline-none focus:outline-none font-medium">See All</button>
                        </div>


                        {/* Location */}
                        <div className=" space-y-3">
                            <h3 className="pb-2 text-white">Location</h3>

                            <div className="relative inline-block text-left w-full">
                                <div className="w-full">
                                    <button onClick={() => setCountry(!country)} className="flex w-full px-4 py-2 rounded-md border justify-between cursor-pointer border-color12 outline-none focus:outline-none">
                                        <h3 className="my-auto text-white text-sm xl:text-base 2xl:text-xl">All Ireland</h3>
                                        <img className="my-auto" src="MainPageImage/downarrow.svg" />
                                    </button>
                                </div>

                                {
                                    country &&
                                    <div className="absolute left-0 z-10 w-full origin-top-right border-color12 border-l border-r border-b rounded-b bg-color5 shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="flex overflow-y-scroll pb-10 " >
                                            <div className="w-full flex flex-col flex-nowrap h-60 2xl:h-80" >
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">All Ireland</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                <a className=" block px-4 py-3.5 2xl:py-4 hover:bg-color1 text-sm xl:text-base 2xl:text-xl text-white " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>

                        {/* Price */}
                        <div className="pt-5">
                            <h2 className=" pb-3 2xl:py-5 text-white font-semibold">Price</h2>
                            <div className=" space-y-3">
                                <img src="HomePage5/pets/Group 9854.svg" />
                                <div className="flex justify-between">
                                    <div className="bg-color1 font-semibold text-white px-3.5 py-1.5 rounded">0$</div>
                                    <div className="bg-color1 font-semibold text-white px-3.5 py-1.5 rounded">0$</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5 space-y">
                            <h3 className="pb-2.5 text-white">Seller Type</h3>
                            <div className="flex xl:text-sm border border-color12 rounded">
                                <button className=" w-full text-center text-white md:text-xs xl:text-base px-2 lg:px-4 xl:px-3 py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Any</button>
                                <button className=" w-full text-center text-white md:text-xs xl:text-base px-2 lg:px-4 xl:px-3 py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Private</button>
                                <button className=" w-full text-center text-white md:text-xs xl:text-base px-2 lg:px-4 xl:px-3 py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Trade</button>
                            </div>
                        </div>

                        <div className="pt-5 space-y">
                            <h3 className="pb-2.5 text-white">For Sale / Waned</h3>
                            <div className="flex text-sm border border-color12 rounded">
                                <button className=" w-full text-center text-white md:text-xs xl:text-base px-2 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">For Sale</button>
                                <button className=" w-full text-center text-white md:text-xs xl:text-base px-2 xl:px py-2 rounded justify-between cursor-pointer border-color12 outline-none focus:outline-none focus:ring-1 ring-color12 ">Wanted</button>
                            </div>
                        </div>

                    </div>
                </div>







                {/* Carts /Product  */}

                <div className=" w-full pt-4 sm:pt-0">

                    <div className=" sm:flex justify-between ">
                        <h3 className=" py-4  md:text-left md:py-8 md:text-xl lg:text-2xl font-bold text-color5 ">2,857 Properties for Sale in Dublin City</h3>
                        <div className="my-auto sm:w-1/2 md:w-2/5 2xl:w-1/3">
                            <div className="flex  border-2 border-color5 border-opacity-30 rounded-sm lg:rounded">
                                <svg aria-hidden="true" className="mt-1.5 2xl:mt-2.5 ml-2 w-6 h-6 text-color5 text-opacity-50 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="search" id="default-search" className="w-full pl-2 pr-4 py-2 2xl:py-2.5 text-sm 2xl:text-base outline-none placeholder-color5 placeholder-opacity-50 focus:placeholder-opacity-100" placeholder="Search Car" />
                            </div>
                        </div>
                    </div>



                    {/* Carts */}
                    <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">




                        {/* Carts 01 */}
                        <div className="">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2658.svg" />
                                </div>
                                <div
                                    className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">
                                    $2,8000</div>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img src="Buy/Group 9006.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* cart */}
                        <div className="">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2657.svg" />
                                </div>
                                <div
                                    className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">
                                    $2,8000</div>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img src="Buy/Group 9006.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* cart */}
                        <div className="">
                            <div className="">
                                <div className="">
                                    <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2656.svg" />
                                </div>
                                <div
                                    className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">
                                    $2,8000</div>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img src="Buy/Group 9006.svg" />
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

export default Buy;
