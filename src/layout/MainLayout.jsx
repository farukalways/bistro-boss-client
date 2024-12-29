import { Outlet } from "react-router-dom";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <div className="min-h-[60vh]">
           <Outlet/>
           </div>
           <Footer/> 
        </div>
    );
};

export default MainLayout;