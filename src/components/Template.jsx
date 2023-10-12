import React from 'react'
import {profiles} from '../assets/profiles'
import Top from './Top'
import Input from './Input'
import '../styles/template.css'
function Template() {
  return (
    <div className='template'>
        <Top profiles={profiles}/>
        <Input />
    </div>
  )
}

export default Template