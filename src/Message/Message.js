import React from "react";

const Message = ({ onScroll }) => {

    return (
        <div className="pt-32 2xl:pt-36 px-4 xs:px-6 sm:px-8 lg:px-20 2xl:px-28 py-4 md:flex md:space-x-4">



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





            {/* Message */}
            <div className="w-full  h-full ">
                <div className="text-color5">

                    <div className=" md:shadow-lg w-full md:rounded-t-lg md:border">
                        <h1 className="md:px-6 2xl:px-11 pt-5 md:pb-6 text-2xl 2xl:text-3xl font-semibold">Message</h1>
                    </div>

                    {/* Button */}
                    <div className=" py-6 2xl:py-9 2xl:pl-6 flex space-x-2.5">
                        <div className="w-max px-4 py-2.5 md:pl-5 md:pr-6 md:py-3 flex space-x-2 2xl:space-x-4 border shadow-lg rounded md:rounded-lg ">
                            <input type="checkbox" className=" w-5 h-5 md:w-4 md:h-4 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                            <h2 className="hidden md:block text-sm 2xl:text-base font-medium my-auto">All Select</h2>
                        </div>
                        <div className="w-max px-4 py-2.5 md:pl-5 md:pr-6 md:py-3 flex space-x-2 2xl:space-x-4 border shadow-lg rounded md:rounded-lg cursor-pointer">
                            <img className="w-5 2xl:w-6" src="Group 9706.svg" />
                            <h2 className="hidden md:block text-sm 2xl:text-base font-medium my-auto text-color15 ">Delete</h2>
                        </div>
                    </div>

                    {/* Conversation */}
                    <div className=" border rounded-sm md:rounded-t-lg shadow-lg">

                        {/* Conversation 01 */}
                        <a href="/message_1">
                            <div className="flex px-4 py-6 space-x-6 lg:px-6 2xl:pl-11 2xl:pr-16 border-b lg:border-b-2 border-color5 border-opacity-20">
                                <div className="my-auto">
                                    <input type="checkbox" className=" w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                                </div>
                                <img className="hidden sm:block w-14 h-14 2xl:w-16 2xl:h-16 rounded-full object-cover" src="HomePage5/Rectangle 2656.svg" />
                                <div className="w-full lg:flex lg:justify-between ">
                                    <div className="my-auto flex justify-between lg:flex-col w-full lg:w-max">
                                        <span className="text-sm lg:text-lg 2xl:text-xl font-bold">Double Room ...</span>
                                        <div className="flex pt-1 space-x-2 text-color15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 lg:w-5 lg:h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs lg:text-sm">Today 12 pm</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 my-auto">
                                        <span className="text-sm lg:text-base font-semibold">Brooklyn..</span>
                                        <div className="flex space-x-1.5">
                                            <img className=" lg:hidden my-auto w-4" src="Layer_1.svg" />
                                            <span className="text-color15 text-xs">Lorem Ipsum is simply dummy text</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block my-auto">
                                        <div className=" my-auto flex space-x-16">
                                            <div className="flex space-x-5 cursor-pointer hover:opacity-70">
                                                <img className="my-auto w-7 2xl:w-max" src="Layer_1.svg" />
                                                <span className="my-auto text-color15">Relied</span>
                                            </div>
                                            <img className=" cursor-pointer hover:opacity-50" src="Group 9706.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Conversation 01 */}
                        <a href="/message_1">
                            <div className="flex px-4 py-6 space-x-6 lg:px-6 2xl:pl-11 2xl:pr-16 border-b lg:border-b-2 border-color5 border-opacity-20">
                                <div className="my-auto">
                                    <input type="checkbox" className=" w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                                </div>
                                <img className="hidden sm:block w-14 h-14 2xl:w-16 2xl:h-16 rounded-full object-cover" src="HomePage5/Rectangle 2657.svg" />
                                <div className="w-full lg:flex lg:justify-between ">
                                    <div className="my-auto flex justify-between lg:flex-col w-full lg:w-max">
                                        <span className="text-sm lg:text-lg 2xl:text-xl font-bold">3 Maglin Grove</span>
                                        <div className="flex pt-1 space-x-2 text-color15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 lg:w-5 lg:h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs lg:text-sm">Today 12 pm</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 my-auto">
                                        <span className="text-sm lg:text-base font-semibold">Brooklyn...</span>
                                        <div className="flex space-x-1.5">
                                            <img className=" lg:hidden my-auto w-4" src="Layer_1.svg" />
                                            <span className="text-color15 text-xs">Lorem Ipsum is simply dummy text</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block my-auto">
                                        <div className=" my-auto flex space-x-16">
                                            <div className="flex space-x-5 cursor-pointer hover:opacity-70">
                                                <img className="my-auto w-7 2xl:w-max" src="Layer_1.svg" />
                                                <span className="my-auto text-color15">Relied</span>
                                            </div>
                                            <img className=" cursor-pointer hover:opacity-50" src="Group 9706.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Conversation 01 */}
                        <a href="/message_1">
                            <div className="flex px-4 py-6 space-x-6 lg:px-6 2xl:pl-11 2xl:pr-16 border-b lg:border-b-2 border-color5 border-opacity-20">
                                <div className="my-auto">
                                    <input type="checkbox" className=" w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                                </div>
                                <img className="hidden sm:block w-14 h-14 2xl:w-16 2xl:h-16 rounded-full object-cover" src="HomePage5/Rectangle 2656.svg" />
                                <div className="w-full lg:flex lg:justify-between ">
                                    <div className="my-auto flex justify-between lg:flex-col w-full lg:w-max">
                                        <span className="text-sm lg:text-lg 2xl:text-xl font-bold">Knockatober, Dunleer</span>
                                        <div className="flex pt-1 space-x-2 text-color15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 lg:w-5 lg:h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs lg:text-sm">Today 12 pm</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 my-auto">
                                        <span className="text-sm lg:text-base font-semibold">Brooklyn...</span>
                                        <div className="flex space-x-1.5">
                                            <img className=" lg:hidden my-auto w-4" src="Layer_1.svg" />
                                            <span className="text-color15 text-xs">Lorem Ipsum is simply dummy text</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block my-auto">
                                        <div className=" my-auto flex space-x-16">
                                            <div className="flex space-x-5 cursor-pointer hover:opacity-70">
                                                <img className="my-auto w-7 2xl:w-max" src="Layer_1.svg" />
                                                <span className="my-auto text-color15">Relied</span>
                                            </div>
                                            <img className=" cursor-pointer hover:opacity-50" src="Group 9706.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Conversation 01 */}
                        <a href="/message_1">
                            <div className="flex px-4 py-6 space-x-6 lg:px-6 2xl:pl-11 2xl:pr-16 border-b lg:border-b-2 border-color5 border-opacity-20">
                                <div className="my-auto">
                                    <input type="checkbox" className=" w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                                </div>
                                <img className="hidden sm:block w-14 h-14 2xl:w-16 2xl:h-16 rounded-full object-cover" src="HomePage5/Rectangle 2657.svg" />
                                <div className="w-full lg:flex lg:justify-between ">
                                    <div className="my-auto flex justify-between lg:flex-col w-full lg:w-max">
                                        <span className="text-sm lg:text-lg 2xl:text-xl font-bold">3 Maglin Grove</span>
                                        <div className="flex pt-1 space-x-2 text-color15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 lg:w-5 lg:h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs lg:text-sm">Today 12 pm</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 my-auto">
                                        <span className="text-sm lg:text-base font-semibold">Brooklyn...</span>
                                        <div className="flex space-x-1.5">
                                            <img className=" lg:hidden my-auto w-4" src="Layer_1.svg" />
                                            <span className="text-color15 text-xs">Lorem Ipsum is simply dummy text</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block my-auto">
                                        <div className=" my-auto flex space-x-16">
                                            <div className="flex space-x-5 cursor-pointer hover:opacity-70">
                                                <img className="my-auto w-7 2xl:w-max" src="Layer_1.svg" />
                                                <span className="my-auto text-color15">Relied</span>
                                            </div>
                                            <img className=" cursor-pointer hover:opacity-50" src="Group 9706.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Conversation 01 */}
                        <a href="/message_1">
                            <div className="flex px-4 py-6 space-x-6 lg:px-6 2xl:pl-11 2xl:pr-16 border-b lg:border-b-2 border-color5 border-opacity-20">
                                <div className="my-auto">
                                    <input type="checkbox" className=" w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg cursor-pointer my-auto" required="" />
                                </div>
                                <img className="hidden sm:block w-14 h-14 2xl:w-16 2xl:h-16 rounded-full object-cover" src="HomePage5/Rectangle 2656.svg" />
                                <div className="w-full lg:flex lg:justify-between ">
                                    <div className="my-auto flex justify-between lg:flex-col w-full lg:w-max">
                                        <span className="text-sm lg:text-lg 2xl:text-xl font-bold">Knockatober, Dunleer</span>
                                        <div className="flex pt-1 space-x-2 text-color15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 lg:w-5 lg:h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs lg:text-sm">Today 12 pm</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 my-auto">
                                        <span className="text-sm lg:text-base font-semibold">Brooklyn...</span>
                                        <div className="flex space-x-1.5">
                                            <img className=" lg:hidden my-auto w-4" src="Layer_1.svg" />
                                            <span className="text-color15 text-xs">Lorem Ipsum is simply dummy text</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block my-auto">
                                        <div className=" my-auto flex space-x-16">
                                            <div className="flex space-x-5 cursor-pointer hover:opacity-70">
                                                <img className="my-auto w-7 2xl:w-max" src="Layer_1.svg" />
                                                <span className="my-auto text-color15">Relied</span>
                                            </div>
                                            <img className=" cursor-pointer hover:opacity-50" src="Group 9706.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>




                    </div>






                </div>
            </div>









        </div>
    )
}

export default Message;
