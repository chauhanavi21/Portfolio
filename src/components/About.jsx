import React from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src="/profile.jpg"
          alt="Avi Chauhan"
          className="w-64 h-64 rounded-xl object-cover shadow-lg"
        />

        <div className="flex flex-col gap-6 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#2d2d2d] p-6 rounded-xl shadow-md">
              <FaBriefcase className="text-2xl mb-2 mx-auto" />
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-sm text-gray-300">Internships in AI, LLMs, ML & Deployment<br />4+ Projects</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 rounded-xl shadow-md">
              <FaGraduationCap className="text-2xl mb-2 mx-auto" />
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-sm text-gray-300">
                M.S. – University at Albany<br />
                B.E. – Indus University
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Passionate software engineer and AI developer with experience in ML, CV, React, and backend tools. I build scalable AI pipelines, web platforms, and real-time applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
