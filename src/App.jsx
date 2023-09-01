import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Home/Description'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Services from './Components/Services/Services'
import Aboutme from './Components/About/Aboutme'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path="Services" element={<Services/>}/>
      <Route path="About" element={<Aboutme/>}/>
      <Route path="Skills" element={<Skills/>}/>
      <Route path="Contact" element={<Contact/>}/>
    
      
     </Routes>
    </BrowserRouter>
    {/* <NavBar></NavBar>
    <Description></Description> */}
    </>
  )
}

export default App
