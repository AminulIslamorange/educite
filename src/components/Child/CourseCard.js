import React from 'react';
import {FaUserGraduate} from "react-icons/fa"
import {RiTimeFill} from "react-icons/ri"
const CourseCard = () => {
    return (
        <div className='w-[280px] border rounded-md p-2 hover:shadow-lg'>
            <div className=''>
                <img className='w-full' src="https://img-b.udemycdn.com/course/240x135/2508942_11d3_3.jpg" alt="" />
            </div>
            <div className='mt-2'>
                <h3 className='text-lg font-bold text-gray-700 '>Javascript Mastary by Jhon Clive</h3>
                <h3 className='text-sm font-bold text-gray-700 mb-2'>javascript Mastary Course by json Smeet and his team.</h3>
                {/* Category and duration, students */}
               <div className='flex justify-between items-center mb-2'>
               <span className='border border-green-700 px-4 py-1 rounded-full text-xs'>Programming</span>
               <div className=''>
                        <ul className='flex gap-6'>
                            <li className='flex gap-2 font-bold'> <RiTimeFill/> 8</li>
                            <li className='flex gap-2 font-bold'><FaUserGraduate/> 9</li>
                        </ul>
               </div>
               </div>
               <div>
                <button className='w-full py-2 text-lg bg-blue-500 text-white rounded-md '>Details</button>
               </div>

             </div>
            
        </div>
    );
};

export default CourseCard;