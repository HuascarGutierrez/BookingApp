import React from 'react'
import "../styles/Carrusel.css";
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { places } from '../assets/places';


// import required modules
import { Pagination } from 'swiper/modules';

function Carrusel(props) {
  const places = props.places;
  return (
    <section>
      <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        places.map(place=>{
          return(
            
      <SwiperSlide><Card places={place}/></SwiperSlide>
    
          )
        }

        )
      }
    </Swiper>
    </section>
    
  )
}

export default Carrusel