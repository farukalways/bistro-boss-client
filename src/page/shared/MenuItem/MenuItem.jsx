import PropTypes from "prop-types";

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[120px]"  alt="" />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    recipe: PropTypes.string,
};

export default MenuItem;