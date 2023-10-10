import { places } from './assets/places'
import './App.css'
import Carrusel from './components/Carrusel'

function App() {

  return (
    <>
      <Carrusel places={places}/>
    </>
  )
}

export default App
