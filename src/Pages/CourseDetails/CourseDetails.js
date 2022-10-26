import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaUserGraduate,FaBook } from "react-icons/fa"
import {RiTimeFill} from "react-icons/ri"
import { useEffect } from 'react';
const CourseDetails = () => {
    const course = useLoaderData();
    let {lectures,id,duration,students,image,description,courseTitle,category} = course
    
    return (
        <div className='container mx-auto px-2'>
            {/* div for header name and dowunload button */}
            <div className='py-3 flex justify-between items-center'>
                <div className="name">
                    <h2 className='text-xl font-bold text-gray-600'>{courseTitle}</h2>
                </div>
                <div className="btn">
                    <button className='px-3 py-2 rounded-md border '>Download</button>
                </div>
            </div>
            {/* Content */}
            <div className='lg:flex gap-6 flex-row-reverse p-2  '>
                  
                    <div className='lg:w-1/4 shadow max-h-[360px] rounded-md p-2'>
                        <div className="img">
                            <img className='w-full mb-2' src={image} alt="" />
                        </div>
                        <div>
                        <ul className=''>
                            <li className='flex gap-2 font-bold border-b py-2'> <RiTimeFill/> {duration} Hours Duration</li>
                            <li className='flex gap-2 font-bold border-b py-2'><FaUserGraduate/> {students} Students Enrolled</li>
                            <li className='flex gap-2 font-bold border-b py-2'><FaBook/> {lectures}+ Lectures</li>
                        </ul>
                        </div>
                        <div>
                            <Link to={`/checkout/${course.id}`} ><button className='min-w-max py-2 bg-blue-500 text-white rounded-lg my-2 px-2 '>Get Premium Access</button></Link>
                        </div>

                    </div>
                    <div className='lg:w-3/4  shadow rounded-md p-2'>
                        <div className='p-2'>
                          {description}
                        </div>

                        </div>
            </div>
        </div>
    );
};

export default CourseDetails;