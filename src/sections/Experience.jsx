import React from 'react'
import { motion } from 'framer-motion'

const internships = [
  {
    title: 'AI/LLM Intern',
    company: 'Silent Infotech Pvt Ltd, Ahmedabad, India',
    duration: '08-01-2024 to 30-04-2024',
    brief: 'Worked on LLMs, ONNX, and RAG pipelines',
    details: 'Worked with Transformer architectures and Large Language Models (LLMs)...'
  },
  {
    title: 'Machine Learning Intern',
    company: 'Opus Technologies, Surat, India',
    duration: '01-06-2023 to 30-06-2023',
    brief: 'Built CNNs for image classification',
    details: 'Used Pandas, Keras, Scikit-Learn to classify plant leaf disease and lung cancer...'
  },
  {
    title: 'React Developer Intern',
    company: 'Karvi Engineering & Consultancy, Vadodara, India',
    duration: '11-01-2022 to 10-04-2022',
    brief: 'Frontend dev on live projects',
    details: 'Worked remotely in the Web Design team as a React Developer...'
  },
  {
    title: 'Web Developer Intern',
    company: 'Peace Solutions Pvt Ltd, Pune, India',
    duration: '20-07-2021 to 20-08-2021',
    brief: 'Portfolio website using React + Express',
    details: 'Built a Portfolio Website using React and Express.js stack...'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 text-center min-h-screen snap-start bg-[#fff7f9] text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-[#e85a85]">Internship Experience</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white/90 p-6 rounded-lg shadow-md overflow-hidden group text-left cursor-pointer w-full sm:w-[42%] border border-[#f5eaf5] hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-1 text-[#e85a85]">{item.title}</h3>
            <p className="text-gray-600 font-medium">{item.company}</p>
            <p className="text-sm text-gray-500 mb-2">{item.duration}</p>
            <p className="text-gray-600">{item.brief}</p>

            <motion.div
              className="absolute inset-0 bg-white/95 p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-[#f5eaf5]"
            >
              <h4 className="text-lg font-semibold text-[#e85a85] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.details}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
