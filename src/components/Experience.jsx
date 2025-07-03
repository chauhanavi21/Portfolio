import React from 'react'
import { motion } from 'framer-motion'

const internships = [
  {
    title: 'AI/LLM Intern',
    company: 'Silent Infotech Pvt Ltd, Ahmedabad, India',
    duration: '08-01-2024 to 30-04-2024',
    brief: 'Worked on LLMs, ONNX, and RAG pipelines',
    details: 'Worked with Transformer architectures and Large Language Models (LLMs) including RAG for unstructured data. Optimized inference using ONNX and TensorFlow Lite. Built complete ML pipelines from preprocessing to deployment.'
  },
  {
    title: 'Machine Learning Intern',
    company: 'Opus Technologies, Surat, India',
    duration: '01-06-2023 to 30-06-2023',
    brief: 'Built CNNs for image classification',
    details: 'Used Pandas, Keras, Scikit-Learn to classify plant leaf disease and lung cancer. Preprocessed data and fine-tuned CNNs. Worked on achieving high model accuracy and optimizing evaluation.'
  },
  {
    title: 'React Developer Intern',
    company: 'Karvi Engineering & Consultancy, Vadodara, India',
    duration: '11-01-2022 to 10-04-2022',
    brief: 'Frontend dev on live projects',
    details: 'Worked remotely in the Web Design team as a React Developer. Contributed to multiple live frontend projects with reusable components and responsive design.'
  },
  {
    title: 'Web Developer Intern',
    company: 'Peace Solutions Pvt Ltd, Pune, India',
    duration: '20-07-2021 to 20-08-2021',
    brief: 'Portfolio website using React + Express',
    details: 'Built a fully functional Portfolio Website using React and Express.js stack. Worked with REST APIs, deployed backend, and designed a sleek UI.'
  }
]

const skills = [
  {
    title: 'Programming Languages',
    skills: 'Python, Java, C, C++, Shell Scripting, Linux'
  },
  {
    title: 'Machine Learning',
    skills: 'Regression, Classification, Clustering, Decision Tree, Pipelines, MLOps, MLflow'
  },
  {
    title: 'Deep Learning & GenAI',
    skills: 'PyTorch, TensorFlow, Keras, CNN, LLMs'
  },
  {
    title: 'NLP',
    skills: 'NER, Sentiment Analysis, Transformers, Hugging Face'
  },
  {
    title: 'Data Analysis & Visualization',
    skills: 'Pandas, NumPy, Matplotlib, Scikit-Learn, Power BI'
  },
  {
    title: 'Computer Vision',
    skills: 'Image Classification, Model Tuning'
  },
  {
    title: 'Web & Frameworks',
    skills: 'JavaScript, React.js, Node.js, Express, HTML5, CSS3, Redux, VS Code'
  },
  {
    title: 'Tools & DevOps',
    skills: 'Git, GitHub, Docker, Office Suite, Open-source tools'
  },
  {
    title: 'AWS',
    skills: 'SageMaker, Lambda, EC2, S3, DynamoDB, CloudWatch, SES, EventBridge'
  },
  {
    title: 'Database & Algorithms',
    skills: 'MySQL, SQL Server, Algorithms & Optimization'
  },
  {
    title: 'Soft Skills',
    skills: 'Communication, Critical Thinking, Presentation, Problem Solving'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Internship Experience</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#2d2d2d] p-6 rounded-lg shadow-md overflow-hidden group text-left transition-all duration-300 hover:shadow-2xl cursor-pointer w-full sm:w-[48%] lg:w-[48%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-400 font-medium">{item.company}</p>
            <p className="text-sm text-gray-300 mb-2">{item.duration}</p>
            <p className="text-gray-300">{item.brief}</p>

            <motion.div
              className="absolute inset-0 bg-[#1a1a1a]/95 p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.details}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <h2 id="skills" className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="bg-[#2d2d2d] p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-lg mb-2">{group.title}</h4>
            <p className="text-gray-300 text-sm">{group.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
