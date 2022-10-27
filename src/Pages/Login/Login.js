import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import SocialSignin from '../../components/Child/SocialSignin';


const Login = () => {

    const navigate = useNavigate();
    const handleLogin =(e) => {
        let email=e.target.email.value;
        let password=e.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    if (user) {
     
        navigate("/courses");
    }

  
  })
  .catch((error) => {
   console.log(error);
  });

        e.preventDefault()
    }
    return (
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Edukite</h1>

    <form onSubmit={(e)=> handleLogin(e)}  className="mt-6">
        <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input name='email'  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label  className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <Link to="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
            </div>

            <input name='password' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
        </div>

        <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <Link to="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
        </Link>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>
{/* SocialSignin */}
    <SocialSignin/>

    <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
</div>
    );
};

export default Login;