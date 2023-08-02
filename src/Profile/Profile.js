import React, { useState } from "react";

const Profile = ({ onScroll }) => {


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
                            <div className="flex justify-between px-2 md:px-4 xl:px-6 2xl:px-10 md:py-4 xl:py-5 2xl:py-6">
                                <h2 className="text-color5 font-semibold sm:text-xl 2xl:text-3xl">Profile</h2>
                                <a href="/profile_2" className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 text-color5 cursor-pointer hover:text-opacity-40">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </a>
                            </div>
                            <div className="lg:px-4 xl:px-6 2xl:px-10">
                                <img className=" w-28 h-28 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-cover rounded-full mx-auto lg:mx-0" src="ProductDetails01/Ellipse 127.png" />
                            </div>
                        </div>


                        {/* Cart */}
                        <div className="xl:w-11/12 2xl:w-10/12 2xl:pl-10 lg:pb-20 pt-8 md:px-4 xl:px-6 md:py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                            <div className="border border-color5 border-opacity-30 rounded-sm md:rounded-lg">
                                <div className="flex justify-end pr-3.5 pt-2.5 cursor-pointer">
                                    <img className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 hover:opacity-40" src="profile/Group 8949.svg" />
                                </div>
                                <div className="pl-5 -mt-3 2xl:-mt-5 pb-5 space-y-2 flex flex-col">
                                    <span className="text-color5 font-medium text-base md:text-lg 2xl:text-xl">Name :</span>
                                    <span className="text-color1 text-xl 2xl:text-2xl">Mahmud Hossain </span>
                                </div>
                            </div>

                            <div className="border border-color5 border-opacity-30 rounded-sm md:rounded-lg">
                                <div className="flex justify-end pr-3.5 pt-2.5 cursor-pointer">
                                    <img className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 hover:opacity-40" src="profile/Group 9657.svg" />
                                </div>
                                <div className="pl-5 -mt-3 2xl:-mt-5 pb-5 space-y-2 flex flex-col">
                                    <span className="text-color5 font-medium text-base md:text-lg 2xl:text-xl">Email :</span>
                                    <span className="text-color1 text-xl 2xl:text-2xl">mahmud@gmail.com </span>
                                </div>
                            </div>

                            <div className="border border-color5 border-opacity-30 rounded-sm md:rounded-lg">
                                <div className="flex justify-end pr-3.5 pt-2.5 cursor-pointer">
                                    <img className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 hover:opacity-40" src="profile/Group 9659.svg" />
                                </div>
                                <div className="pl-5 -mt-3 2xl:-mt-5 pb-5 space-y-2 flex flex-col">
                                    <span className="text-color5 font-medium text-base md:text-lg 2xl:text-xl">Phone :</span>
                                    <span className="text-color1 text-xl 2xl:text-2xl">0123456789 </span>
                                </div>
                            </div>


                            <div className="border border-color5 border-opacity-30 rounded-sm md:rounded-lg">
                                <div className="flex justify-end pr-3.5 pt-2.5 cursor-pointer">
                                    <img className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 hover:opacity-40" src="profile/Group 9660.svg" />
                                </div>
                                <div className="pl-5 -mt-3 2xl:-mt-5 pb-5 space-y-2 flex flex-col">
                                    <span className="text-color5 font-medium text-base md:text-lg 2xl:text-xl">County :</span>
                                    <span className="text-color1 text-xl 2xl:text-2xl">Dublin, Asheton  </span>
                                </div>
                            </div>


                            <div className="border border-color5 border-opacity-30 rounded-sm md:rounded-lg">
                                <div className="flex justify-end pr-3.5 pt-2.5 cursor-pointer">
                                    <img className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 hover:opacity-40" src="profile/Group 9660.svg" />
                                </div>
                                <div className="pl-5 -mt-3 2xl:-mt-5 pb-5 space-y-2 flex flex-col">
                                    <span className="text-color5 font-medium text-base md:text-lg 2xl:text-xl">Area :</span>
                                    <span className="text-color1 text-xl 2xl:text-2xl">Asheton </span>
                                </div>
                            </div>


                        </div>

                    </div>



                </div>








            </div>





        </div>
    )
}

export default Profile;
