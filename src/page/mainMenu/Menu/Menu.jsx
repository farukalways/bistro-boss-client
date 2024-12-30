import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.png";
import PopulerManue from "../../mainHome/populerManue/PopulerManue";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu'></Cover>
            <PopulerManue></PopulerManue>

            <Cover img={menuImg} title='Our menu'></Cover>
            <PopulerManue></PopulerManue>

            <Cover img={menuImg} title='Our menu'></Cover>
            <PopulerManue></PopulerManue>
            
            <Cover img={menuImg} title='Our menu'></Cover>
            <PopulerManue></PopulerManue>
        </div>
    );
};

export default Menu;