import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import CityDetail from "../pages/CityDetail";
import SignIn from "../pages/SignIn";
import SingUp from "../components/SignUp"
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/NotFound";

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
                element: <NotFound />
            }
        ],
    },
])

export default router;