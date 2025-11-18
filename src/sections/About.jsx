import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 flex justify-center items-center">
      <div className="bg-[#2a2a2a] max-w-5xl w-full rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-10 items-center">

        {/* Left: Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/avatar-placeholder.png.png"
            alt="Avi Chauhan"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/3 text-left">
          <h2 className="text-3xl font-bold text-white mb-4">About Me 👨‍💻</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I’m <span className="font-semibold text-white">Avi Chauhan</span>, a software engineer and AI enthusiast
            passionate about building impactful solutions through machine learning,
            large language models, and web technology. I love blending tech with creativity,
            and enjoy leading both code and community efforts.
          </p>

          <p className="text-sm text-purple-300 italic mb-6">
          Combining applied machine learning, full-stack development, and research-driven problem solving to create impactful AI solutions.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-2 text-white text-xl">
            <a href="mailto:chauhanavi843@gmail.com" title="Email"><FaEnvelope /></a>
            <a href="https://github.com/chauhanavi21" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/avi-chauhan-1678a4204/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
