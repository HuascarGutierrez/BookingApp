import React from 'react'
import "../styles/Card.css";
import Photo from './Photo';
import Description from './Description';

function Card(props) {
  const places = props.places;
  return (
    <div className='card swiper-slide'>
        <Photo places={places}/>
        <Description places={places}/>
    </div>
  )
}

export default Card