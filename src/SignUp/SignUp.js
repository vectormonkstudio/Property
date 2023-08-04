import React from "react";

const SignUp = ({ onScroll }) => {

    return (
        <div className="pt-28 sm:pt-28 md:pt-36 lg:20 2xl:pt-20">

            <section className="pb-20">
                <div className="flex flex-col items-center justify-center px-4 xs:px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg sm:shadow-lg sm:border dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="prounded-lg-6 space-y-8 md:space-y-6 sm:p-8">
                            <h1 className="sm:text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Creat an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 outline-none text-gray-900 sm:text-sm rounded sm:rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white " style={{ "color": "#5A5A5D" }}>Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded sm:rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <p className="text-xs" style={{ "color": "#5A5A5D" }}>To get the most from Bargaindigger, we’ll send you members-only updates via email, push notifications and on site messaging. You can update your preferences at any time from your Bargaindigger page.</p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300" style={{ "color": "#5A5A5D" }}>Yes, I agree</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="space-y-4">
                                <a href="/Cookise" type="submit" className="w-full font-bold text-white hover:bg-white bg-color1 hover:text-color1 hover:shadow-lg rounded text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none focus:outline-none" >Create Account</a>
                                <a href="/Cookise" type="submit" className="w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-bold rounded text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none " style={{ "background": "#E0EFFE", "color": "#007DFA" }}>
                                    <img className="w-6 my-auto" src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" />
                                    <h2 className="my-auto ml-3.5">Continue with Google</h2>
                                </a>
                                <a href="/Cookise" type="submit" className="w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-bold rounded text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none " style={{ "background": "#E0EFFE", "color": "#007DFA" }}>
                                    <img className="w-6 my-auto" src="facebook.svg" />
                                    <h2 className="my-auto ml-3.5">Continue with Facebook</h2>
                                </a>
                                <p className="text-sm md:text-base text-center font-light text-gray-500 dark:text-gray-400">
                                    Already Have An Account? <a href="/SignIn" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-color1">Log in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default SignUp;
