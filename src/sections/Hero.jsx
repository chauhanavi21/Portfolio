import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-4 w-full max-w-screen-xl mx-auto overflow-hidden"
    >
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
      />
      <p className="text-gray-400 text-lg">Hello, I'm</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-1">Avi Chauhan</h1>
      <h2 className="text-xl md:text-2xl text-gray-300 mt-1">
        Software Development Engineer / AI Developer
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="/Avi_Resume.pdf"
          download
          className="border px-5 py-2 rounded hover:bg-white hover:text-black transition font-medium"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="bg-white text-black px-5 py-2 rounded hover:scale-105 transition font-medium"
        >
          Contact Info
        </a>
      </div>

      <div className="flex space-x-6 mt-6 text-2xl">
        <a
          href="https://github.com/chauhanavi21"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/avi-chauhan-1678a4204/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  )
}

export default Hero
