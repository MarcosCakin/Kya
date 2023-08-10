import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import Main from "../layouts/Main";

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
                path: '/Cities',
                element: <Cities />
            },
            // {
            //     path: '/Login',
            //     element: <Login />
            // },
        ],
    },
])

export default router;
// []