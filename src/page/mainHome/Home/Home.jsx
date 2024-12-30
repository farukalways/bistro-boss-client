import { Helmet } from "react-helmet-async";
import Banner from "../Bannrer/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import Category from "../category/Category";
import Featured from "../Featured/Featured";
import PopulerManue from "../populerManue/PopulerManue";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBoss />
      <PopulerManue></PopulerManue>
      <Featured />
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;