import React from 'react'
import { motion } from 'framer-motion'

// Skills section: groups abilities into cards for easy scanning.  The
// dark cards and white headings echo the site’s colour palette.  A
// simple grid ensures the layout adapts smoothly to different
// screen sizes.

const skills = [
  { title: 'Programming Languages', skills: 'Python, Java, C, C++, Shell Scripting, Linux' },
  { title: 'Machine Learning', skills: 'Regression, Classification, Clustering, Decision Tree, Pipelines, MLOps, MLflow' },
  { title: 'Deep Learning & GenAI', skills: 'PyTorch, TensorFlow, Keras, CNN, LLMs' },
  { title: 'NLP', skills: 'NER, Sentiment Analysis, Transformers, Hugging Face' },
  { title: 'Data Analysis & Visualization', skills: 'Pandas, NumPy, Matplotlib, Scikit-Learn, Power BI' },
  { title: 'Computer Vision', skills: 'Image Classification, Model Tuning' },
  { title: 'Web & Frameworks', skills: 'JavaScript, React.js, Node.js, Express, HTML5, CSS3, Redux, VS Code' },
  { title: 'Tools & DevOps', skills: 'Git, GitHub, Docker, Office Suite, Open-source tools' },
  { title: 'AWS', skills: 'SageMaker, Lambda, EC2, S3, DynamoDB, CloudWatch, SES, EventBridge' },
  { title: 'Database & Algorithms', skills: 'MySQL, SQL Server, Algorithms & Optimization' },
  { title: 'Soft Skills', skills: 'Communication, Critical Thinking, Presentation, Problem Solving' }
]

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 text-center min-h-screen snap-start">
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="bg-[#2d2d2d] p-5 rounded-lg shadow-md border border-gray-700"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-lg mb-2 text-white">{group.title}</h4>
            <p className="text-gray-400 text-sm">{group.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills