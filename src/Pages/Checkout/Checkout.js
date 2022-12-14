import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';

import auth from '../../Firebase/Firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
const Checkout = () => {
    let {id} = useParams();
    const navigate = useNavigate();
   
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        navigate(`/checkout/${id}`)
       
        } else {
            navigate('/login')
        }
      });

   },[])
    return (
 
        <div className='container mx-auto px-2 min-h-screen'>
             <div className='py-3 '>
                <div className="name">
                    <h2 className='text-xl font-bold text-gray-600'>
                        Congratulations! You Got The Premiium access for <span className='text-blue-500'> Complete Web Development Course With Jhankar Bro</span> Course</h2>
                </div>
                
            </div>
        </div>
    );
};

export default Checkout;