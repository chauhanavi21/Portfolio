import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/project1',
    live: 'https://your-live-site1.com'
  },
  {
    title: 'Project Two',
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/project2',
    live: 'https://your-live-site2.com'
  },
  {
    title: 'Project Three',
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/project3',
    live: 'https://your-live-site3.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1500px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  Live Demo
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
