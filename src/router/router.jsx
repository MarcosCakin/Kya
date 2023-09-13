import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import CityDetail from "../pages/CityDetail";
import SignIn from "../pages/SignIn";
import SignUp from "../components/SignUp"
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
                path: '/cities/:id',
                element: <CityDetail/>
            },
            {
                path: '/signin',
                element: (<ProtectedRoute path='/'>
                            <SignIn />
                        </ProtectedRoute>)
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/404',
                element: <NotFound />
            }
        ],
    },
])

export default router;