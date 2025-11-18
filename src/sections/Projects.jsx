import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Projects section: showcases projects in a responsive grid with
// sliding image carousels.  The dark cards and contrasting buttons
// align with the site’s colour scheme.  Only GitHub links are shown
// to avoid unnecessary “live site” buttons.

const projects = [
  {
    title: 'Online-Exam-Monitoring-System',
    images: ['/o1.png', '/o2.png'],
    github: 'https://github.com/chauhanavi21/Online-Exam-Monitoring-System'
  },
  {
    title: 'Football Analysis System',
    images: ['/f1.jpg', '/f2.png'],
    github: 'https://github.com/chauhanavi21/Football_Analysis_System'
  },
  {
    title: 'Attendance-Management-System',
    images: ['/a1.png', '/a2.png'],
    github: 'https://github.com/chauhanavi21/Attendance_system'
  }
]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
}

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 text-center min-h-screen snap-start">
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1500px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2d2d2d] rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="h-60 overflow-hidden">
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`Slide ${i}`} className="w-full h-60 object-cover" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between items-center sm:items-start text-left">
              <h3 className="text-xl font-semibold mb-4 text-center sm:text-left text-white">{project.title}</h3>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition inline-block mx-auto sm:ml-0"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects