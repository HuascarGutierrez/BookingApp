import React from 'react'
import "../styles/input.css"
const icon = '/Search.svg'
function Input() {
  return (
    <div>
        <div class="DENIS">
            <img src="./Search.svg"/>
            <input type="text" placeholder="Enter city or region"></input>  
            <button>
                <img src='/Group3.svg'></img>
            </button>            
        </div>
    </div>
  )
}
export default Input