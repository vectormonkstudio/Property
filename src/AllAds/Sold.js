import React from "react";

const Sold = ({ onScroll }) => {

    return (
        <div className="pt-32 sm:pt-36 sm:px-8 md:px-8 lg:px-20 2xl:px-28 py-4 md:flex md:space-x-4">


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







            <div className="pt-1 lg:pt-0  px-4 xs:px-6 sm:px-0 md:w-3/4 h-full ">


                <div className="">

                    <div className="">
                        <h3 className=" sm:text-left text-lg pb-3 lg:px-6 sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">My Ads</h3>
                    </div>

                    <div className="pb-2">
                        <div className=" flex 2xl:space-x-16 pt-4 pb-0 border-b-2 ">
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">All Ads</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Active</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Sold</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Expired</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Bids</h2>
                            </button>

                        </div>
                    </div>



                    <div className="py-6 lg:px-8 rounded">

                        {/* Carts */}
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">

                            {/* cart ==> Sold */}
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
                                <div className=" px-4 2xl:px-8 space-y-4 pt-10 shadow-md rounded-b-sm md:rounded-b-md">
                                    <div className="flex justify-between xl:pr-3">
                                        <div className=" space-y-2">
                                            <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                            <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                        </div>
                                        <button className="w-max h-full rounded-sm md:rounded hover:bg-color17 hover:text-white focus:bg-color17 focus:text-white py-1 px-3 xl:px-4 2xl:py-1.5 text-color17 text-sm border-2 border-color17 outline-none focus:outline-none">Sold</button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Vector.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">6 Bed</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Layer_1.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">3 Baths</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-4 2xl:w-max" src="HomePage5/Group 8935.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">300sqft</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-5 2xl:w-5" src="HomePage5/Group 9990.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">Detached House</h3>
                                        </div>
                                    </div>
                                    <div className=" flex justify-between py-2 2xl:py-4 border-t border-color5 border-opacity-30">
                                        <div className="text-color5 text-sm 2xl:text-xl my-auto">For Buy</div>
                                        <div className="flex space-x-2">
                                            <img className="cursor-pointer hover:opacity-50 w-8 2xl:w-max" src="AllAd/Group 8962.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* cart ==> Sold */}
                            <div className=" md:cursor-pointer">
                                <div className="">
                                    <div className="">
                                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2685.svg" />
                                    </div>
                                    <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-bold bg-color1">
                                        <span className="2xl:text-xl">€1,550</span>
                                        <span className="text-xs ml-1"></span>
                                    </div>
                                </div>
                                <div className=" px-4 2xl:px-8 space-y-4 pt-10 shadow-md rounded-b-sm md:rounded-b-md">
                                    <div className="flex justify-between xl:pr-3">
                                        <div className=" space-y-2">
                                            <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                            <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                        </div>
                                        <button className="w-max h-full rounded-sm md:rounded hover:bg-color17 hover:text-white focus:bg-color17 focus:text-white py-1 px-3 xl:px-4 2xl:py-1.5 text-color17 text-sm border-2 border-color17 outline-none focus:outline-none">Sold</button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Vector.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">6 Bed</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Layer_1.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">3 Baths</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-4 2xl:w-max" src="HomePage5/Group 8935.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">300sqft</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-5 2xl:w-5" src="HomePage5/Group 9990.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">Detached House</h3>
                                        </div>
                                    </div>
                                    <div className=" flex justify-between py-2 2xl:py-4 border-t border-color5 border-opacity-30">
                                        <div className="text-color5 text-sm 2xl:text-xl my-auto">For Buy</div>
                                        <div className="flex space-x-2">
                                            <img className="cursor-pointer hover:opacity-50 w-8 2xl:w-max" src="AllAd/Group 8962.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>



                        {/* advertisement */}
                        <div className="md:py-12 w-full">
                            <img className="w-full" src="HomePage5/new/Mask group.svg" />
                        </div>



                        {/* Carts */}
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">

                            {/* cart ==> Sold */}
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
                                <div className=" px-4 2xl:px-8 space-y-4 pt-10 shadow-md rounded-b-sm md:rounded-b-md">
                                    <div className="flex justify-between xl:pr-3">
                                        <div className=" space-y-2">
                                            <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                            <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                        </div>
                                        <button className="w-max h-full rounded-sm md:rounded hover:bg-color17 hover:text-white focus:bg-color17 focus:text-white py-1 px-3 xl:px-4 2xl:py-1.5 text-color17 text-sm border-2 border-color17 outline-none focus:outline-none">Sold</button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Vector.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">6 Bed</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Layer_1.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">3 Baths</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-4 2xl:w-max" src="HomePage5/Group 8935.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">300sqft</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-5 2xl:w-5" src="HomePage5/Group 9990.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">Detached House</h3>
                                        </div>
                                    </div>
                                    <div className=" flex justify-between py-2 2xl:py-4 border-t border-color5 border-opacity-30">
                                        <div className="text-color5 text-sm 2xl:text-xl my-auto">For Buy</div>
                                        <div className="flex space-x-2">
                                            <img className="cursor-pointer hover:opacity-50 w-8 2xl:w-max" src="AllAd/Group 8962.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* cart ==> Sold */}
                            <div className=" md:cursor-pointer">
                                <div className="">
                                    <div className="">
                                        <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2685.svg" />
                                    </div>
                                    <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-bold bg-color1">
                                        <span className="2xl:text-xl">€1,550</span>
                                        <span className="text-xs ml-1"></span>
                                    </div>
                                </div>
                                <div className=" px-4 2xl:px-8 space-y-4 pt-10 shadow-md rounded-b-sm md:rounded-b-md">
                                    <div className="flex justify-between xl:pr-3">
                                        <div className=" space-y-2">
                                            <h2 className="text-lg md:text-xl font-bold text-color5">Pool apartment</h2>
                                            <h2 className="text-xs md:text-sm text-color5">18 Grattan St, Brookly</h2>
                                        </div>
                                        <button className="w-max h-full rounded-sm md:rounded hover:bg-color17 hover:text-white focus:bg-color17 focus:text-white py-1 px-3 xl:px-4 2xl:py-1.5 text-color17 text-sm border-2 border-color17 outline-none focus:outline-none">Sold</button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 xs:gap-4 text-color5">
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Vector.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">6 Bed</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-4 xs:w-5 2xl:w-max" src="HomePage5/Layer_1.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">3 Baths</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-4 2xl:w-max" src="HomePage5/Group 8935.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">300sqft</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 2xl:space-x-2">
                                            <img className=" mr-1 w-3 xs:w-5 2xl:w-5" src="HomePage5/Group 9990.svg" />
                                            <h3 className="text-xs 2xl:text-lg my-auto">Detached House</h3>
                                        </div>
                                    </div>
                                    <div className=" flex justify-between py-2 2xl:py-4 border-t border-color5 border-opacity-30">
                                        <div className="text-color5 text-sm 2xl:text-xl my-auto">For Buy</div>
                                        <div className="flex space-x-2">
                                            <img className="cursor-pointer hover:opacity-50 w-8 2xl:w-max" src="AllAd/Group 8962.svg" />
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

export default Sold;