import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    let {id} = useParams();
    
    return (
        <div className='container mx-auto px-2'>
            {/* div for header name and dowunload button */}
            <div className='shadow py-3 flex justify-between items-center'>
                <div className="name">
                    <h2 className='text-xl font-bold text-gray-600'>Complete Web Development Course With Jhankar Bro</h2>
                </div>
                <div className="btn">
                    <button className='px-3 py-2 rounded-md border '>Download</button>
                </div>
            </div>
            {/* Content */}
            <div className='lg:flex p-2  '>
                    <div className='lg:w-3/4 e border p-2'>

                    </div>
                    <div className='lg:w-1/4 border p-2'>
                        <div className="img">
                            <img className='w-full' src="https://img-b.udemycdn.com/course/240x135/2508942_11d3_3.jpg" alt="" />
                        </div>

                    </div>
            </div>
        </div>
    );
};

export default CourseDetails;