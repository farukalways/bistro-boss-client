import { useEffect, useState } from "react";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerManue = () => {
    const [menu] = useMenu()
    const populer = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                    Heading={"From Our Manu"}
                    subHeading={"Populer Items"}>

                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-9">
                    {
                        populer.map(item => <MenuItem
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