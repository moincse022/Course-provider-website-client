import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/classes',
        element:<Classes/>
      },
    {
      path:'/instructors',
      element:<Instructors/>
    },
    {
      path:'/login',
      element:<Login/>  
    },{
      path:'/register',
      element:<Register/>

    }
    ]
  },
]);
export default router;
