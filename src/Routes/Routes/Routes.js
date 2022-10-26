import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element: <Courses/>,
              },
            {
                path: "/courses",
                element: <Courses/>,
              },
            {
                path: "/course/:id",
                element: <CourseDetails/>,
              },
                
            {
                path: "/login",
                element: <Login/>,
              },
            {
                path: "/register",
                element: <Registration/>,
              },
                
           
        ]
    }
])