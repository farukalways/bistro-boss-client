import Banner from "../Bannrer/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import Category from "../category/Category";
import Featured from "../Featured/Featured";
import PopulerManue from "../populerManue/PopulerManue";

const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/> 
          <BistroBoss/>
          <PopulerManue></PopulerManue>
          <Featured/>
        </div>
    );
};

export default Home;