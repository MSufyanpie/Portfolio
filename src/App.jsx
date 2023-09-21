import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Home/Description'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Services from './Components/Services/Services'
import Aboutme from './Components/About/Aboutme'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
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
