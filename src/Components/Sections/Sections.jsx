import React from 'react'
import Home from '../Home/Home'
import Aboutme from '../About/Aboutme'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Sections() {
  return (
    <div>
        <section id="section1">
        <Home></Home>
      </section><br/>
      <section id="section2" >
        <Aboutme></Aboutme>
      </section>
      <section id="section3" >
        <Services></Services>
      </section>
      <section id="section4" >
        <Skills></Skills>
      </section>
      <section id="section5" >
        <Projects></Projects>
      </section><br/>
      <section id="section6" >
       <Contact></Contact>
      </section>
      <section >
       <Footer></Footer>
      </section>
    </div>
  )
}
