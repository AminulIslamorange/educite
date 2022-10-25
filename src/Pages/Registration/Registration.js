import React from 'react';
import { Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword  , updateProfile  } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import SocialSignin from '../../components/Child/SocialSignin';

const Registration = () => {
    const handleRegister =(event)=>{
        event.preventDefault();
        let fullName = event.target[0].value
        let photourl = event.target[1].value
        let email = event.target[2].value
        let password = event.target[3].value
        let confirmpassword = event.target[4].value
        if (password === confirmpassword) {
            createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    updateProfile(auth.currentUser, {
        displayName: fullName , photoURL: photourl
      }).then(() => {
        // Profile updated!
        console.log("profile Updated" , user);
        event.target.reset()
        // ...
      }).catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

        }else{
            event.target[4].value= ''
        }
        
       
       
    }
    return (
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Edukite</h1>
    
        <form onSubmit={(event)=> handleRegister(event)} className="mt-6">
            <div>
                <label htmlFor="fullname" className="block text-sm text-gray-800 dark:text-gray-200">Full Name</label>
                <input name='fullname' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div className='mt-4'>
                <label htmlFor="photoUrl" className="block text-sm text-gray-800 dark:text-gray-200">Photo Url</label>
                <input name='photourl'  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
            </div>
            <div className='mt-4'>
                <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input  name='email'  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
            </div>
    
            
            
            <div className="mt-4">
                    <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <input  name='password'  type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
            </div>
            <div className="mt-4">
                
                    <label htmlFor="confirmpassword" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
                <input name='confirmpassword' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
    
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Create  Account
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
    {/* Social Login */}
    <SocialSignin/>
    
        
        <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an Account? <Link to="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Log In</Link></p>
    </div>
    );
};

export default Registration;