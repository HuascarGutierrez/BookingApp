import React from 'react'
import "../styles/input.css"

function Input() {
  return (
    <div>
        <div class="DENIS">
            <input type="text" placeholder="Enter city or region"></input>
            <button>
                <i><svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="3" width="26" height="2" rx="1" fill="white"/>
                    <rect y="12" width="26" height="2" rx="1" fill="white"/>
                    <circle cx="9" cy="4" r="3" fill="#61AAC9" stroke="white" stroke-width="2"/>
                    <circle cx="18" cy="13" r="3" fill="#61AAC9" stroke="white" stroke-width="2"/>
                    </svg>
                    </i>
            </button>
        </div>
    </div>
  )
}

export default Input