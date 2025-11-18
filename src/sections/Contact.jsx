import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex flex-col justify-between bg-[#fff7f9] snap-start text-gray-900"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center text-[#e85a85]">Get In Touch</h2>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Email Card */}
          <a
            href="mailto:chauhanavi843@gmail.com"
            className="flex items-center gap-4 p-6 bg-white/90 rounded-xl border border-[#f5eaf5] hover:shadow-md transition"
          >
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#e85a85]/20 flex items-center justify-center">
              <FaEnvelope className="text-2xl text-[#e85a85]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#e85a85]">Email</h4>
              <p className="text-gray-600 text-sm">chauhanavi843@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/avi-chauhan-1678a4204/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/90 rounded-xl border border-[#f5eaf5] hover:shadow-md transition"
          >
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#e85a85]/20 flex items-center justify-center">
              <FaLinkedin className="text-2xl text-[#e85a85]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#e85a85]">LinkedIn</h4>
              <p className="text-gray-600 text-sm">/avi-chauhan-1678a4204</p>
            </div>
          </a>
        </div>

        {/* Map */}
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md border border-[#f5eaf5]">
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

        {/* Quick response note */}
        <p className="mt-8 text-center text-gray-600 text-sm italic">I typically respond within 24 hours.</p>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-12 pt-10">
        <ul className="flex justify-center flex-wrap gap-6 mb-4">
          <li><a href="#about" className="hover:text-[#e85a85]">About</a></li>
          <li><a href="#experience" className="hover:text-[#e85a85]">Experience</a></li>
          <li><a href="#skills" className="hover:text-[#e85a85]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#e85a85]">Projects</a></li>
          <li><a href="#achievements" className="hover:text-[#e85a85]">Achievements</a></li>
          <li><a href="#contact" className="hover:text-[#e85a85]">Contact</a></li>
        </ul>
        <p className="text-center">© {new Date().getFullYear()} Avi Chauhan. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
