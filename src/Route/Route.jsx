import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJob from "../Pages/AddJob/AddJob";
import MyJob from "../Pages/MyJob/MyJob";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "../Provider/PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-jobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/applied-jobs',
                element: <PrivateRouter>
                    <AppliedJobs></AppliedJobs>
                </PrivateRouter>
            },
            {
                path: '/add-job',
                element: <PrivateRouter>
                    <AddJob></AddJob>
                </PrivateRouter>
            },
            {
                path: '/my-jobs',
                element: <PrivateRouter>
                    <MyJob></MyJob>
                </PrivateRouter>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default Route;