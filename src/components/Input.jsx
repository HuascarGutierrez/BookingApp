import React from 'react'
import Boton from './Boton'
import Search from './Search'
import '../styles/input.css'

function Input() {
  return (
    <div className='classInput'>
        <Search />
        <Boton />
    </div>
  )
}
export default Input