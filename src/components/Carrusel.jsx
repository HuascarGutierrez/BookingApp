import React from 'react'
import "../styles/Carrusel.css";
import "../styles/swiper-bundle.min.css";
import "../js/script.js";
import "../js/swiper-bundle.min.js"
import Card from './Card';

function Carrusel(props) {
  const places = props.places

  var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
 
  
  return (
    <div>
      <section className='container swiper'>
      <div className='slide-container'>
        <div className='card-wrapper swiper-wrapper'>
          <Card places={places}/>
          <Card places={places}/>
          <Card places={places}/>
          <Card places={places}/>
          <Card places={places}/>
          <Card places={places}/>
          <Card places={places}/>
        </div>
      </div>
    </section>
    <div class="swiper-button-next swiper-navBtn"></div>
    <div class="swiper-button-prev swiper-navBtn"></div>
    <div class="swiper-pagination"></div>
    </div>
    
  )
}

export default Carrusel