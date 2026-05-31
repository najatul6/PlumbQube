import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import BookingForm from "../components/plumbing/BookingForm";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";

const Router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {   
                index:true,
                path:'',
                Component:Home,
            },
            {
                path:'request-service',
                Component:BookingForm,
            },
            {
                path:'services',
                Component:Services,
            },
            {
                path:'about',
                Component:About,
            },
            {
                path:'contact',
                Component:Contact,
            }

        ]
    },
    {
        path:'*',
        Component:NotFound,
    },
    {
        path:"/dashboard",
        Component:DashboardLayout,
        children:[
            {
                index:true,
            }
        ]
    }
])

export default Router;