import Cover from "../../shared/Cover/Cover";
import OrderCoverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Componentes/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className="text-center">
            <Cover img={OrderCoverImg} title={'Our Shop'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>offered</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab
                    items={desserts}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab
                    items={pizza}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab
                    items={salad}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={soup}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={offered}
                    ></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;