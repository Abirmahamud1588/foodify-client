import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Sectiontitle from '../../Componetnts/Sectiontitle';

const Catmenu = () => {
    return (
        <div>
            <section>
                <Sectiontitle  subheading={'Starts From 9.00 Am'} heading={'ORDER NOW'} ></Sectiontitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-14"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h1 className='text-orange-500 text-2xl font-semibold -mt-12 text-center'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h1 className='text-orange-500 text-2xl font-semibold -mt-12 text-center'>Tomato</h1>

        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
                <h1 className='text-orange-500 text-2xl font-semibold -mt-12 text-center'>Coffee</h1>

        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
                <h1 className='text-orange-500 text-2xl font-semibold -mt-12 text-center'>Vegetable</h1>

        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
                <h1 className='text-orange-500 text-2xl font-semibold -mt-12 text-center'>Desert</h1>

        </SwiperSlide>
      \
      </Swiper> 
            </section>
        </div>
    );
};

export default Catmenu;