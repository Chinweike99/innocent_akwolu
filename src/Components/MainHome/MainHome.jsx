import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'


const MainHome = () => {
  return (
    <div>
        <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default MainHome