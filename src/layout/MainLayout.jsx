import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/shared/Footer";


const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');
    return (
        <div>
           {!noHeaderFooter && <Navbar/>} 
           <div className="min-h-[60vh]">
           <Outlet/>
           </div>
           {!noHeaderFooter && <Footer/> }
          
        </div>
    );
};

export default MainLayout;