import React from 'react'
import "../styles/Card.css";

function Place(props) {
    const places = props.places;
  return (
    <div className='place'>
            <div className='rate'>
                <i>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5433 0.807068C6.72234 0.397645 7.27765 0.397643 7.4567 0.807067L9.1404 4.65718C9.21355 4.82445 9.36478 4.93955 9.53925 4.96075L13.5549 5.44849C13.9819 5.50035 14.1535 6.05361 13.8371 6.35852L10.8621 9.22576C10.7328 9.35033 10.6751 9.53657 10.7097 9.71694L11.5078 13.8685C11.5927 14.31 11.1435 14.6519 10.7689 14.4309L7.2465 12.3529C7.09346 12.2626 6.90653 12.2626 6.7535 12.3529L3.23111 14.4309C2.85654 14.6519 2.40728 14.31 2.49215 13.8685L3.29025 9.71694C3.32493 9.53657 3.26716 9.35033 3.13791 9.22576L0.16285 6.35852C-0.15352 6.05361 0.0180786 5.50035 0.445105 5.44849L4.46075 4.96075C4.63521 4.93955 4.78645 4.82445 4.8596 4.65718L6.5433 0.807068Z" fill="#FFD178"/>
                  </svg>
                </i>
                <span>{places.score}</span>
            </div>
            <button className='like' type='button' title='favorite'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.71C12.28 20.83 11.72 20.83 11.38 20.71C8.48 19.72 2 15.59 2 8.59C2 5.5 4.49 3 7.56 3C9.38 3 10.99 3.88 12 5.24C12.5138 4.54588 13.183 3.98173 13.954 3.59274C14.725 3.20376 15.5764 3.00076 16.44 3C19.51 3 22 5.5 22 8.59C22 15.59 15.52 19.72 12.62 20.71Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <img src={places.imgUrl} alt={places.title} />
        </div>
  )
}

export default Place