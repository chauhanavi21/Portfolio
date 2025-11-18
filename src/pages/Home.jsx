import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Achievements from '../sections/Achievements'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home
