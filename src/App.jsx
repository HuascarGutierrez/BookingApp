import { useState } from 'react'
import Menu from './components/Menu'
import './App.css'

const DescriptionComponent = () => {
  return (
    <div className="description-container">
      <h2>Villa, Kemah Tinggi</h2>
      <div className="description-details">
        <div className="bedroom-info">
          <img src="path_to_bed_icon.png" alt="Bedroom icon" />
          <span>2 bedrooms</span>
        </div>
        <div className="area-info">
          <img src="path_to_area_icon.png" alt="Area icon" />
          <span>214m²</span>
        </div>
      </div>
      <div className="price-info">
        $920 per month
      </div>
    </div>
  );
}

export default DescriptionComponent;
