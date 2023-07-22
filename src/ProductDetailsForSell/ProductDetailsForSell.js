import React from "react";

const ProductDetailsForSell = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-10 py-4 flex space-x-3 2xl:space-x-4">
            <div className=" w-full lg:w-3/4">


                <div className="py-4 px-4 shadow-md rounded-lg border">
                    <div className="pb-2  2xl::pb-5 pt-2 sm:flex  justify-between">
                        <h2 className="text-lg sm:text-2xl 2xl:text-3xl font-bold text-color5">Apartment in Hrvojeva 6 Split</h2>
                        <h2 className="text-lg sm:text-2xl 2xl:text-3xl font-bold text-color5"> €6000</h2>
                    </div>
                    <h3 className="pb-4 2xl:pb-10 text-sm sm:text-base 2xl:text-xl font-bold text-color5" >Weldon Mtwy, Newhall, CA 91321, USA</h3>
                    <div>
                        <div className="">
                            <img className="w-full rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 py-1 sm:py-2.5 gap-1 sm:gap-4 ">
                            <img className=" cursor-pointer rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                            <img className=" cursor-pointer rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                            <img className=" cursor-pointer rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                            <img className=" cursor-pointer rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                            <img className=" cursor-pointer rounded-md" src="ProductDetails01/Rectangle 2823.svg" />
                        </div>
                        <div className="pt-2 xl:py-4 2xl:py-6 flex flex-wrap gap-3 sm:space-x-3 md:space-x-10 2xl:space-x-16 text-color5">
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Vector.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">6 Bed</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-6 2xl:w-8 mr-1" src="HomePage5/Layer_1.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">3 Baths</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-5 2xl:w-8 mr-1" src="HomePage5/Group 8935.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">300sqft</h3>
                            </div>
                            <div className="text-sm flex space-x-1">
                                <img className="w-4 sm:w-5 2xl:w-8 mr-1" src="HomePage5/car.svg" />
                                <h3 className="text-sm sm:text-base 2xl:text-2xl">1 Parking</h3>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Overview */}
                <div className="py-4 px-4 2xl:px-7 mt-6 shadow-md rounded-lg border">
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




                {/* Property Details */}
                <div className="py-4 px-4 2xl:px-7 mt-6 shadow-md rounded-lg border">
                    <h2 className="pt-6 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Property Details</h2>
                    <div className="pb-5 flex justify-between">
                        <div className=" space-y-6 2xl:space-y-9">
                            <div className="flex space-x-20">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Price :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">Є15,000</h2>

                            </div>
                            <div className="flex space-x-6">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Property Size :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">1560 sft</h2>
                            </div>
                        </div>

                        <div className=" space-y-6 2xl:space-y-9">
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Bedrooms :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">6</h2>
                            </div>
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Bathrooms :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">6</h2>
                            </div>
                        </div>
                        <div className=" space-y-6 2xl:space-y-9">
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Year Built :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">15-12-2016</h2>
                            </div>
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Parking :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">2</h2>
                            </div>
                        </div>
                        <div className=" space-y-6 2xl:space-y-9">
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Property Type :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">Apartment</h2>
                            </div>
                            <div className="flex space-x-4">
                                <h2 className="text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium text-color5 my-auto">Property Status :</h2>
                                <h2 className="text-sm xl:text-base 2xl:text-lg font-semibold text-color1">For Sale</h2>
                            </div>
                        </div>


                    </div>
                </div>



                {/* Location */}
                <div className="py-4 px-4 2xl:px-7 mt-6 shadow-md rounded-lg border">

                    <div className="flex justify-between pt-6 pb-7">
                        <h2 className=" text-lg sm:text-xl xl:text-2xl font-bold text-color5">Location</h2>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 2xl:w-7 2xl:h-7 mt-0.5 text-color5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h2 className="ml-2 2xl:ml-6 text-lg sm:text-base 2xl:text-xl text-color5">Weldon Mtwy, Newhall, CA 91321, USA</h2>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-lg" src="ProductDetails01/image 4.svg" />
                    </div>
                </div>



                {/* Facts and Features */}
                <div className="py-4 px-4 2xl:px-7 mt-6 shadow-md rounded-lg border">
                    <h2 className="pt-6 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Facts and Features</h2>

                    <div className="pb-10 flex  justify-between">
                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Garden / Patio / Balcony</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Cleaning Service</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Car garage</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Doorman</h2>
                            </div>
                        </div>

                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Dining Room</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Elevator</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Fireplace</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Cable Television</h2>
                            </div>
                        </div>

                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Hardwood Flows</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Pets Allowed</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Unit Washer/Dryer</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Balcony</h2>
                            </div>
                        </div>

                        <div className="text-color5 space-y-8 2xl:space-y-12 font-medium">
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Central Heating</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Dishwasher</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Gym</h2>
                            </div>
                            <div className="flex space-x-2 2xl:space-x-7">
                                <img className="w-4 2xl:w-max" src="ProductDetails01/Group 9159.svg" />
                                <h2 className="text-sm 2xl:text-lg">Parking</h2>
                            </div>
                        </div>


                    </div>
                </div>



                {/* Property video */}
                <div className="py-4 px-4 2xl:px-7 mt-6 shadow-md rounded-lg border">

                    <h2 className="pt-6 pb-7 text-lg sm:text-xl xl:text-2xl font-bold text-color5">Property video</h2>

                    <div>
                        <img className="rounded-lg" src="ProductDetails01/Group 9413.svg" />
                    </div>
                </div>


                {/* Reviews 56 */}
                <div className=" mt-6 shadow-md rounded-lg border">

                    <div className="flex pt-6 px-4 2xl:px-7 text-lg ">
                        <h2 className="sm:text-xl xl:text-2xl font-bold text-color5">Reviews 56</h2>
                        {/* Reviews */}
                        <div className="ml-6 flex space-x-2 2xl:space-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8 my-auto">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8 my-auto">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8 my-auto">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8 my-auto">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color11 my-auto">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Review cart */}
                    <div className="">
                        {/* Review cart */}
                        <div className="flex pt-12 pb-11 px-4 2xl:px-7 space-x-6 border-b border-color5  border-opacity-10">
                            <div className="w-max">
                                <img className="xl:w-28 2xl:w-32" src="ProductDetails01/Ellipse 176.svg" />
                            </div>
                            <div className="w-full ">
                                <div className="flex">
                                    <h2 className="2xl:w-52 text-xl 2xl:text-2xl font-bold text-color5 ">Dalmar Johnson </h2>
                                    {/* Reviews */}
                                    <div className="ml-6 mt-1.5 2xl:mt-1 flex space-x-2 2xl:space-x-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className=" pt-4 2xl:pt-6 space-y-4 2xl:space-y-9">
                                    <h2 className="text-base 2xl:text-xl text-color5">December 21, 2022</h2>
                                    <h2 className="text-sm 2xl:text-lg text-color5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper vulputate velit a tincidunt. Pellentesque quis semper justo. Cras at libero eget eros tristique dignissim eu nec ante. Curabitur euismod ultrices pharetra. Aliquam ligula tellus, tincidunt vitae porttitor sed, maximus ac enim. Nam luctus ac orci ut euismod</h2>
                                </div>
                            </div>
                        </div>


                        {/* Review cart */}
                        <div className="flex pt-12 pb-11 px-4 2xl:px-7 space-x-6 border-b border-color5  border-opacity-10">
                            <div className="w-max">
                                <img className="xl:w-28 2xl:w-32" src="ProductDetails01/Ellipse 176.svg" />
                            </div>
                            <div className="w-full ">
                                <div className="flex">
                                    <h2 className="2xl:w-52 text-xl 2xl:text-2xl font-bold text-color5">Nick Swift </h2>
                                    {/* Reviews */}
                                    <div className="ml-6 mt-1.5 2xl:mt-1 flex space-x-2 2xl:space-x-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className=" pt-4 2xl:pt-6 space-y-4 2xl:space-y-9">
                                    <h2 className="text-base 2xl:text-xl text-color5">December 21, 2022</h2>
                                    <h2 className="text-sm 2xl:text-lg text-color5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper vulputate velit a tincidunt. Pellentesque quis semper justo. Cras at libero eget eros tristique dignissim eu nec ante. Curabitur euismod ultrices pharetra. Aliquam ligula tellus, tincidunt vitae porttitor sed, maximus ac enim. Nam luctus ac orci ut euismod</h2>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="pt-12 pb-11 px-4 2xl:px-7 space-y-3 2xl:space-y-6">
                            <h2 className="2xl:w-52 text-xl 2xl:text-2xl font-bold text-color5 ">Dalmar Johnson </h2>
                            {/* Reviews */}
                            <div className="flex ">
                                <div className="flex space-x-2 2xl:space-x-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 2xl:w-6 2xl:h-6 text-color8">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-sm 2xl:text-base text-color5 ml-10">Your Rating & Review</h2>
                            </div>

                            {/*Review TextArea */}
                            <div className="pt-12 pb-8 2xl:pb-10">
                                <h1 className="lg:text-xl pb-4 font-medium text-color5">Review</h1>
                                <textarea id="message" rows="4" class="block p-2.5 w-full h-44 2xl:h-80 text-sm text-color5 border-color5 border border-opacity-30  rounded-lg outline-none" placeholder=""></textarea>
                            </div>

                            <button className="text-white font-bold bg-color1 rounded py-3 px-10 2xl:px-12 outline-none focus:outline-none hover:text-color1 hover:bg-white hover:shadow-md">submit Now</button>

                        </div>
                    </div>













                </div>


















            </div>







            <div className="w-1/4 hidden lg:block">
                {/* Post By */}
                <div className="shadow-xl rounded-lg bg-color5">
                    <h2 className="text-white text-xl font-bold py-6 2xl:pt-16 px-7 border-b border-white border-opacity-30" >Posted By</h2>
                    <div className="pt-9 pb-5 text-center border-b border-white border-opacity-30">
                        <img className="w-32 h-32 object-cover rounded-full mx-auto" src="ProductDetails01/Ellipse 127.png" />
                        <h3 className="text-xl font-medium pt-2 text-color8">Robert Mclean</h3>
                        <h3 className="text-sm 2xl:text-lg font-light text-white ">Independent Dealer</h3>
                        <h3 className="text-sm 2xl:text-lg font-light text-white pb-3">Member Since November 2015</h3>
                        <button className="text-white focus:outline-none text-sm text-center font-medium bg-color2 hover:text-color2 hover:bg-white py-2 px-6 rounded" >See all ads</button>
                    </div>
                    <div className="px-4 xl:px-7 pb-5 space-y-4 border-b border-white border-opacity-30">
                        <h2 className="text-white  xl:text-xl font-bold pt-6 " >Contact info</h2>

                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/call.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">012345678</h3>
                        </div>
                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/gmail.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">Robert456@gmail.com</h3>
                        </div>
                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/location.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">Dublin,Ireland</h3>
                        </div>
                    </div>

                    <div className="py-6 border-b cursor-pointer border-white border-opacity-30">
                        <h2 className="text-white font-bold text-center text-sm xl:text-base 2xl:text-xl hover:underline">View all Properties</h2>
                    </div>

                    <div className="flex flex-wrap gap-4 px-7 pb-16 py-6">
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color4 hover:bg-opacity-70">
                            <img className="my-auto mt-1 mr-2" src="ProductDetails01/Group.svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Chat</h2>
                        </button>
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color1 hover:bg-opacity-70 ">
                            <img className="my-auto mr-2" src="ProductDetails01/Group (1).svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Contact Me</h2>
                        </button>
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color1 hover:bg-opacity-70 ">
                            <img className="my-auto mr-2" src="ProductDetails01/Vector.svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Share</h2>
                        </button>
                    </div>
                </div>


                <div className="pt-12">
                    <h2 className=" 2xl:w-52 text-lg 2xl:text-xl font-bold text-color5 ">Dalmar Johnson </h2>

                    <div className="pt-6 space-y-4">

                        {/* Carts 01 */}
                        <div className=" cursor-pointer">
                            <div className="">
                                <div className="">
                                    <img className="rounded-t-md w-full" src="HomePage5/Rectangle 2656.svg" />
                                </div>
                                <div className="flex absolute -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">
                                    <h2 className="text-base">$2,8000</h2>
                                    <h4 className=" mt-2 ml-0.5" style={{ "font-size": "10px" }}>Per Month</h4>
                                </div>
                            </div>
                            <div className=" pl-4 space-y-4 pt-4  pr-3 shadow-md rounded-b-md">
                                <div>
                                    <h2 className="text-xl font-bold text-color5">Double Room , Shared Bathroom </h2>
                                    <h2 className="text-sm text-color5">Blessington Street, Phibsborough, Dublin 7</h2>
                                </div>
                                <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Vector.svg" />
                                        <h3>6 Bed</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Layer_1.svg" />
                                        <h3>3 Baths</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Group 8935.svg" />
                                        <h3>300sqft</h3>
                                    </div>
                                </div>
                                <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                    <div className="text-color5 text-sm my-auto">For Buy</div>
                                    <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <img src="Buy/Group 9006.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Carts 01 */}
                        <div className=" cursor-pointer">
                            <div className="">
                                <div className="">
                                    <img className="rounded-t-md w-full" src="HomePage5/Rectangle 2656.svg" />
                                </div>
                                <div className="flex absolute -mt-14 ml-4 2xl:-mt-16 2xl:ml-6 w-max px-3 py-1.5 rounded text-white font-bold bg-color1">
                                    <h2 className="text-base">$2,8000</h2>
                                    <h4 className=" mt-2 ml-0.5" style={{ "font-size": "10px" }}>Per Month</h4>
                                </div>
                            </div>
                            <div className=" pl-4 space-y-4 pt-4  pr-3 shadow-md rounded-b-md">
                                <div>
                                    <h2 className="text-xl font-bold text-color5">Double Room , Shared Bathroom </h2>
                                    <h2 className="text-sm text-color5">Blessington Street, Phibsborough, Dublin 7</h2>
                                </div>
                                <div className="flex flex-wrap space-x-3 md:space-x-4 text-color5">
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Vector.svg" />
                                        <h3>6 Bed</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Layer_1.svg" />
                                        <h3>3 Baths</h3>
                                    </div>
                                    <div className="text-sm flex space-x-1">
                                        <img className=" mr-1" src="HomePage5/Group 8935.svg" />
                                        <h3>300sqft</h3>
                                    </div>
                                </div>
                                <div className=" flex justify-between py-2 border-t border-color5 border-opacity-30">
                                    <div className="text-color5 text-sm my-auto">For Buy</div>
                                    <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-color5 hover:text-white hover:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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

export default ProductDetailsForSell;