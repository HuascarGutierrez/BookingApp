import React from 'react'
import "../styles/input.css"
const icon = '/Group3.svg'

function Input() {
  return (
    <div>
        <div class="DENIS">
            <input type="text" placeholder="Enter city or region"></input>
            <button>
                <img src='/Group3.svg'></img>

            </button>
        </div>
    </div>
  )
}

export default Input