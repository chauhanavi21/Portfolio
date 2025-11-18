import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Achievements from '../sections/Achievements'
import Contact from '../sections/Contact'

// The Home page composes all of the section components into a single
// scrolling view.  It retains the dark colour scheme of the original
// portfolio while adopting a more organised file structure (pages vs
// sections) to mirror the reference site.  The background is a
// gradient from dark grey to slightly lighter grey and the text is
// white for contrast.

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d] text-white min-h-screen">
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