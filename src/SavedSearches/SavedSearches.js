import React from "react";

const SavedSearches = ({ onScroll }) => {

    return (
        <div className="pt-28 sm:pt-36 px-4 xs:px-6 sm:px-8 md:px-8 lg:px-20 2xl:px-28 py-4 md:flex md:space-x-4">


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




            <div className="w-full md:w-3/4 text-color5">

                <div className=" px-4 2xl:px-11">
                    <h2 className="text-2xl 2xl:text-3xl font-semibold py-6 rounded-lg ">Saved Searches</h2>
                </div>


                <div className="pt-6 space-y-8 xl:space-y-0 gap-3 2xl:gap-4 xl:flex">

                    {/* Details */}
                    <div className="space-y-6 xl:w-2/3">

                        {/* Details */}
                        <div className="border shadow-lg text-color5">
                            <div className=" flex justify-between px-5 sm:px-7 pt-4 pb-4 sm:pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">Tuam, Galway</h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg flex">Commercial  Rent, 300- 500 (+2 filters) </h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-xs sm:text-sm 2xl:text-lg">Show result, 152</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end space-x-6">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 9884.svg" />
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 8962.svg" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="border shadow-lg text-color5">
                            <div className=" flex justify-between px-5 sm:px-7 pt-4 pb-4 sm:pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">Tuam, Galway</h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg flex">Commercial  Rent, 300- 500 (+2 filters) </h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-xs sm:text-sm 2xl:text-lg">Show result, 152</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end space-x-6">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 9885.svg" />
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 8962.svg" />
                            </div>
                        </div>

                        {/* advertisement */}
                        <div className="">
                            <img className="w-full shadow-lg border rounded" src="HomePage5/new/Mask group.svg" />
                        </div>


                        {/* Details */}
                        <div className="border shadow-lg text-color5">
                            <div className=" flex justify-between px-5 sm:px-7 pt-4 pb-4 sm:pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">Tuam, Galway</h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg flex">Commercial  Rent, 300- 500 (+2 filters) </h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-xs sm:text-sm 2xl:text-lg">Show result, 152</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end space-x-6">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 9884.svg" />
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 8962.svg" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="border shadow-lg text-color5">
                            <div className=" flex justify-between px-5 sm:px-7 pt-4 pb-4 sm:pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">Tuam, Galway</h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg flex">Commercial  Rent, 300- 500 (+2 filters) </h2>
                                    <h2 className="text-xs sm:text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-xs sm:text-sm 2xl:text-lg">Show result, 152</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end space-x-6">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 9885.svg" />
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="HomePage5/Group 8962.svg" />
                            </div>
                        </div>





                    </div>






                    {/* Related Ads */}
                    <div className="xl:w-2/5">


                        {/* carts */}
                        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 xl:space-y-4 gap-4 xl:gap-0">

                            {/* advertisement */}
                            <div className="">
                                <img className="w-full shadow-lg border rounded" src="HomePage5/new/image 17.svg" />
                            </div>

                            {/* cart */}
                            <div className=" md:cursor-pointer">
                                <div className="">
                                    <div className="">
                                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2681.svg" />
                                    </div>
                                    <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-bold bg-color1">
                                        <span className="2xl:text-xl">€1,550</span>
                                        <span className="text-xs ml-1"></span>
                                    </div>
                                </div>
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

                            {/* advertisement */}
                            <div className="">
                                <img className="w-full shadow-lg border rounded" src="HomePage5/new/image 17.svg" />
                            </div>



                        </div>


                    </div>



                </div>




            </div>




        </div>
    )
}

export default SavedSearches;
