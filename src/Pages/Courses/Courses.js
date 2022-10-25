import React from 'react';

const Courses = () => {
    return (
        <div className='p-2 '>
           <div className='container mx-auto  rounded-md p-2 grid grid-cols-12'>
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
            <div className='col-span-9 border p-2'>
                Main
            </div>


           </div>
        </div>
    );
};

export default Courses;