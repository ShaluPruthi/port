import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/Intro.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import './style.css'
import Skills from './components/Skills/Skills.jsx'
import About from './components/About/About.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </Router>
  )
}

export default App
