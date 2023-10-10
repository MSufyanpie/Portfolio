
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Sections from './Components/Sections/Sections'
import Particles from 'react-tsparticles';



function App() {
  
  
  

  return (
    <>
    <Router>
   
    <Sections></Sections>
    {/* </Particles> */}
    </Router>
    
    </>
  )
}

export default App
