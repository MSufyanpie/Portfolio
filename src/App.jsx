import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Home/Description'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Sections from './Components/Sections/Sections'

function App() {
  

  return (
    <>
    <Router>
    <Sections></Sections>
    </Router>
    
    </>
  )
}

export default App
