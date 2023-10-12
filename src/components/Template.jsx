import React from 'react'
import {profiles} from '../assets/profiles'
import Top from './Top'
import Input from './Input'

function Template() {
  return (
    <div>
        <Top profiles={profiles}/>
        <Input />
    </div>
  )
}

export default Template