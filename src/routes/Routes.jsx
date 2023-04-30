import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";

const router=createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children:[
        {
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
    {
        path:'/services',
        element:<ServicesLayout></ServicesLayout>,
        children:[
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:":id",
                element:<ServiceDetails></ServiceDetails>
            }
        ]
    },
   
  ]);
  export default router;