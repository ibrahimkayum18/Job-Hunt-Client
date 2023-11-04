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


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
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
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/add-job',
                element: <AddJob></AddJob>
            },
            {
                path: '/my-jobs',
                element: <MyJob></MyJob>
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