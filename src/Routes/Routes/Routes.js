import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Erorpage from "../../Pages/ErrorPage/Erorpage";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Registration from "../../Pages/Registration/Registration";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element: <Courses/>,
                loader: () => fetch('http://localhost:5000/api/allcourses/')
              },
            {
                path: "/courses",
                element: <Courses/>,
                loader: () => fetch('http://localhost:5000/api/allcourses/')
              },
            {
                path: "/blog",
                element: <Blog/>,    
              },
            {
                path: "/course/:id",
                element: <CourseDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/api/course/${params.id}`)
              },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout/></PrivateRoute> ,
              },
                
            {
                path: "/faq",
                element: <Faq/>,
              },
            {
                path: "/login",
                element: <Login/>,
              },
            {
                path: "/register",
                element: <Registration/>,
              },
            {
                path: "*",
                element: <Erorpage/>,
              },
                
           
        ]
    }
])