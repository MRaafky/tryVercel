import { useState } from 'react'
import Landing from './Components/Landing/Landing'
import Decor from './Components/Decor/Decor'
import Halaman1 from './Components/Halaman1/Halaman1'
import './App.css'

function App() {

  return (
    <div className='contaunerAll'>
      <Landing></Landing>
      <Decor></Decor>
      <Halaman1></Halaman1>
    </div>
  )
}

export default App
