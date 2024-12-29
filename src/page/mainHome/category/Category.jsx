import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import Slide1 from '../../../assets/home/slide1.jpg'
import Slide2 from '../../../assets/home/slide2.jpg'
import Slide3 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Componentes/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
             subHeading={'From 11.00am to 10.00am'}
             Heading={'Order Online'}
            >
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img src={Slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;