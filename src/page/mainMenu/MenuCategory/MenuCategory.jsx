/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-9">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-9 my-14">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item} ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline border-0 border-b-4 mt-0'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;