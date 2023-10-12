import React from 'react'
import {profiles} from '../assets/profiles'
import Top from './Top'
import Input from './Input'
import Nav from './Nav'
import '../styles/template.css'
function Template() {
  return (
    <div className='template'>
        <Top profiles={profiles}/>
        <Input />
        <Nav />
    </div>
  )
}

export default Template