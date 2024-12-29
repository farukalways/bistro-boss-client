import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Componentes/SectionTitle/SectionTitle';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
             subHeading='check it out'
             Heading='Featured Item'
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo dolor similique? Fugiat cupiditate dolores corporis nobis! Officia harum temporibus saepe ipsa! Quasi deserunt molestiae delectus praesentium id dolore ex autem repellat aliquid. Unde perspiciatis libero aut, delectus recusandae beatae!</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;