import React from 'react'
import Place from './Place'
import Profile from './Profile'
import '../styles/Top.css'

function Top(props) {
    const profiles = props.profiles
  return (
    <section className='input'>
        <Place />
        <Profile profiles={profiles}/>
    </section>
  )
}

export default Top