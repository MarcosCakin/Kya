import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import Login from "../pages/Login";
import CityDetail from "../pages/CityDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/cities/:id',
                element: <CityDetail/>
            },
            // {
            //     path: '/Signin',
            //     element: <Login />
            // },
        ],
    },
])

export default router;
// []