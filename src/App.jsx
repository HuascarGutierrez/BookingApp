import { useState } from 'react'
import Place from './components/Place'  
import Profile from './components/Profile'
import {profiles} from './assets/profiles'
import './App.css'
function App() {

  return (
    <>
      <Profile profiles={profiles}/>
    </>
  )
}

export default App
