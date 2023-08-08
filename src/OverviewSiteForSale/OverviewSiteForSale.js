import React from "react";

const OverviewSiteForSale = ({ onScroll }) => {

    return (
        <div className="pt-32 2xl:pt-36 px-4 xs:px-6 sm:px-8 lg:px-20 2xl:px-28">
            <div>


                <div className="2xl:pt-10 w-full h-full md:flex">
                    <div className="w-full h-full md:p-0.5">
                        <img className="w-full h-full rounded-sm md:rounded" src="HomePage5/new/image 21.svg" />
                    </div>
                    <div className="md:mt-0.5 pt-1 xs:pt-1.5 md:pt-0 w-full md:w-1/3 grid grid-cols-4 md:grid-cols-1 gap-1 xs:gap-1.5 md:gap-0">
                        <div className=" cursor-pointer w-full md:px-1">
                            <img className="w-full h-14 sm:h-20 md:h-full md:pb-1 object-cover rounded-sm md:rounded-none md:rounded-tr" src="HomePage5/new/image 21.svg" />
                        </div>

                        <div className=" cursor-pointer w-full md:px-1">
                            <img className="w-full h-14 sm:h-20 md:h-full md:py-1 object-cover rounded-sm md:rounded-none" src="HomePage5/new/image 21.svg" />
                        </div>

                        <div className=" cursor-pointer w-full md:px-1">
                            <img className="w-full h-14 sm:h-20 md:h-full md:py-1 object-cover rounded-sm md:rounded-none md:rounded-br" src="HomePage5/new/image 21.svg" />
                        </div>

                        <div className="md:hidden cursor-pointer md:pt-2 md:px-1 ">
                            <img className="w-full h-14 sm:h-20 md:h-full md:py-1 object-cover rounded-sm md:rounded-none " src="HomePage5/image 21.svg" />
                        </div>
                    </div>
                </div>





                <div className=" py-4 sm:flex md:space-x-3 2xl:space-x-4">

                    <div className=" w-full lg:w-3/4">
                        {/* --- */}
                        <div className="md:border rounded-lg md:shadow-lg">
                            <div className="py-4 sm:px-8 md:pt-8 2xl:px-12 2xl:pt-12   ">
                                <div className="  md:flex md:justify-between">
                                    <div>
                                        <div className="pb-2 md:pb-6 2xl:pb-6 pt-2">
                                            <h2 className="text-lg sm:text-2xl 2xl:text-3xl font-bold text-color5 uppercase">Apartment in Hrvojeva 6 Split</h2>
                                        </div>
                                        <div className="flex space-x-2 pb-4 md:pb-12 2xl:pb-20 " >
                                            <img className="w-3 md:w-5 2xl:w-7" src="Group 10120.svg" />
                                            <span className="text-xs sm:text-base 2xl:text-2xl font-bold text-color5">Weldon Mtwy, Newhall, CA 91321, USA</span>
                                        </div>
                                    </div>
                                    {/* price */}
                                    <h2 className="pb-5 text-2xl sm:text-2xl 2xl:text-4xl font-bold text-color1">  €6000</h2>
                                </div>
                                <div className="pb-5 sm:pb-10 2xl:pb-16 flex flex-wrap gap-3 xs:gap-4 md:gap-8 xl:gap-10 2xl:gap-16 text-color5">
                                <div className="text-sm flex space-x-1 md:space-x-4 2xl:space-x-6">
                                        <img className=" mr-1 w-3 xs:w-4 md:w-5 2xl:w-6" src="HomePage5/Group 8935.svg" />
                                        <h3 className="text-xs md:text-sm 2xl:text-2xl 2xl:font-normal font-medium my-auto">300sqft</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1 md:space-x-4 2xl:space-x-6">
                                        <img className=" mr-1 w-3 xs:w-4 md:w-6 2xl:w-7" src="HomePage5/Group 10115.svg" />
                                        <h3 className="text-xs md:text-sm 2xl:text-2xl 2xl:font-normal font-medium my-auto">House For Share </h3>
                                    </div>
                                </div>
                            </div>



                            {/* Property Details */}
                            <div className=" pt-4 pb-8 sm:pb-10 sm:px-8 2xl:px-12 border-t border-color5 border-opacity-20  ">
                                <h2 className="pt-4 2xl:pt-16  pb-7 2xl:pb-12 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Property Details</h2>

                                <div className=" space-y-5 sm:space-y-0 text-sm md:text-base 2xl:text-xl text-color5  sm:flex ">

                                    <div className="space-y-5 sm:w-1/2">
                                        <div className="w-full flex ">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Floor area :</h3>
                                            <h3 className="w-1/2 sm:w-52">1500 Sqft</h3>
                                        </div>
                                        <div className="w-full flex ">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Unit Price :</h3>
                                            <h3 className="w-1/2 sm:w-52">€15000</h3>
                                        </div>
                                        <div className="w-full flex ">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Property type :</h3>
                                            <h3 className="w-1/2 sm:w-52">Site</h3>
                                        </div>
                                       
                                    </div>

                                    {/* <div className="space-y-5 sm:w-1/2">
                                        <div className="w-full flex">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Available for :</h3>
                                            <h3 className="w-1/2 sm:w-52">9 Month</h3>
                                        </div>
                                        <div className="w-full flex">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Unit Price :</h3>
                                            <h3 className="w-1/2 sm:w-52">€1500 Per Week</h3>
                                        </div>
                                        <div className="w-full flex">
                                            <h3 className="w-1/2 sm:w-52 font-medium">tenants sharing :</h3>
                                            <h3 className="w-1/2 sm:w-52">2 Tenants</h3>
                                        </div>
                                        <div className="w-full flex">
                                            <h3 className="w-1/2 sm:w-52 font-medium">Property type :</h3>
                                            <h3 className="w-1/2 sm:w-52">House For Share</h3>
                                        </div>                                      
                                    </div> */}



                                </div>
                            </div>



                            {/* Overview */}
                            <div className="py-4 sm:px-8 2xl:px-12 border-t border-color5 border-opacity-20">
                                <h2 className="pt-4 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Overview</h2>
                                <div className="text-sm sm:text-base text-color5 space-y-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lorem elit, sed auctor arcu tempor nec. Morbi placerat tellus sed cursus pretium. Curabitur at urna rhoncus, luctus mi eu, eleifend libero. Nam mollis consectetur velit id pellentesque.
                                        Sed pharetra vulputate lorem, ac lacinia quam auctor id. Maecenas suscipit arcu a tristique finibus. Proin sodales elit id molestie auctor.
                                        Pellentesque quis efficitur ex, sit amet dapibus leo. Vivamus gravida, mi ut finibus tincidunt, dui quam accumsan purus, ac dictum enim ante quis tortor. Vestibulum ullamcorper quis ipsum sit amet lobortis.
                                        Fusce id hendrerit elit, eu tempor elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lorem elit, sed auctor arcu tempor nec. Morbi placerat tellus sed cursus pretium. Curabitur at urna rhoncus, luctus mi eu, eleifend libero. Nam mollis consectetur velit id pellentesque.
                                        Sed pharetra vulputate lorem, ac lacinia quam auctor id. Maecenas suscipit arcu a tristique finibus. Proin sodales elit id molestie auctor.
                                        Pellentesque quis efficitur ex, sit amet dapibus leo. Vivamus gravida, mi ut finibus tincidunt, dui quam accumsan purus, ac dictum enim ante quis tortor. Vestibulum ullamcorper quis ipsum sit amet lobortis.
                                        Fusce id hendrerit elit, eu tempor elit.</p>
                                    <p>Accommodation;</p>
                                    <p>Porch - 1.6m x 0.8m with double doors</p>
                                    <p>Hall - 3.6m x 1.5m with PVC double glazed front door, fitted blinds and laminate floor covering.</p>
                                    <p>Bathroom - 1.9m x 1.6m with floor and wall tiles, roller blinds, bathtub with electric power shower and glass screen and sink unit with built in storage.</p>
                                    <p>Living Room - 4.0m x 4.5m with laminate floor covering, feature fireplace with marble surround, spotlights, fitted roller blinds and curtains.</p>
                                    <p>Kitchen - 1.9m x 4.5m with laminate floor covering, ceramic tile splash-back, built in appliances including electric hob, extractor fan, oven & grill, plumbed for washing machine and dishwasher, spotlights, wall mounted vertical radiator and back door access to the rear garden with roller blinds.</p>
                                    <p>Bedroom - 2.6m x 2.4m with carpet, roller blinds, curtains and fitted wardrobes.</p>
                                    <p>Bedroom - 3.5m x 3.3m with roller blinds, curtains and fitted double wardrobes.</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>


                        </div>



                        {/* advertisement */}
                        <div className="md:py-12 w-full">
                            <img className="w-full" src="HomePage5/new/Mask group.svg" />
                        </div>





                        <div className="md:border md:rounded-lg md:shadow-lg">

                            {/* Facts and Features */}
                            <div className=" pt-8 pb-8 sm:pb-10 sm:px-8 2xl:px-12  border-t border-color5 border-opacity-20">
                                <h2 className="pt-4 2xl:pt-16  pb-7 2xl:pb-12 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Facts and Features</h2>
                                <div className=" space-y-5 sm:space-y-0 text-sm md:text-base 2xl:text-xl text-color5  sm:flex ">
                                    <div className="space-y-5 sm:w-1/2 2xl:w-1/3">

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Garage</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Cable TV</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Tumble Dryer</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Dishwasher</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Heating</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Microwave</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Pets Allowed</span>
                                        </div>


                                    </div>


                                    <div className="space-y-5 sm:w-1/2">

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Alarm</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Wheelchair Access</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Garden/Patio/Balcony</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Internet</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Serviced Property</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Smoking</span>
                                        </div>

                                        <div className="flex">
                                            <img className="md:hidden" src="HomePage5/Group 9812.svg" />
                                            <img className="hidden md:block w-5 2xl:w-max" src="HomePage5/Group 10127.svg" />
                                            <span className="text-sm md:text-base 2xl:text-lg font-medium my-auto ml-6">Washing Machine</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>


                            {/* BER Details */}
                            <div className="pt-8 pb-8 sm:pb-10 sm:px-8 2xl:px-12 ">
                                <h2 className="pt-4 2xl:pt-16  pb-7 2xl:pb-12 text-lg sm:text-xl xl:text-2xl font-bold text-color5">BER Details</h2>
                                <div>
                                    <img src="HomePage5/new/image 19.svg" />
                                    <div className="ml-1.5 pt-6 text-color5 space-x-7 md:text-xl">
                                        <span className="font-medium">BER No: </span>
                                        <span>105335491</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Location */}
                        <div className="py-4 sm:px-8  2xl:px-7 mt-6 border-t border-color5 border-opacity-20 md:shadow-md md:rounded-lg md:border">
                            <div className="sm:flex justify-between pt-6 pb-4">
                                <h2 className=" text-lg sm:text-xl xl:text-2xl font-bold text-color5">Location</h2>
                                <div className="flex pt-8 sm:pt-0">
                                    <img className="w-3.5" src="Group 10120.svg" />
                                    <h2 className="ml-2 2xl:ml-6 my-auto text-xs sm:text-base 2xl:text-xl text-color5">Weldon Mtwy, Newhall, CA 91321, USA</h2>
                                </div>
                            </div>
                            <div>
                                <img className="rounded-sm md:rounded-lg" src="ProductDetails01/image 4.svg" />
                            </div>
                        </div>


                        {/* Property video */}
                        <div className="py-4 sm:px-8  2xl:px-7 mt-6 border-t border-color5 border-opacity-20 md:shadow-md md:rounded-lg md:border">
                            <h2 className="pt-6 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Property video</h2>
                            <div>
                                <img className=" rounded-sm md:rounded-lg" src="ProductDetails01/Group 9413.svg" />
                            </div>
                        </div>

                    </div>





                    {/* My Dashboard & cart */}
                    <div className="sm:hidden lg:block  md:w-1/4 lg:w-1/4 ">


                       {/* profile */}
                       <div className="shadow-xl rounded-lg bg-color5">
                            <h2 className="text-white text-lg xl:text-xl font-bold  py-3 px-4 xs:px-6 xl:py-6 2xl:px-7 border-b border-gray-500" >Posted By</h2>
                            <div className="py-4 2xl:pt-9 2xl:pb-5 text-center ">
                                <img className=" w-20 h-20 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-cover rounded-full mx-auto" src="Header/Group 9577.svg" />
                                <h3 className="text-lg xl:text-xl font-medium pt-2 text-color4">Robert Mclean</h3>
                                <h2 className="text-white md:text-sm lg:text-base 2xl:text-lg pt-2">Independent Dealer</h2>
                                <h2 className="text-white md:text-sm lg:text-base 2xl:text-lg pt-2">Member Since November 2015</h2>
                                <div className="flex justify-center pt-2">
                                    <img className="my-auto w-6 2xl:w-max" src="ProductDetails01/location.svg" />
                                    <h1 className="my-auto text-white md:text-sm lg:text-base 2xl:text-xl ml-2">Dublin,Ireland</h1>
                                </div>
                            </div>
                            <div className=" border-t border-gray-500">
                                <h2 className="text-white text-lg xl:text-xl font-medium  py-3 px-4 xs:px-4 xl:py-6 2xl:px-7" >Message To owner </h2>
                                <div className=" space-y-2 pb-4 px-4 2xl:px-7">
                                    <div>
                                        <textarea className=" w-full h-32 text-color5 py-1.5 px-4 text-sm outline-none focus:outline-none rounded" placeholder="Your Message"></textarea>
                                        <div class="flex items-start pt-2 pb-10 2xl:pb-14">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-5 h-5 md:w-4 md:h-4 bg-color5 checked:bg-color1  " required="" />
                                            </div>
                                            <div class="ml-2 2xl:ml-3 mt-0.5 2xl:mt-0 text-xs 2xl:text-sm">
                                                <label for="remember" class=" text-white text-opacity-70 dark:text-gray-300 my-auto">I Accept The Privacy policy</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full py-2.5 xs:py-2 2xl:py-2.5 px-4 md:px-0 text-white text-sm xs:text-base md:text-xs lg:text-sm 2xl:text-lg font-medium bg-color4 hover:bg-white hover:text-color4 hover:shadow-md  rounded outline-none focus:outline-none">Send Message</button>
                                </div>

                            </div>
                        </div>


                        {/* Recently Viewed */}
                        <div className=" pt-12">


                            {/* carts */}
                            <div className="pt-6 space-y-4 grid grid-cols-1 sm:grid-cols-1">

                                <div>
                                    <h2 className=" pb-7 text-lg sm:text-xl xl:text-xl font-bold text-color5">Recently Viewed</h2>
                                    {/* advertisement */}
                                    <div className="">
                                        <img className="w-full shadow-lg border " src="HomePage5/new/image 17.svg" />
                                    </div>
                                </div>

                                {/* cart */}
                                <div className=" md:cursor-pointer">
                                    <div className="">
                                        <div className="">
                                            <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2681.svg" />
                                        </div>
                                        <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-medium bg-color1">
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

                                {/* cart */}
                                <div className=" md:cursor-pointer">
                                    <div className="">
                                        <div className="">
                                            <img className="  rounded-t-sm md:rounded-t-md w-full" src="HomePage5/Rectangle 2823.svg" />
                                        </div>
                                        <div className="relative  -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 2xl:py-2.5 rounded text-white font-medium bg-color1">
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


                            </div>

                        </div>



                    </div>




                </div>


            </div>
        </div>
    )
}

export default OverviewSiteForSale;