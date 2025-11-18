import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Achievements section: displays certificates and volunteer
// experiences in a grid of cards.  Clicking a card opens an
// enlarged image in a modal.  The dark background and subtle
// interactions complement the rest of the site’s design.

const certificates = [
  {
    title: 'AWS Certified AI Practitioner (AIF-C01)',
    date: 'June 27, 2025',
    image: '/aws-certified-ai-practitioner.png',
    description:
      'Scored 933/1000, Validation No: 5289992c1c274ebeafa5aaddeb0c5d35 , covering AI & ML fundamentals, generative AI, foundation models, responsible AI, and AI security & governance.'
  },
  {
    title: 'AI Use Cases & Applications',
    date: 'June 26, 2025',
    image: '/Exploring_Artificial_Intelligence.png',
    description:
      'Explored real-world applications of AI in finance, healthcare, education, and startups. Great for problem-solving mindsets.'
  },
  {
    title: 'Fundamentals of ML & AI',
    date: 'June 04, 2025',
    image: '/Fundamentals_of_Machine.png',
    description:
      'Mastered basic machine learning workflows, supervised vs unsupervised learning, and hands-on with AWS AI tools.'
  },
  {
    title: 'Rotaract Club Volunteer',
    date: '2023 - 2024',
    image: '/rotract.jpg',
    description:
      'Led as Teach Director at Rotaract Club of Ahmedabad Eleos. Contributed to 9+ volunteer projects fostering youth development.'
  }
]

const Achievements = () => {
  const [activeImage, setActiveImage] = useState(null)
  return (
    <section
      id="achievements"
      className="px-6 py-20 text-center min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d2d2d]"
    >
      <h2 className="text-3xl font-bold mb-10 text-white">Certifications & Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveImage(cert.image)}
            className="bg-[#2d2d2d] w-full h-[320px] p-6 rounded-xl cursor-pointer flex flex-col justify-center border border-gray-700 hover:border-purple-500 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.date}</p>
              <p className="text-sm text-gray-300 mt-4">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-3xl w-full relative border border-gray-700"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img src={activeImage} alt="Certificate" className="w-full h-auto object-contain" />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-6 text-white text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements