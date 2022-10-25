import React from 'react';
import CourseCard from '../../components/Child/CourseCard';

const Courses = () => {
    return (
        <div className='p-2 '>
           <div className='container mx-auto  rounded-md p-2 lg:grid grid-cols-12 mt-4'>
            <div className='col-span-3  p-2'>
                <ul>
                    <li className='block mb-2 border p-4'>
                        Web Design
                    </li>
                    <li className='block mb-2 border p-4'>
                        Web Development
                    </li>
                    <li className='block mb-2 border p-4'>
                        Marketing
                    </li>
                    <li className='block mb-2 border p-4'>
                        Marketing
                    </li>
                    <li className='block mb-2 border p-4'>
                        Marketing
                    </li>
                    <li className='block mb-2 border p-4'>
                        Marketing
                    </li>
                </ul>
            </div>
            <div className='col-span-9  p-2'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center'>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                </div>
            </div>


           </div>
        </div>
    );
};

export default Courses;