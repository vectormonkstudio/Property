import React from "react";

const SignIn = ({ onScroll }) => {

    return (
        <div className="pt-24 sm:pt-28 md:pt-12 2xl:pt-16">

            <section class="">
                <div class="flex flex-col items-center justify-center xs:px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg sm:shadow-lg sm:border dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-10 md:space-y-6 sm:p-8">
                            <h1 class="sm:text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login in to your account</h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 outline-none text-gray-900 sm:text-sm rounded sm:rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " style={{ "border-width": "3px", "border-color": "#E0EFFE" }} placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Password</label>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-color1">Forgot?</a>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded sm:rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" class="w-full bg-color1 font-bold text-white hover:bg-white hover:text-color1 hover:shadow-lg rounded text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Login Now</button>
                                <p class="text-sm md:text-base text-center font-light text-gray-500 dark:text-gray-400">
                                    Don’t Have An Account? <a href="/SignUp" class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-color1">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>









        </div>
    )
}

export default SignIn;
