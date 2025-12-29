// src/pages/Blog.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const posts = [
  // --------------------------------------------------
  // COURSE MASTER — 3 BLOGS
  // --------------------------------------------------
  {
    title: "Course Master — Reimagining Learning with AI Tutors",
    date: "October 2025",
    summary:
      "Course Master was born from a single question: can AI teach like a human? Here’s how the idea became a voice-driven learning companion that helps students grasp complex concepts naturally.",
    content: `When I started **Course Master**, I wanted to blend conversational AI with education. Traditional e-learning often feels static; I envisioned something interactive — where learners talk, question, and receive tailored explanations in real time.

The concept evolved into an AI-powered tutoring platform built on **Next.js**, **Supabase**, and **Clerk** for authentication. Each user creates “companions” — voice tutors with personalities tuned to different subjects. A student can launch a history companion that sounds confident and factual, or a physics companion that walks through problems step-by-step. The voices are powered by **Vapi AI** and **11Labs**, and the content flows through OpenAI’s GPT-4.

Early prototypes focused on tone and pacing — making responses sound natural, not robotic. I also wanted the lessons to adapt, so the model checks for understanding and rephrases explanations until the concept clicks. Within a few weeks, Course Master turned into more than an app — it became an experience that proved how empathy and technology can meet in education.`,
  },
  {
    title: "Course Master — Building the AI Tutor Platform",
    date: "October 2025",
    summary:
      "Behind every intuitive product lies rigorous engineering. This blog dives into the architecture and design choices that power Course Master’s seamless voice-based learning flow.",
    content: `At the heart of Course Master lies a service-oriented architecture built on **Next.js (App Router)** with serverless endpoints hosted on **Vercel**. The platform integrates **Supabase** as a Postgres-backed datastore, handling companion metadata, sessions, and transcripts.

Voice streaming happens through the **Vapi SDK**, which manages WebRTC connections between the user and the AI engine. Incoming audio is transcribed in real time using **Deepgram**, while GPT-4 responses are synthesized by **11 Labs** and streamed back. The front end uses React’s concurrent features to keep animations smooth even while data flows in the background.

Every companion is stored as a configuration — subject, tone, color scheme, and voice ID. Users can bookmark favorites, search companions, and relaunch previous sessions. Security relies on JWT tokens issued by Clerk and validated through middleware.

One major challenge was latency: how to keep a conversation fluid when multiple APIs are involved. I optimized request batching, pre-generated prompts, and cached embeddings to cut round-trip delays by 40%. The result feels like a live tutor that thinks in real time.`,
  },
  {
    title: "Course Master — Lessons Learned and the Road Ahead",
    date: "October 2025",
    summary:
      "Every project teaches something new. Here’s what Course Master taught me about building AI systems that feel human, and where I plan to take it next.",
    content: `Course Master started as a side project but became one of my most meaningful builds. I learned that voice interfaces demand not just NLP accuracy but emotional calibration — how a model sounds can change how a learner feels.

From a technical standpoint, orchestrating GPT-4, 11Labs, and Supabase required designing resilient error-handling and fallback voices when APIs hit rate limits. I built a retry queue and graceful degradation so the lesson never stalls.

The next steps are to integrate visuals — whiteboards, diagrams, and quiz modules — and introduce analytics that show comprehension levels. I also plan to fine-tune smaller open-source models for offline use, making the platform accessible to schools with limited bandwidth.

Course Master reminded me why I build: to simplify learning through empathy and design. The goal now is to make this system open source so educators everywhere can create their own AI tutors.`,
  },

  // --------------------------------------------------
  // ONLINE EXAM MONITORING SYSTEM — 3 BLOGS
  // --------------------------------------------------
  {
    title:
      "Online Exam Monitoring System — Ensuring Integrity in Remote Testing",
    date: "October 2025",
    summary:
      "The shift to online exams brought new challenges in academic integrity. This post explores how I approached the idea of using AI to keep remote testing honest and fair.",
    content: `When remote exams surged during the pandemic, I noticed how vulnerable they were to misconduct. My idea was simple but ambitious: build a system that uses computer vision to ensure exam integrity without invading privacy.

The **Online Exam Monitoring System** merges AI and ethics. It combines a React/Node admin portal with a **Python/Flask** client that runs on a candidate’s device. The client uses **YOLOv5** to detect prohibited objects like phones and books, while **face_recognition** and **dlib** verify identity. It even tracks head pose to detect gaze deviation.

The motivation was fairness — not punishment. I wanted a tool that discouraged cheating while respecting honest students. Every decision, from where to store data (secure MongoDB) to how to notify invigilators, balanced transparency with trust.`,
  },
  {
    title:
      "Online Exam Monitoring System — Engineering the Proctoring Engine",
    date: "October 2025",
    summary:
      "From detection models to real-time dashboards, this article explains the technical underpinnings of the AI-powered exam monitoring system.",
    content: `The backend relies on a **Flask REST API** that streams webcam frames to a local inference engine. Each frame passes through YOLOv5 for object detection, then a face embedding check ensures the registered candidate is still in view. When anomalies occur, the system triggers events logged to MongoDB.

Administrators access a **React** dashboard where flagged incidents appear as thumbnails with timestamps. They can replay video segments or export logs as CSV/JSON for audit purposes. On the Node.js server, WebSockets push live notifications to proctors.

Optimizing performance was crucial. Running detection models locally avoids latency, while Flask handles lightweight REST calls. I also implemented OpenCV threading to process frames in parallel — achieving near real-time response even on mid-range hardware.`,
  },
  {
    title:
      "Online Exam Monitoring System — Lessons from Building AI for Fairness",
    date: "October 2025",
    summary:
      "Beyond code, building a proctoring tool raised ethical and technical lessons. Here’s what I learned about balancing detection accuracy with student trust.",
    content: `Building this system taught me that integrity can’t be automated — it must be supported. Algorithms can assist, but how they’re used defines their impact.

One challenge was false positives: a quick glance away could trigger suspicion. To fix this, I introduced dynamic thresholds that adapt to lighting and face angles. I also logged context — not just detections — to give reviewers the full picture.

Deploying the tool showed the importance of user experience: simple UI, clear alerts, and transparency about what’s monitored. As I refine it, I plan to integrate federated learning so the detection model improves over time without sending raw video data. Fairness, privacy, and trust remain at its core.`,
  },

  // --------------------------------------------------
  // FINVISTA — 3 BLOGS
  // --------------------------------------------------
  {
    title: "FinVista — Redefining Personal Finance Apps",
    date: "October 2025",
    summary:
      "FinVista started as a design challenge: could finance apps be analytical and beautiful? Here’s how I set out to build a personal finance experience that thinks like an advisor.",
    content: `Spreadsheets track money, but they rarely guide decisions. I wanted a tool that does both — tracking expenses while providing insight. That idea became **FinVista**, a modern finance app built with **Next.js**, **Tailwind**, and **shadcn/ui**.

The home page greets users with real metrics — uptime, transactions tracked, satisfaction ratings — because numbers build trust. Then it leads into analytics: spending by category, income vs. outflow, and trend forecasting.

The app’s visual simplicity hides depth: modular charts powered by **Recharts**, responsive grids, and API hooks ready for future banking integrations. FinVista proved that finance apps can be data-driven and delightful at once.`,
  },
  {
    title: "FinVista — Inside the Analytics Engine",
    date: "October 2025",
    summary:
      "This blog details the engineering behind FinVista’s real-time insights, from data pipelines to responsive front-end design.",
    content: `FinVista’s core uses an analytics pipeline that normalizes transaction data from multiple sources. A scheduled cron job aggregates daily expenses and stores summaries in a **PostgreSQL** schema. The front-end fetches this data through lightweight Next.js API routes and renders it with **Recharts** and D3-style transitions.

For prototype purposes, I simulated datasets using faker.js to stress-test visual components. Performance tuning involved React memoization and incremental static regeneration for dashboards.

On the UI side, every card and chart follows a design system defined in "shadcn/ui", ensuring brand consistency. Accessibility checks via axe-core guarantee color contrast and keyboard navigation. The architecture is ready for future integrations with Plaid or Stripe for live data.`,
  },
  {
    title: "FinVista — Designing for Trust and User Empowerment",
    date: "October 2025",
    summary:
      "Great fintech products build confidence. Here’s what I learned about balancing automation, privacy, and design in FinVista.",
    content: `Users trust apps that respect their data. From the start, I implemented secure storage patterns and avoided unnecessary analytics tracking. Every visual element reinforces clarity: green for savings, red for spending, and neutral grays for stability.

Beyond visuals, I added onboarding micro-interactions explaining how FinVista uses data. Transparency became part of UX. By focusing on empowerment — not just automation — FinVista encourages users to understand and control their finances.

Next, I plan to connect live banking APIs and add AI insights that suggest budgeting improvements. FinVista’s foundation is solid; the goal now is to make financial literacy accessible to everyone.`,
  },

  // --------------------------------------------------
  // FINBRIDGE — 3 BLOGS
  // --------------------------------------------------
  {
    title: "FinBridge — Connecting Data Pipelines to Business Insight",
    date: "October 2025",
    summary:
      "FinBridge grew out of a simple need: turn scattered financial data into a clean, reliable analytics layer for decision-makers.",
    content: `While building projects around finance and operations, I kept running into the same problem: data was everywhere, but insight was nowhere. **FinBridge** was my attempt to fix that — a backend-first project focused on reliable financial data pipelines.

FinBridge uses **FastAPI** with **SQLModel** to expose a clean API over transactional data stored in **PostgreSQL** and **MySQL**. ETL jobs normalize ledger entries, invoices, and payouts into a single schema that analytics tools can reach easily.

The goal wasn’t to build another dashboard, but to build the bridge underneath — a stable layer that other tools can trust. That mindset shaped everything from how I designed the models to how I wrote tests for the services.`,
  },
  {
    title: "FinBridge — Architecture, Services, and Testing Strategy",
    date: "October 2025",
    summary:
      "This post breaks down how FinBridge is structured: services, routes, models, and the test suite that keeps it all stable.",
    content: `FinBridge follows a clear separation of concerns: **routers** handle HTTP, **services** own the business logic, and **models** define persistence. Each module — assets, work orders, customers, and transactions — gets its own service layer.

I used **dependency injection** in FastAPI to keep services testable, and built a large **pytest** suite that mocks database sessions. This allowed me to write unit tests for edge cases like partial updates, pagination, and complex filters without hitting a real DB.

Coverage reports helped me spot untested branches in functions like asset search, dashboard aggregations, and code generation. Iterating on these tests taught me a lot about designing APIs that are both powerful and predictable.`,
  },
  {
    title: "FinBridge — What I Learned from Maintaining a Growing Codebase",
    date: "October 2025",
    summary:
      "Maintaining and refactoring FinBridge changed how I think about backend design, naming, and documentation.",
    content: `FinBridge wasn’t a one-week project. It evolved over multiple refactors — new routes, new services, and constant schema changes. That forced me to think like a maintainer, not just a builder.

I learned the value of clear naming, small pull requests, and detailed docstrings. When routes and services started to grow, I reorganized the project into feature-based folders, which made onboarding (even just for my future self) much easier.

Most importantly, FinBridge taught me that good backend code is about communication: APIs should be unsurprising, logs should be readable, and tests should explain the edge cases they protect. The project became a playground for disciplined engineering, not just experimentation.`,
  },

  // --------------------------------------------------
  // INTELLIGENT ARTS — 3 BLOGS
  // --------------------------------------------------
  {
    title: "Intelligent Arts — Building a Home for Books and Ideas",
    date: "October 2025",
    summary:
      "Intelligent Arts is my attempt to create a clean, modern home for books, authors, and long-form ideas on the web.",
    content: `I wanted a website that treated books and essays with the same respect a gallery gives art. That vision became **Intelligent Arts**, a React + Vite + Tailwind project focused on clarity, typography, and reading experience.

The landing page highlights curated books with a responsive grid, gentle gradients, and a hero carousel that introduces the collection. Each book links to a profile page that can host excerpts, metadata, and future purchase links.

Instead of stuffing everything into one page, I used separate routes for **Books**, **Archives**, **About**, and **Contact**, similar to a digital magazine. The goal: make it easy for readers to browse, linger, and come back.`,
  },
  {
    title: "Intelligent Arts — Content Architecture and Admin Workflow",
    date: "October 2025",
    summary:
      "This article covers how I structured content for Intelligent Arts so that new books and posts can be added without breaking the layout.",
    content: `Under the hood, Intelligent Arts uses a **single source of truth** for book data. A central JSON/JS file stores titles, authors, categories, blurbs, and image paths. Components like the hero carousel, book grid, and detail pages all read from this shared data layer.

This approach makes it easy to update content: adding a new book means updating one file, and the rest of the UI adapts automatically. It also keeps routing consistent — dynamic routes use the same IDs as the data file, so there are no mismatches between cards and detail views.

I designed the folder structure with future backend integration in mind, so a headless CMS or database can eventually replace the static data file with minimal changes to components.`,
  },
  {
    title: "Intelligent Arts — Designing for Readability and Long-Term Growth",
    date: "October 2025",
    summary:
      "With Intelligent Arts, I focused on typography, spacing, and responsiveness so that reading feels effortless on any device.",
    content: `Most people will experience Intelligent Arts on a phone or laptop, so responsive design wasn’t optional. I used **Tailwind CSS** to build a layout that scales cleanly from small screens to ultrawide monitors.

Typography was a big focus: clear headings, generous line height, and enough whitespace to make long paragraphs breathable. I also avoided flashy animations in reading areas to keep attention on the content itself.

Looking ahead, I plan to add author profiles, newsletter integration, and exportable reading lists. Intelligent Arts is more than a portfolio piece — it’s a foundation for future writing, publishing experiments, and collaborations.`,
  },
];

const Blog = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Page heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Avi&apos;s Blog
        </h1>
        <p className="text-gray-300 text-sm md:text-base text-center mb-10">
          Longer write-ups on the projects I&apos;ve built — what they do, how
          they work, and what I learned along the way.
        </p>

        {/* Responsive Grid: 1 / 2 / 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-[#e85a85]/25 transition cursor-pointer flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <p className="text-sm text-gray-300 mb-4">{post.summary}</p>
              </div>
              <button
                className="text-sm font-medium text-[#e85a85] hover:text-white mt-auto"
                onClick={() => setActivePost(post)}
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            <motion.div
              className="bg-[#1f1f1f] max-w-3xl w-full p-8 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] text-left"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {activePost.title}
              </h2>
              <p className="text-xs text-gray-400 mb-6">{activePost.date}</p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed whitespace-pre-line">
                {activePost.content}
              </p>
              <div className="text-right mt-8">
                <button
                  className="text-sm text-gray-300 hover:text-white font-medium border border-gray-500 px-4 py-2 rounded-lg"
                  onClick={() => setActivePost(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Blog;
