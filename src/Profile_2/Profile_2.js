import React, { useState } from "react";

const Profile_2 = ({ onScroll }) => {
    const [country, setCountry] = useState(false);
    const [area, setArea] = useState(false);


    return (
        <div className="">

            <div className="pt-24 md:pt-32 xl:pt-36 sm:px-8 md:px-8 lg:px-20 2xl:px-28 py-4 md:flex md:space-x-4">



                {/* My Dashboard */}
                <div className="hidden md:block px-4 xs:px-6 sm:px-0 md:w-1/4 ">
                    {/* profile */}
                    <div className="shadow-xl rounded-lg bg-color5">
                        <h2 className="text-white text-sm xl:text-xl font-bold text-center md:text-left py-3 md:px-4 lg:px-7 xl:py-6 2xl:px-7 border-b border-gray-500" >My Dashboard</h2>
                        <div className="py-4 2xl:pt-9 2xl:pb-5 text-center ">
                            <img className=" w-20 h-20 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-cover rounded-full mx-auto" src="ProductDetails01/Ellipse 127.png" />
                            <h3 className="text-base xl:text-xl font-medium pt-2 text-color4">Robert Mclean</h3>
                        </div>
                        <div className="pb-7 space-y-4 ">
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/edit_profile" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/profile.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">Edit Profile</h3>
                                </a>
                            </div>
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/all_ad" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/myadd.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">My Ads</h3>
                                </a>
                            </div>
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/message" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/message.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">Messages</h3>
                                </a>
                            </div>
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/saved_ads" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/savesad.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">Saved Ads</h3>
                                </a>
                            </div>
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/saved_searches" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/star.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">Saved Searches</h3>
                                </a>
                            </div>
                            <div className="border-t border-gray-500 hover:bg-opacity-50 cursor-pointer">
                                <a href="/payment" className="flex pl-4 lg:pl-7 xl:px-8 pt-3 space-x-2 2xl:space-x-4 ">
                                    <img className="my-auto w-6 xl:w-max" src="AllAd/payment.svg" />
                                    <h3 className="text-sm hover:text-color8 xl:text-base 2xl:text-xl my-auto text-white">Payment</h3>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className=" rounded-lg mt-6 bg-color5">
                        <h2 className="text-white 2xl:text-xl font-bold py-6 px-7 border-b border-gray-500" >Safety Tips For Buyers</h2>
                        <div className="px-7 pt-6 pb-5 space-y-4 ">
                            <div className="flex space-x-3 2xl:space-x-4">
                                <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Money not Refundable</h3>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-4">
                                <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                                <h3 className="2xl:text-lg my-auto text-white">You Not renew your Premium add
                                    after experted</h3>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-4">
                                <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Premium ads are active for
                                    depend on package.</h3>
                            </div>
                            <div className="pt-5">
                                <button className="text-white py-2.5 px-9 rounded flex justify-center mx-auto bg-color1 hover:bg-white hover:text-color1 outline-none focus:outline-none hover:shadow-md">More</button>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="mt-10 md:mt-0 lg:pt-0 px-4 xs:px-6 sm:px-0 md:w-3/4 h-full md:shadow-md lg:rounded-lg">

                    <div className=" md:border md:border-gray-200 md:rounded-lg ">
                        <div className="md:space-y-5">
                            <div className="flex justify-between px-2 md:px-4 xl:px-6 2xl:px-10 md:py-4 xl:py-5 2xl:py-6 md:border-b-2">
                                <h2 className="text-color5 font-semibold sm:text-xl 2xl:text-3xl">Profile</h2>
                                <a href="/" className="">
                                    <img className="w-5 h-5" src="profile/Group 9667.svg" />
                                </a>
                            </div>
                            <div className="lg:px-4 xl:px-6 2xl:px-10 flex justify-center lg:justify-start">
                                <div className="">
                                    <img className=" w-28 h-28 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                                    <a href="/profile_3" className=" cursor-pointer hover:opacity-90">
                                        <img className="w-8 h-8 ml-20 -mt-10" src="profile/Group 9740.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Cart */}
                        <div className=" 2xl:px-10 lg:pb-20 pt-8 md:px-4 xl:px-6 md:pt-10 md:pb-10 2xl:pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8 2xl:gap-10">

                            <div className="flex flex-col space-y-5">
                                <span className="text-color5 font-semibold 2xl:text-xl">Name</span>
                                <input className="w-full px-6 py-1.5 md:py-2 text-color5 2xl:text-xl rounded-sm md:rounded border-2 border-color5 border-opacity-30 outline-none focus:outline-none" placeholder="" />
                            </div>

                            <div className="flex flex-col space-y-5">
                                <span className="text-color5 font-semibold 2xl:text-xl">Email</span>
                                <input className="w-full px-6 py-1.5 md:py-2 text-color5 2xl:text-xl rounded-sm md:rounded border-2 border-color5 border-opacity-30 outline-none focus:outline-none" placeholder="" />
                            </div>

                            <div className="flex flex-col space-y-5">
                                <span className="text-color5 text-opacity-50 font-semibold 2xl:text-xl">Phone</span>
                                <input className="w-full px-6 py-1.5 md:py-2 text-color5 2xl:text-xl rounded-sm md:rounded border-2 border-color5 border-opacity-30 outline-none focus:outline-none" placeholder="0123456789" />
                            </div>

                            {/* Country */}
                            <div className="flex flex-col space-y-5">
                                <span className="text-color5 font-semibold 2xl:text-xl">County</span>
                                <div className="relative inline-block text-left w-full">
                                    <div className="w-full">
                                        <button onClick={() => setCountry(!country)} type="button" className="w-full flex justify-between py-1.5 md:py-2 pl-6 pr-6 sm:px-4 lg:py-2 2xl:py-2 2xl:px-6 border-2 border-color5 border-opacity-30 rounded-sm lg:rounded outline-none focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            <h2 className="text-color5 my-auto 2xl:text-xl">Select County </h2>
                                            <img className="w-3 2xl:w-4 my-auto" src="AllAd/Polygon 24.svg" />
                                        </button>
                                    </div>
                                    {
                                        country &&
                                        <div className="absolute left-0 z-10 mt-4 2xl:mt-6 w-full origin-top-right rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div className="" role="none">
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Area */}
                            <div className="flex flex-col space-y-5">
                                <span className="text-color5 font-semibold 2xl:text-xl">Area</span>
                                <div className="relative inline-block text-left w-full">
                                    <div className="w-full">
                                        <button onClick={() => setArea(!area)} type="button" className="w-full flex justify-between py-1.5 md:py-2 pl-6 pr-6 sm:px-4 lg:py-2 2xl:py-2 2xl:px-6 border-2 border-color5 border-opacity-30 rounded-sm lg:rounded outline-none focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            <h2 className="text-color5 my-auto 2xl:text-xl">Select Area </h2>
                                            <img className="w-3 2xl:w-4 my-auto" src="AllAd/Polygon 24.svg" />
                                        </button>
                                    </div>
                                    {
                                        area &&
                                        <div className="absolute left-0 z-10 mt-4 2xl:mt-6 w-full origin-top-right rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div className="" role="none">
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-0">USA</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-1">UK</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Canada</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Malyshiya</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Chin</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">Bangladesh</a>
                                                <a href="" className=" block px-4 py-3.5 2xl:py-4 hover:bg-color5 hover:bg-opacity-5 text-sm 2xl:text-base text-color5 text-opacity-70 " role="menuitem" tabindex="-1" id="menu-item-2">India</a>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>






                        </div>

                    </div>



                </div>








            </div>





        </div>
    )
}

export default Profile_2;
