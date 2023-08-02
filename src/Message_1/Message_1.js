import React from "react";

const Message_1 = ({ onScroll }) => {

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
            <div className=" md:w-9/12  h-full ">
                <div className="text-color5">

                    <div className="pb-6 md:pb-0 w-full flex justify-between">
                        <h1 className="md:px-6 2xl:px-11 md:pt-5 md:pb-6 text-2xl 2xl:text-3xl font-semibold">Message</h1>
                        <a>
                            <img className="md:hidden my-auto hover:opacity-50" src="Outline.svg" />
                        </a>
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">
                        <div className=" py-6 2xl:py-9 2xl:pr-10 flex justify-end space-x-2.5">
                            <div className="w-max px-4 py-2.5 md:pl-5 md:pr-6 md:py-3 flex space-x-2 2xl:space-x-4 border shadow-lg rounded md:rounded-lg cursor-pointer">
                                <img className="w-5 2xl:w-6" src="Group 9706.svg" />
                                <h2 className="hidden md:block text-sm 2xl:text-base font-medium my-auto text-color15 ">Delete</h2>
                            </div>
                            <div className="w-max px-4 py-2.5 md:pl-5 md:pr-6 md:py-3 flex space-x-2 2xl:space-x-4 border shadow-lg rounded md:rounded-lg cursor-pointer">
                                <img className="w-5 2xl:w-6" src="Group 9724.svg" />
                                <h2 className="hidden md:block text-sm 2xl:text-base font-medium my-auto text-color15 ">Block</h2>
                            </div>
                        </div>
                    </div>



                    {/* Conversation {chat } */}
                    <div className=" md:shadow-lg h-full rounded-sm md:rounded-lg md:border text-color5">
                        <div className="">

                            <div className=" border-t md:border-t-0 border-b md:border-b-2 border-color5 border-opacity-20 md:px-4 2xl:px-9 py-2.5">
                                <div className="flex justify-between md:justify-start space-x-6 xl:space-x-7">
                                    <div className="flex space-x-6 xl:space-x-7">
                                        {/* image */}
                                        <img className=" w-16 h-16 xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 rounded-full object-cover" src="HomePage5/Rectangle 2656.svg" />

                                        <div className="my-auto ">
                                            <span className="text-sm lg:text-base xl:text-lg 2xl:text-2xl font-bold">BEETLE CAR</span>
                                            <div className="flex xl:pt-1 space-x-2 text-color15 md:text-color5">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5 xl:w-5 xl:h-5 my-auto">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                </svg>
                                                <span className="text-xs xl:text-sm 2xl:text-base my-auto mt-1 xl:mt-0">5 day ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-auto  xl:pl-7">
                                        <a className="my-auto py-3 px-6 2xl:px-9 2xl:py-4 rounded cursor-pointer text-sm xl:text-lg 2xl:text-2xl bg-color1 text-white font-bold">€250</a>
                                    </div>
                                </div>
                            </div>

                            {/* Message Date or Time */}
                            <div className="mx-auto w-max text-sm 2xl:text-lg text-color5 text-opacity-50 rounded-sm md:rounded-full my-4 2xl:mt-6 py-1 px-4 2xl:py-2 2xl:px-6">August 21</div>

                        </div>


                        {/* Chat {Message} */}
                        <div className=" w-full h-full md:px-4 2xl:px-9 space-y-10 2xl:space-y-16">

                            {/* Right */}
                            <div className="">
                                <div className="w-full flex justify-end right-0">
                                    <p className="text-left w-4/5 lg:w-3/4 2xl:w-3/5 text-sm 2xl:text-lg border md:border-2 border-color1 rounded md:rounded-lg p-3 lg:p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</p>
                                </div>
                                <span className="pt-1 flex justify-end text-sm text-color15">10:15 pm</span>
                            </div>


                            {/* Left */}
                            <div>
                                <div className="w-full flex justify-start right-0">
                                    <p className="text-left w-4/5 lg:w-3/4 2xl:w-3/5 text-sm 2xl:text-lg bg-color16 bg-opacity-20 rounded md:rounded-lg p-3 lg:p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. </p>
                                </div>
                                <span className="pt-1 text-sm text-color15">10:15 pm</span>
                            </div>



                        </div>


                        {/* Message input   */}
                        <div className=" md:px-4 2xl:px-9 pt-16 pb-6 ">
                            <form className="border-2 border-color5 border-opacity-20 rounded bg-white">
                                <div className="flex">
                                    <input type="" id="search" className=" w-full outline-none rounded py-3.5 pl-2.5 pr-5 md:px-3.5 2xl:px-6 2xl:py-5 text-sm 2xl:text-base text-color5 " placeholder="Write a message..." required />
                                    <div type="submit" className=" flex justify-center space-x-2.5 md:space-x-4 pr-5 md:pr-8 lg:pr-4 2xl:pr-6 my-auto">
                                        <img className="w-5 h-5 2xl:w-7 2xl:h-7 my-auto cursor-pointer hover:opacity-60" src="Group 9720.svg" />
                                        <img className="w-5 h-5 2xl:w-7 2xl:h-7 my-auto cursor-pointer hover:opacity-60" src="Group 9718.svg" />
                                        <img className="w-7 h-7 2xl:w-11 2xl:h-11 my-auto cursor-pointer hover:opacity-60" src="Group 9721.svg" />
                                    </div>
                                </div>
                            </form>
                        </div>





















                    </div>









                </div>
            </div>









        </div>
    )
}

export default Message_1;
