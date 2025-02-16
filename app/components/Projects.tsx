"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import AnimatedBackground from "./ui/AnimatedBackground"
import { Github, ExternalLink, Folder, Code2, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import AIFlowAnimation from './ui/AIFlowAnimation'
import ModernGradientAnimation from './ui/ModernGradientAnimation'

interface Project {
  title: string
  description: string
  tech: string[]
  category: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projects: Project[] = [
    {
      title: "Enterprise RAG System",
      description: "Built a production-grade RAG system using LangChain, FastAPI, and Vector Databases with 95% accuracy in information retrieval. Implemented advanced caching and optimization techniques.",
      tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
      category: "AI Systems"
    },
    {
      title: "Learn AI",
      description: "Integration of CBSE curriculum with AI to provide personalized learning experiences.Functioning as a chatbot that can answer questions and provide explanations for the topics. With detailed explanations for the topics and giving page numbers to for thier reference.",
      tech: ["React", "Flask", "Tailwind CSS", "Python", "MongoDB"],
      category: "Machine Learning"
    },
    {
      title: "AI-Dialer",
      description: "Developed an intelligent dialing system using AI for automated call handling and routing. Integrated speech recognition and natural language processing for real-time conversation analysis. Further more it also schedules the calls and sends the emails to the clients of the call Schedule.",
      tech: ["Python", "TensorFlow", "FastAPI", "WebRTC",],
      category: "AI Systems"
    },
    {
      title: "Chatbot Development",
      description: "Created an advanced conversational AI chatbot with context awareness and multi-turn dialogue capabilities. Implemented custom training pipeline for domain-specific knowledge.",
      tech: ["Python", "LangChain", "OpenAI", "MongoDB",],
      category: "AI Systems"
    },
    {
      title: "SummerEase",
      description: "Built a text summarization platform using state-of-the-art language models. Features include Q/A with the Document and also the Summary of the Document. There was one more section in which the user can enter url and get the summary of the website.",
      tech: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL"],
      category: "Machine Learning"
    }
  ]

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 3000)
      return () => clearInterval(interval)
    }
  }, [isPaused, handleNext])

  return (
    <section id="projects" className="py-8 md:py-10 bg-[#0a0118] relative min-h-screen flex flex-col justify-center overflow-hidden">
      <AnimatedBackground />
      <ModernGradientAnimation />
      <AIFlowAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#00ffcc] bg-[#00ffcc15] px-4 py-2 rounded-full">
            FEATURED PROJECTS
          </span>
          <h2 className="text-4xl font-bold mt-4 text-white">Recent Work</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <div className="bg-[#0c0c1d]/90 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff15]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {projects[currentProject].description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-[#00ffcc15] text-[#00ffcc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentProject ? 1 : -1)
                  setCurrentProject(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentProject === index ? 'bg-[#00ffcc]' : 'bg-[#ffffff30]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

