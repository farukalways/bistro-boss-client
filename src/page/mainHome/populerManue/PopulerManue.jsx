import { useEffect, useState } from "react";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopulerManue = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular');
                setMenu(populerItems)
            })
    }, [])
    return (
        <div>
            <section className="mb-12">
                <SectionTitle>
                    Heading={"From Our Manu"}
                    subHeading= {"Populer Items"}
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-9">
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item} ></MenuItem>)
                    }
                </div>
                <div className="w-full flex justify-center my-10">
                <button className='btn btn-outline '>View Full Menu</button>
                </div>
            </section>
        </div>
    );
};

export default PopulerManue;