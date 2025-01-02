import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login/Login";
import Register from "../page/Register";
import Home from "../page/mainHome/home/Home";
import Menu from "../page/mainMenu/menu/Menu";
import Order from "../page/mainOrder/Order/Order";
import PrivateRoute from "./PrivateRoute";
import Secret from "../page/shared/Secret/Secret";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order/:category',
                element: <Order/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    }
]
)
export default router;