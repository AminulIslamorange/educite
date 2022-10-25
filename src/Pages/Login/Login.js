import React from 'react';
import { Link } from 'react-router-dom';
import {BsGithub} from 'react-icons/bs'
import SocialSignin from '../../components/Child/SocialSignin';
const Login = () => {
    return (
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Edukite</h1>

    <form class="mt-6">
        <div>
            <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>

        <div class="mt-4">
            <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <Link to="#" class="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
            </div>

            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div class="mt-6">
            <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
            </button>
        </div>
    </form>

    <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <Link to="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
        </Link>

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>
{/* SocialSignin */}
    <SocialSignin/>

    <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
</div>
    );
};

export default Login;