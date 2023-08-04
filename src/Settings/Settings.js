import React, { useState } from "react";

const Settings = ({ onScroll }) => {
    const [enabled, setEnabled] = useState(false)


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








            <div className=" w-full lg:w-3/4 h-full">


                <div className="shadow-md rounded-lg text-color5">

                    <div className=" border-b-2 border-color5 border-opacity-30 px-4 py-6 2xl:px-11">
                        <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold ">Settings</h2>
                    </div>

                    {/* Selectio Bar */}
                    <div className="sm:flex sm:space-x-10 2xl:space-x-16 py-10 2xl:py-16 px-4 2xl:px-11">
                        <div className="flex space-y-4 w-full space-x-2 xl:space-x-10 2xl:space-x-32">
                            <h1 className="2xl:text-xl mt-5 pr-1.5 my-auto font-semibold">Currency</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-1.5 2xl:py-2.5 px-5 rounded outline-none border-color5 border-opacity-30" placeholder="Import your add title" >
                                <h2 className=" opacity-50">Select Currency  </h2>
                                <img className="w-2.5 h-2 my-auto" src="AllAd/Polygon 24.svg" />
                            </section>
                        </div>
                        <div className="flex space-y-4 w-full space-x-2 xl:space-x-10 2xl:space-x-36">
                            <h1 className="2xl:text-xl mt-5 my-auto font-semibold">Language</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-1.5 2xl:py-2.5 px-5 rounded outline-none  border-color5 border-opacity-30" placeholder="Import your add title" >
                                <h2 className=" opacity-50">Select Language </h2>
                                <img className="w-2.5 h-2 my-auto" src="AllAd/Polygon 24.svg" />
                            </section>
                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className=" md:w-1/5 mr-2 md:mr-0 2xl:text-xl font-semibold mt-4" >Phone Number :</h1>
                        <div className="pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:flex sm:space-x-8">
                            <div className="flex items-start">
                                <div className="flex items-center h-5 ">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="pt-5 sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className="sm:w-1/5 2xl:text-xl font-semibold mt-4">Profile :</h1>
                        <div className="sm:flex pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-start ">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto" >Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Check Box */}
                    <div className="pt-5 sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className="sm:w-1/5 2xl:text-xl font-semibold mt-4">Email :</h1>
                        <div className="sm:flex pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-start ">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto" >Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* OFF ON Switch */}
                    <div className="pt-5 flex px-4 2xl:px-11 space-y-4 w-full">
                        <h1 className=" mr-3 sm:w-1/5 2xl:text-xl font-semibold mt-4">Chat :</h1>
                        <div className="flex sm:space-x-4">
                            <switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </switch>
                            <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">On/Off</span>

                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="pt-5 flex  px-4 2xl:px-11 space-y-4 w-full">
                        <h1 className="mr-3 sm:w-1/5 2xl:text-xl font-semibold mt-4" >Email Notification :</h1>
                        <div className="flex sm:space-x-4">
                            <switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </switch>
                            <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">On/Off</span>

                        </div>
                    </div>


                    {/* Button / Save Changes /Cancel*/}
                    <div className="py-10 px-4 2xl:px-11 space-x-6">

                        <button className="text-white text-sm lg:text-base font-bold py-2 sm:py-3 px-4 sm:px-14 rounded outline-none focus:outline-none  bg-color1 hover:text-color1 hover:bg-white hover:shadow-md">Save Changes</button>
                        <button className="text-white text-sm lg:text-base font-bold py-2 sm:py-3 px-4 sm:px-14 rounded outline-none focus:outline-none  bg-color6 hover:text-color6 hover:bg-white hover:shadow-md" >Cancel</button>

                    </div>

















                </div>



            </div>





        </div>
    )
}

export default Settings;
