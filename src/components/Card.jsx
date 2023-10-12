import React from 'react'
import "../styles/Card.css";
import Place from './Place';
import Description from './Description';
function Card(props) {
  const places = props.places;
  return (
    <div className='card swiper-slide'>
        <Place places={places}/>
        <Description places={places}/>
    </div>
  )
}

export default Card