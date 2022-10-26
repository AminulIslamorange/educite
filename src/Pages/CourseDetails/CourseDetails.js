import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaUserGraduate,FaBook } from "react-icons/fa"
import {RiTimeFill} from "react-icons/ri"
import ReactToPdf from "react-to-pdf"
const CourseDetails = () => {
    const ref = React.createRef();
    const course = useLoaderData();
    let {lectures,duration,students,image,description,courseTitle} = course
    
    return (
        <div className='container mx-auto px-2'>
            {/* div for header name and download button */}
            <div className='py-3 flex justify-between items-center bg-gray-100 px-2'>
                <div className="name">
                    <h2 className='text-xl font-bold text-gray-600'>{courseTitle}</h2>
                </div>
                <div className="btn">
                <ReactToPdf targetRef={ref} filename="coursedetails.pdf" options={course} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
          
            <button onClick={toPdf} className='px-3 py-2 rounded-md border hover:bg-blue-500 hover:text-white duration-300 '>Download</button>
        )}
    </ReactToPdf>
    
                   
                </div>
            </div>
            {/* Content */}
            <div className='lg:flex gap-6 flex-row-reverse p-2  '>
                  
                    <div className='lg:w-1/4 shadow max-h-max rounded-md p-2'>
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
                        <div className='p-2' ref={ref}>
                          {description}
                        </div>

                        </div>
            </div>
        </div>
    );
};

export default CourseDetails;