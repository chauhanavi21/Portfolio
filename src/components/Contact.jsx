import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex flex-col justify-between bg-gradient-to-br from-[#1b1b1b] to-[#2d2d2d] snap-start"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        {/* Contact buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a
            href="mailto:chauhanavi843@gmail.com"
            className="flex items-center gap-3 border px-6 py-4 rounded-xl hover:bg-white hover:text-black transition bg-[#2d2d2d] shadow-md"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-sm md:text-base">chauhanavi843@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/avi-chauhan-1678a4204/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border px-6 py-4 rounded-xl hover:bg-white hover:text-black transition bg-[#2d2d2d] shadow-md"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
        </div>

        {/* Map */}
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Albany NY Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47116.66217158761!2d-73.8196193627902!3d42.65257814284862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a6c38666e7f%3A0xced0b149f2b700d6!2sAlbany%2C%20NY!5e0!3m2!1sen!2sus!4v1689802399399!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <footer className="text-gray-400 text-sm mt-12 pt-10">
        <ul className="flex justify-center flex-wrap gap-6 mb-4">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#achievements" className="hover:text-white">Achievements</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        <p className="text-center">© {new Date().getFullYear()} Avi Chauhan. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
