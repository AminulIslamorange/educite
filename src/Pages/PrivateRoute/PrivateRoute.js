import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
function RequireAuth({ children }) {
  
    let location = useLocation();
    const [user , setUser] = useState({})
    
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)

        } else {
       
        }
      });

   },[])

 if (!user.uid) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;