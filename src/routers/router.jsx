import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/classes',
        element:<Classes/>
      },
    {
      path:'/instructors',
      element:<Instructors/>
    }
    ]
  },
]);
export default router;
