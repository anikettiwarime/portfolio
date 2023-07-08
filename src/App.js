import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
// import Home from './components/Test'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <>
      <NavBar />      
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  )
}

export default App