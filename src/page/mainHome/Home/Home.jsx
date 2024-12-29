import Banner from "../Bannrer/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import Category from "../category/Category";
import PopulerManue from "../populerManue/PopulerManue";

const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/> 
          <BistroBoss/>
          <PopulerManue></PopulerManue>
        </div>
    );
};

export default Home;