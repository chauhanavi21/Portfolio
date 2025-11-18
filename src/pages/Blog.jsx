import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

const posts = [
  {
    title: 'Course Master — Reimagining Learning with AI Tutors',
    date: 'October 2025',
    summary:
      'Course Master was born from a single question: can AI teach like a human? Here’s how the idea became a voice-driven learning companion that helps students grasp complex concepts naturally.',
    content: `When I started **Course Master**, I wanted to blend conversational AI with education. Traditional e-learning often feels static; I envisioned something interactive — where learners talk, question, and receive tailored explanations in real time.

The concept evolved into an AI-powered tutoring platform built on **Next.js**, **Supabase**, and **Clerk** for authentication. Each user creates “companions” — voice tutors with personalities tuned to different subjects. A student can launch a history companion that sounds confident and factual, or a physics companion that walks through problems step-by-step. The voices are powered by **Vapi AI** and **11Labs**, and the content flows through OpenAI’s GPT-4.

Early prototypes focused on tone and pacing — making responses sound natural, not robotic. I also wanted the lessons to adapt, so the model checks for understanding and rephrases explanations until the concept clicks. Within a few weeks, Course Master turned into more than an app — it became an experience that proved how empathy and technology can meet in education.`
  },
  {
    title: 'Course Master — Building the AI Tutor Platform',
    date: 'October 2025',
    summary:
      'Behind every intuitive product lies rigorous engineering. This blog dives into the architecture and design choices that power Course Master’s seamless voice-based learning flow.',
    content: `At the heart of Course Master lies a service-oriented architecture built on **Next.js (App Router)** with serverless endpoints hosted on **Vercel**. The platform integrates **Supabase** as a Postgres-backed datastore, handling companion metadata, sessions, and transcripts.

Voice streaming happens through the **Vapi SDK**, which manages WebRTC connections between the user and the AI engine. Incoming audio is transcribed in real time using **Deepgram**, while GPT-4 responses are synthesized by **11 Labs** and streamed back. The front end uses React’s concurrent features to keep animations smooth even while data flows in the background.

Every companion is stored as a configuration — subject, tone, color scheme, and voice ID. Users can bookmark favorites, search companions, and relaunch previous sessions. Security relies on JWT tokens issued by Clerk and validated through middleware.

One major challenge was latency: how to keep a conversation fluid when multiple APIs are involved. I optimized request batching, pre-generated prompts, and cached embeddings to cut round-trip delays by 40%. The result feels like a live tutor that thinks in real time.`
  },
  {
    title: 'Course Master — Lessons Learned and the Road Ahead',
    date: 'October 2025',
    summary:
      'Every project teaches something new. Here’s what Course Master taught me about building AI systems that feel human, and where I plan to take it next.',
    content: `Course Master started as a side project but became one of my most meaningful builds. I learned that voice interfaces demand not just NLP accuracy but emotional calibration — how a model sounds can change how a learner feels.

From a technical standpoint, orchestrating GPT-4, 11Labs, and Supabase required designing resilient error-handling and fallback voices when APIs hit rate limits. I built a retry queue and graceful degradation so the lesson never stalls.

The next steps are to integrate visuals — whiteboards, diagrams, and quiz modules — and introduce analytics that show comprehension levels. I also plan to fine-tune smaller open-source models for offline use, making the platform accessible to schools with limited bandwidth.

Course Master reminded me why I build: to simplify learning through empathy and design. The goal now is to make this system open source so educators everywhere can create their own AI tutors.`
  },

  // --------------------------------------------------
  // 🧾 ONLINE EXAM MONITORING SYSTEM — 3 BLOGS
  // --------------------------------------------------
  {
    title: 'Online Exam Monitoring System — Ensuring Integrity in Remote Testing',
    date: 'October 2025',
    summary:
      'The shift to online exams brought new challenges in academic integrity. This post explores how I approached the idea of using AI to keep remote testing honest and fair.',
    content: `When remote exams surged during the pandemic, I noticed how vulnerable they were to misconduct. My idea was simple but ambitious: build a system that uses computer vision to ensure exam integrity without invading privacy.

The **Online Exam Monitoring System** merges AI and ethics. It combines a React/Node admin portal with a **Python/Flask** client that runs on a candidate’s device. The client uses **YOLOv5** to detect prohibited objects like phones and books, while **face_recognition** and **dlib** verify identity. It even tracks head pose to detect gaze deviation.

The motivation was fairness — not punishment. I wanted a tool that discouraged cheating while respecting honest students. Every decision, from where to store data (secure MongoDB) to how to notify invigilators, balanced transparency with trust.`
  },
  {
    title: 'Online Exam Monitoring System — Engineering the Proctoring Engine',
    date: 'October 2025',
    summary:
      'From detection models to real-time dashboards, this article explains the technical underpinnings of the AI-powered exam monitoring system.',
    content: `The backend relies on a **Flask REST API** that streams webcam frames to a local inference engine. Each frame passes through YOLOv5 for object detection, then a face embedding check ensures the registered candidate is still in view. When anomalies occur, the system triggers events logged to MongoDB.

Administrators access a **React** dashboard where flagged incidents appear as thumbnails with timestamps. They can replay video segments or export logs as CSV/JSON for audit purposes. On the Node.js server, WebSockets push live notifications to proctors.

Optimizing performance was crucial. Running detection models locally avoids latency, while Flask handles lightweight REST calls. I also implemented OpenCV threading to process frames in parallel — achieving near real-time response even on mid-range hardware.`
  },
  {
    title: 'Online Exam Monitoring System — Lessons from Building AI for Fairness',
    date: 'October 2025',
    summary:
      'Beyond code, building a proctoring tool raised ethical and technical lessons. Here’s what I learned about balancing detection accuracy with student trust.',
    content: `Building this system taught me that integrity can’t be automated — it must be supported. Algorithms can assist, but how they’re used defines their impact.

One challenge was false positives: a quick glance away could trigger suspicion. To fix this, I introduced dynamic thresholds that adapt to lighting and face angles. I also logged context — not just detections — to give reviewers the full picture.

Deploying the tool showed the importance of user experience: simple UI, clear alerts, and transparency about what’s monitored. As I refine it, I plan to integrate federated learning so the detection model improves over time without sending raw video data. Fairness, privacy, and trust remain at its core.`
  },

  {
    title: 'FinVista — Redefining Personal Finance Apps',
    date: 'October 2025',
    summary:
      'FinVista started as a design challenge: could finance apps be analytical and beautiful? Here’s how I set out to build a personal finance experience that thinks like an advisor.',
    content: `Spreadsheets track money, but they rarely guide decisions. I wanted a tool that does both — tracking expenses while providing insight. That idea became **FinVista**, a modern finance app built with **Next.js**, **Tailwind**, and **shadcn/ui**.

The home page greets users with real metrics — uptime, transactions tracked, satisfaction ratings — because numbers build trust. Then it leads into analytics: spending by category, income vs. outflow, and trend forecasting.

The app’s visual simplicity hides depth: modular charts powered by **Recharts**, responsive grids, and API hooks ready for future banking integrations. FinVista proved that finance apps can be data-driven and delightful at once.`
  },
  {
    title: 'FinVista — Inside the Analytics Engine',
    date: 'October 2025',
    summary:
      'This blog details the engineering behind FinVista’s real-time insights, from data pipelines to responsive front-end design.',
    content: `FinVista’s core uses an analytics pipeline that normalizes transaction data from multiple sources. A scheduled cron job aggregates daily expenses and stores summaries in a **PostgreSQL** schema. The front-end fetches this data through lightweight Next.js API routes and renders it with **Recharts** and **D3-style** transitions.

For prototype purposes, I simulated datasets using **faker.js** to stress-test visual components. Performance tuning involved React memoization and incremental static regeneration for dashboards.

On the UI side, every card and chart follows a design system defined in "shadcn/ui", ensuring brand consistency. Accessibility checks via axe-core guarantee color contrast and keyboard navigation. The architecture is ready for future integrations with Plaid or Stripe for live data.`
  },
  {
    title: 'FinVista — Designing for Trust and User Empowerment',
    date: 'October 2025',
    summary:
      'Great fintech products build confidence. Here’s what I learned about balancing automation, privacy, and design in FinVista.',
    content: `Users trust apps that respect their data. From the start, I implemented secure storage patterns and avoided unnecessary analytics tracking. Every visual element reinforces clarity: green for savings, red for spending, and neutral grays for stability.

Beyond visuals, I added onboarding micro-interactions explaining how FinVista uses data. Transparency became part of UX. By focusing on empowerment — not just automation — FinVista encourages users to understand and control their finances.

Next, I plan to connect live banking APIs and add AI insights that suggest budgeting improvements. FinVista’s foundation is solid; the goal now is to make financial literacy accessible to everyone.`
  },

]

const Blog = () => {
  const [activePost, setActivePost] = useState(null)

  return (
    <div className="bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 pb-20 px-6 max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Avi’s Blog</h1>

        {/* Responsive Grid: 1 / 2 / 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition cursor-pointer flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.summary}</p>
              </div>
              <button
                className="text-purple-400 hover:text-white font-medium text-sm mt-auto"
                onClick={() => setActivePost(post)}
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            <motion.div
              className="bg-[#1f1f1f] max-w-3xl w-full p-8 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] text-left"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <h2 className="text-3xl font-bold mb-3">{activePost.title}</h2>
              <p className="text-sm text-gray-400 mb-6">{activePost.date}</p>
              <p className="text-gray-200 leading-relaxed whitespace-pre-line">{activePost.content}</p>
              <div className="text-right mt-8">
                <button
                  className="text-gray-300 hover:text-white font-medium text-sm border border-gray-500 px-4 py-2 rounded-lg"
                  onClick={() => setActivePost(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Blog
