import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
        <a
          href="mailto:chauhanavi843@gmail.com"
          className="flex items-center border px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          <FaEnvelope className="mr-2" /> chauhanavi843@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/avi-chauhan-1678a4204/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
      </div>

      <footer className="text-gray-400 text-sm mt-10">
        <ul className="flex justify-center gap-6 mb-4">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        <p>© {new Date().getFullYear()} Avi Chauhan. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
