import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Achievements from './components/Achievements'
import Skills from './components/Skills'

function App() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#1b1b1b] to-[#2d2d2d] text-white scroll-smooth">
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

export default App
