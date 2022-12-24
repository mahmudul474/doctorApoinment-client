import Apoinments from "../Pages/Apoinments/Apoinments";
import Dahsbord from "../Pages/Dashbord/Dahsbord";
import Login from "../Pages/USers/Login";
import Register from "../Pages/USers/Register";
import PrivateRout from "./PrivateRout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layot/Main");
const { default: Home } = require("../Pages/Home/Home");



const router=createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
    
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/home",
            element:<Home></Home>
        },
        {
         path:"/login",
         element:<Login></Login>
         
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/apoinments",
            element:<Apoinments></Apoinments>
        },
        {
            path:"/dashboard",
            element:<PrivateRout><Dahsbord></Dahsbord></PrivateRout>
        }




        ]
    
    }
])



export default router