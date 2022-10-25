import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'
import {BsFillMoonFill,BsSunFill} from 'react-icons/bs'
import { onAuthStateChanged , signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [visible , setVisible] = useState(false)
    const [active , setActive] = useState(false)
    const [user , setUser] = useState({})

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
       
        }
      });

   },[user.uid])
   const handeleSignout = ()=> {
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
   }
  
    return (
        <div className='py-4 shadow bg-blue-500'>
               <div className='container mx-auto px-2 '>
                    <div className='flex justify-between items-center'>
                            <div>
                            <img className='w-24' src="https://edukite.org/wp-content/uploads/2018/06/edukite-logo-WHT.png" alt="" />
                            </div>
                            <div className='hidden lg:block'>
                                <ul className='flex gap-6 items-center text-xl'>
                                    <li><Link to={'/courses'}>Courses</Link></li>
                                    <li><Link to={'faq'}>Faq</Link></li>
                                    <li><Link to={'/blog'}>Blog</Link></li>
                                    <li className='w-8 h-8 flex justify-center items-center bg-red-100 rounded-full' onClick={()=>setActive(!active)}>
                                        {

                                            active ? <BsFillMoonFill/> : <BsSunFill/>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-3 items-center'>
                              {
                                user.uid
                                ? 
                                <div className='flex gap-2 items-center'>
                                    <img title={user.displayName} className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" />
                                    <ReactTooltip id="custom-off-event" />
                                    <button onClick={()=>handeleSignout()} className='bg-gray-500 font-bold text-white h-10 min-w-max p-1 rounded-lg'>Log Out</button>
                                </div>
                                :
                                <div>
                                     <Link to='/login'> <button className='px-4 py-2 rounded-md bg-gray-600 text-white border'>Login</button></Link>

<Link to='/register'> <button className='px-4 py-2 rounded-md bg-blue-600 text-white border'>Register</button></Link>
                                </div>
                              }
                               <div className='lg:hidden'>
                                {
                                    visible ?  <ImCross onClick={()=>setVisible(!visible)} className='text-3xl cursor-pointer '/> :   <HiMenu onClick={()=>setVisible(!visible)} className='text-2xl cursor-pointer'/>
                                }
                              
                               </div>
                            </div>
                    </div>
               </div>
               {
                visible &&
                <div className='h-[100vh] z-50 w-[350px] bg-gray-300 lg:hidden absolute mt-[19px] right-0 duration-300'> 
                    <ul className=' '>
                                    <li className='text-xl block py-3 hover:bg-gray-800 duration-500 hover:text-white mb-2 pl-2'><Link to={'/courses'}>Courses</Link></li>

                                    <li  className='text-xl block py-3 hover:bg-gray-800 duration-500 hover:text-white mb-2 pl-2'><Link to={'faq'}>Faq</Link></li>
                                    <li  className='text-xl block py-3 hover:bg-gray-800 duration-500 hover:text-white mb-2 pl-2'><Link to={'/blog'}>Blog</Link></li>
                                    <li className='inline-block pl-2'><button className='px-2 py-2 bg-gray-600 text-white'>Dark</button></li>
                                </ul>
               </div> 
               }
            
        </div>
    );
};

export default Header;