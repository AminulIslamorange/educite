import React from 'react';
import {FaUserGraduate} from "react-icons/fa"
import {RiTimeFill} from "react-icons/ri"
import { Link } from 'react-router-dom';
const CourseCard = ({course}) => {
    let {id,duration,students,image,description,courseTitle,category} = course
    
    return (
        <div className='w-[280px] border rounded-md p-2 hover:shadow-lg'>
            <div className=''>
                <img className='w-full' src={image} />
            </div>
            <div className='mt-2'>
                <h3 className='text-lg font-bold text-gray-700 '>{courseTitle}</h3>
                <h3 title={description} className='text-sm font-bold text-gray-700 mb-2'>{description.slice(0,70)}...</h3>
                {/* Category and duration, students */}
               <div className='flex justify-between items-center mb-2'>
               <span className='border border-green-700 px-4 py-1 rounded-full text-xs'>{category}</span>
               <div className=''>
                        <ul className='flex gap-6'>
                            <li className='flex gap-2 font-bold'> <RiTimeFill/> {duration}</li>
                            <li className='flex gap-2 font-bold'><FaUserGraduate/> {students}</li>
                        </ul>
               </div>
               </div>
               <div>
                <Link to={`/course/${id}`}>
                <button className='w-full py-2 text-lg bg-blue-500 text-white rounded-md '>Details</button></Link>
               </div>

             </div>
            
        </div>
    );
};

export default CourseCard;