import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import CityDetail from "../pages/CityDetail";
import SignIn from "../pages/SignIn";
import SingUp from "../components/SignUp"
import ProtectedRoute from "./ProtectedRoute";

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
                element: (<ProtectedRoute path='/'>
                            <SignIn />
                        </ProtectedRoute>)
            },
            {
                path: '/cities/:id',
                element: <CityDetail/>
            },
            {
                path: '/signup',
                element: <SingUp />
            },
            {
                path: '/404',
                element: <h1 className="text-3xl">Error 404 NOT FOUND!</h1>
            }
        ],
    },
])

export default router;