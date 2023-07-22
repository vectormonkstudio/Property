import React from "react";

const AddNewProperty2 = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-10 py-4">

            <div>
                <h1 className="pt-4 pb-8 2xl:pb-16 text-2xl 2xl:text-3xl font-bold text-color5">Add New Property</h1>
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase 2xl:text-xl font-semibold text-color5">For Sale</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Group 9494.svg" />
                    </div>
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase text-sm xl:text-base 2xl:text-xl font-semibold text-color5">For rent</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Vector.svg" />
                    </div>
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase text-sm xl:text-base 2xl:text-xl font-semibold text-color5">sharing</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Group 8934.svg" />
                    </div>
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase text-sm xl:text-base 2xl:text-xl font-semibold text-color5">holiday hOUSE</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Vector (1).svg" />
                    </div>
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase text-sm xl:text-base 2xl:text-xl font-semibold text-color5">commercial</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Vector (2).svg" />
                    </div>
                    <div className="flex justify-center py-6 2xl:py-12 space-x-8 2xl:space-x-24 shadow-md hover:shadow-xl duration-200 border rounded-lg cursor-pointer">
                        <h2 className="my-auto uppercase text-sm xl:text-base 2xl:text-xl font-semibold text-color5">Parking</h2>
                        <img className="w-1/5 2xl:w-max" src="AddNewProperty/Vector (3).svg" />
                    </div>
                </div>
            </div>


            <div className="pt-11">
                <h1 className="pt-4 pb-8 2xl:pb-16 text-2xl 2xl:text-3xl font-bold text-color5">Type</h1>

                <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full md:w-1/2 flex justify-center items-center ">
                        <div className="bg-cover bg-center rounded-lg w-full" style={{ backgroundImage: "url('AddNewProperty/Rectangle 2632.svg')", }}>
                            <div className="p-14 sm:p-10 lg:p-16 xl:p-20 2xl:p-28 bg-color5 bg-opacity-70 rounded-lg">
                                <h2 className="text-xl sm:text-base md:text-xl xl:text-3xl text-center text-white font-semibold ">Apartment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center ">
                        <div className="bg-cover bg-center rounded-lg w-full" style={{ backgroundImage: "url('AddNewProperty/Rectangle 2680.svg')", }}>
                            <div className="p-14 sm:p-10 lg:p-16 xl:p-20 2xl:p-28 bg-color5 bg-opacity-70 rounded-lg">
                                <h2 className="text-xl sm:text-base md:text-xl xl:text-3xl text-center text-white font-semibold ">Townhouse</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center ">
                        <div className="bg-cover bg-center rounded-lg w-full" style={{ backgroundImage: "url('AddNewProperty/Rectangle 2681.svg')", }}>
                            <div className="p-14 sm:p-10 lg:p-16 xl:p-20 2xl:p-28 bg-color5 bg-opacity-70 rounded-lg">
                                <h2 className="text-xl sm:text-base md:text-xl xl:text-3xl text-center text-white font-semibold ">House</h2>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>






        </div>
    )
}

export default AddNewProperty2;
