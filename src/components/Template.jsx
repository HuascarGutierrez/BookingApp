import React from 'react'
import {profiles} from '../assets/profiles'
import { places } from '../assets/places'
import Top from './Top'
import Input from './Input'
import Nav from './Nav'
import Carrusel from './Carrusel'
import '../styles/template.css'
function Template() {
  return (
    <div className='template'>
        <Top profiles={profiles}/>
        <Input />
        <Nav />
        <Carrusel places={places}/>
    </div>
  )
}

export default Template