import React from 'react'
import "../styles/Carrusel.css";

function Carrusel(props) {
  const places = props.places
  return (
    <section className='carrusel'>
        {places.map((place) => (
          <div>
            <div className='place'>
            <div className='rate'>
                <i>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5433 0.807068C6.72234 0.397645 7.27765 0.397643 7.4567 0.807067L9.1404 4.65718C9.21355 4.82445 9.36478 4.93955 9.53925 4.96075L13.5549 5.44849C13.9819 5.50035 14.1535 6.05361 13.8371 6.35852L10.8621 9.22576C10.7328 9.35033 10.6751 9.53657 10.7097 9.71694L11.5078 13.8685C11.5927 14.31 11.1435 14.6519 10.7689 14.4309L7.2465 12.3529C7.09346 12.2626 6.90653 12.2626 6.7535 12.3529L3.23111 14.4309C2.85654 14.6519 2.40728 14.31 2.49215 13.8685L3.29025 9.71694C3.32493 9.53657 3.26716 9.35033 3.13791 9.22576L0.16285 6.35852C-0.15352 6.05361 0.0180786 5.50035 0.445105 5.44849L4.46075 4.96075C4.63521 4.93955 4.78645 4.82445 4.8596 4.65718L6.5433 0.807068Z" fill="#FFD178"/>
                  </svg>
                </i>
                <span>{place.score}</span>
            </div>
            <button className='like'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.71C12.28 20.83 11.72 20.83 11.38 20.71C8.48 19.72 2 15.59 2 8.59C2 5.5 4.49 3 7.56 3C9.38 3 10.99 3.88 12 5.24C12.5138 4.54588 13.183 3.98173 13.954 3.59274C14.725 3.20376 15.5764 3.00076 16.44 3C19.51 3 22 5.5 22 8.59C22 15.59 15.52 19.72 12.62 20.71Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <img src={place.imgUrl} alt={place.title} />
        </div>
        <div className="description">
          <div>
            <h2>{place.title}</h2>
          </div>
          <span className="price" >$ {place.price}</span>
          <div className="info">
            <i>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.83333 17.4167V11.9167C1.83333 11.5042 1.91736 11.1299 2.08541 10.7937C2.25347 10.4576 2.47499 10.1597 2.74999 9.89999V7.33333C2.74999 6.56944 3.01736 5.92013 3.55208 5.38541C4.0868 4.85069 4.73611 4.58333 5.49999 4.58333H9.16666C9.51805 4.58333 9.84652 4.64841 10.1521 4.77858C10.4576 4.90813 10.7403 5.0875 11 5.31666C11.2597 5.0875 11.5424 4.90813 11.8479 4.77858C12.1535 4.64841 12.4819 4.58333 12.8333 4.58333H16.5C17.2639 4.58333 17.9132 4.85069 18.4479 5.38541C18.9826 5.92013 19.25 6.56944 19.25 7.33333V9.89999C19.525 10.1597 19.7465 10.4576 19.9146 10.7937C20.0826 11.1299 20.1667 11.5042 20.1667 11.9167V17.4167H18.3333V15.5833H3.66666V17.4167H1.83333ZM11.9167 9.16666H17.4167V7.33333C17.4167 7.07361 17.3287 6.85575 17.1527 6.67974C16.9773 6.50436 16.7597 6.41666 16.5 6.41666H12.8333C12.5736 6.41666 12.3561 6.50436 12.1807 6.67974C12.0047 6.85575 11.9167 7.07361 11.9167 7.33333V9.16666ZM4.58333 9.16666H10.0833V7.33333C10.0833 7.07361 9.99563 6.85575 9.82025 6.67974C9.64425 6.50436 9.42638 6.41666 9.16666 6.41666H5.49999C5.24027 6.41666 5.02241 6.50436 4.84641 6.67974C4.67102 6.85575 4.58333 7.07361 4.58333 7.33333V9.16666Z" fill="#A1A7B0"/>
              </svg>                                          
            </i>
            <span>{place.bedroom} bedrooms</span>
          </div>
          <div className="info">
            <i>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="14" height="14" rx="4" fill="#A1A7B0"/>
              <line x1="7.5" y1="10.5" x2="7.5" y2="7.5" stroke="white" stroke-linecap="round"/>
              <line x1="14.5" y1="11.5" x2="14.5" y2="14.5" stroke="white" stroke-linecap="round"/>
              <line x1="10.5" y1="7.5" x2="7.5" y2="7.5" stroke="white" stroke-linecap="round"/>
              <line x1="11.5" y1="14.5" x2="14.5" y2="14.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </i>
            <span>{place.size}m<sup>2</sup></span>
          </div>
          <span className="per">per month</span>
        </div>
          </div>
        ))
        }
    </section>
  )
}

export default Carrusel