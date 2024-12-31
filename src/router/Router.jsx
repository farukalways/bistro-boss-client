import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/mainHome/home/Home";
import Menu from "../page/mainMenu/menu/Menu";
import Order from "../page/mainOrder/Order/Order";


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
            }
        ]
    }
]
)
export default router;