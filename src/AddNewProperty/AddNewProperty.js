import React from "react";

const AddNewProperty = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-10 py-4 ">

            <div className=" space-y-6">
                {/* Add New Property */}
                <div className="px-6 pb-10 2xl:pb-14 shadow-lg border rounded-lg">
                    <h1 className="pt-4 pb-8 2xl:pb-12 text-2xl 2xl:text-3xl font-bold text-color5">Add New Property</h1>
                    <div>
                        <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-base 2xl:text-xl">Add Title </h3>
                        <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 rounded outline-none focus:outline-none" placeholder="Import your add title" />
                    </div>

                    <div className="flex space-x-4">
                        <div className=" pt-12 space-y-4 w-full">
                            <h1 className="2xl:text-xl my-auto text-color5 font-semibold">Category</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-2 2xl:py-4 px-5 rounded outline-none  border-color5 border-opacity-30" >
                                <h2 className="text-color5 text-opacity-70">Commercial </h2>
                                <img className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 my-auto" src="HomePage5/Polygon 1.svg" />
                            </section>
                        </div>
                        <div className=" pt-12 space-y-4 w-full">
                            <h1 className="2xl:text-xl my-auto text-color5 font-semibold">Type</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-2 2xl:py-4 px-5 rounded outline-none  border-color5 border-opacity-30" >
                                <h2 className="text-color5 text-opacity-70">Office </h2>
                                <img className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 my-auto" src="HomePage5/Polygon 1.svg" />
                            </section>
                        </div>
                        <div className=" pt-12 space-y-4 w-full">
                            <h1 className="2xl:text-xl my-auto text-color5 font-semibold">Rent</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-2 2xl:py-4 px-5 rounded outline-none  border-color5 border-opacity-30" >
                                <h2 className="text-color5 text-opacity-70">15,000 </h2>
                            </section>
                        </div>
                    </div>
                </div>


                <div className="px-6 pb-10 2xl:pb-10 shadow-lg border rounded-lg">
                    {/*Description TextArea */}
                    <div className="pt-6 ">
                        <h1 className="lg:text-xl pb-4 font-medium text-color5">Description</h1>
                        <textarea id="message" rows="4" class="block p-2.5 w-full h-44 2xl:h-96 text-sm text-color5 border-color5 border-2 border-opacity-30  rounded-lg outline-none" ></textarea>
                    </div>
                    {/* Property Image */}
                    <div>
                        <h1 className="pt-6 pb-10 lg:text-xl font-semibold text-color5">Property Image</h1>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-2 md:gap-6">
                            <div>
                                <div className="flex justify-end ">
                                    <img className=" w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                                </div>
                                <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2851.svg" />
                            </div>
                            <div>
                                <div className="flex justify-end ">
                                    <img className="w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                                </div>
                                <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2852.svg" />
                            </div>
                            <div>
                                <div className="flex justify-end ">
                                    <img className="w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                                </div>
                                <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2853.svg" />
                            </div>
                        </div>
                        {/* Uplode File */}
                        <div className="mt-7 border-2 border-color5 border-opacity-30 rounded-lg">
                            <div className="p-5 2xl:px-7 2xl:py-9 flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 rounded cursor-pointer bg-color5 bg-opacity-10 hover:bg-opacity-5">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-gray-400 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className=" px-6 pb-10 2xl:pb-14 shadow-lg border rounded-lg">
                    <h1 className="pt-6 pb-8 2xl:pb-12 text-xl 2xl:text-2xl font-bold text-color5">Property Details</h1>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Bedrooms</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="8" />
                        </div>
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Bathrooms</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="5" />
                        </div>
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Property Size</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="200 sft" />
                        </div>
                    </div>
                    <div className="flex space-x-4 pt-10 2xl:pt-14">
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Parking Space</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="2" />
                        </div>
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Property Status</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="For Sale" />
                        </div>
                        <div className="w-full">
                            <h3 className="pb-2 2xl:pb-4 text-color5 font-semibold text-sm 2xl:text-lg">Property Price</h3>
                            <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 rounded outline-none focus:outline-none" placeholder="15,000" />
                        </div>
                    </div>
                </div>


                {/* Location */}
                <div className=" px-6 pb-10 2xl:pb-14 shadow-lg border rounded-lg">
                    <h1 className="pt-6 pb-8 2xl:pb-12 text-xl 2xl:text-2xl font-bold text-color5">Location</h1>

                    <div className="flex space-x-4">
                        <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 placeholder-opacity-50 rounded outline-none focus:outline-none" placeholder="Import Location" />
                        <input className="w-full py-2.5 2xl:py-4 px-5 border-2 border-color5 border-opacity-30 placeholder-color5 placeholder-opacity-50 rounded outline-none focus:outline-none" placeholder="Postal code" />
                    </div>
                    <div className="pt-10 2xl:pt-12">
                        <img className="rounded-lg w-full" src="ProductDetails01/image 4.svg" />
                    </div>
                </div>



                {/* Facts and Features */}
                <div className="py-4 px-7 2xl:pl-7 2xl:pr-20 mt-6 shadow-md rounded-lg border">
                    <h2 className="pt-6 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Facts and Features</h2>

                    <div className="pb-10 flex  justify-between">
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Garden / Patio / Balcony</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Cleaning Service</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Dryer</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Parking</h2>
                            </div>

                        </div>
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Dining Room</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Elevator</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Fireplace</h2>
                            </div>

                        </div>
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Hardwood Flows</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Pets Allowed</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Unit Washer/Dryer</h2>
                            </div>

                        </div>
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Central Heating</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Dishwasher</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Gym</h2>
                            </div>

                        </div>
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Doorman</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Cable Television</h2>
                            </div>
                            <div className="flex space-x-3 2xl:space-x-7">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 2xl:w-5 2xl:h-5 my-auto bg-color5 checked:bg-color1  " required="" />
                                <h2 className="text-sm 2xl:text-lg">Balcony</h2>
                            </div>

                        </div>









                    </div>
                </div>

                {/* Property video */}
                <div className="py-4 px-7 pb-10 2xl:px-7 mt-6 shadow-md rounded-lg border">
                    <h1 className="pt-6 pb-10 lg:text-xl font-semibold text-color5">Property video</h1>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-2 md:gap-6">
                        <div>
                            <div className="flex justify-end ">
                                <img className=" w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                            </div>
                            <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2851.svg" />
                        </div>
                        <div>
                            <div className="flex justify-end ">
                                <img className="w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                            </div>
                            <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2852.svg" />
                        </div>
                        <div>
                            <div className="flex justify-end ">
                                <img className="w-7 h-7 md:w-9 md:h-9 relative mr-3 cursor-pointer hover:opacity-40 " src="AddNewProperty/deleted.svg" />
                            </div>
                            <img className="w-full h-full rounded-lg -mt-9 md:-mt-11" src="AddNewProperty/Rectangle 2853.svg" />
                        </div>
                    </div>

                    {/* Uplode File */}
                    <div className="mt-7 border-2 border-color5 border-opacity-30 rounded-lg">
                        <div className="p-5 2xl:px-7 2xl:py-9 flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 rounded cursor-pointer bg-color5 bg-opacity-10 hover:bg-opacity-5">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-gray-400 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Publish */}
                    <div className="flex justify-end pt-10 2xl:pt-14">
                        <button className="text-white py-2 2xl:py-3 px-14 font-bold rounded bg-color1 hover:bg-white hover:text-color1 hover:shadow-md"> Publish</button>
                    </div>

                </div>





            </div>





        </div>
    )
}

export default AddNewProperty;
