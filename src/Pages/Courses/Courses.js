import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/Child/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
  
    return (
        <div className='p-2 '>
           <div className='container mx-auto  rounded-md p-2 lg:grid grid-cols-12 mt-4'>
            <div className='col-span-3  p-2'>
                <ul>
                    
                    {
                        courses.map(course =><Link to={`/course/${course?.id}`}><li className='block mb-2 border p-4 hover:bg-blue-400 hover:text-white duration-300 '>
                        {course.courseTitle}
                     </li> </Link>)
                    }
                </ul>
            </div>
            <div className='col-span-9  p-2'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center'>
               {
                courses?.map(course => <CourseCard key={course.id} course={course} />)
               }
                </div>
            </div>


           </div>
        </div>
    );
};

export default Courses;