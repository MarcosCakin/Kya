import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import CityDetail from "../pages/CityDetail";
import SignIn from "../pages/SignIn";
import SingUp from "../components/SignUp"

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
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/cities/:id',
                element: <CityDetail/>
            },
            {
                path: '/signup',
                element: <SingUp />
            }
        ],
    },
])

export default router;