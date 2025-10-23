"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import AnimatedBackground from "./ui/AnimatedBackground"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AIFlowAnimation from './ui/AIFlowAnimation'
import ModernGradientAnimation from './ui/ModernGradientAnimation'
import "tailwindcss/tailwind.css"

interface Project {
  title: string
  description: string
  tech: string[]
  category: string
}

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projects: Project[] = [
    {
      title: "LogiAI",
      description: "Engineered an AI-powered logistics ecosystem deployed across various international client divisions, automating end-to-end workflows and reporting dashboards. Developed an automated quotation system that processes incoming Outlook emails, parses quotation details, and initiates the workflow for faster client response.",
      tech: ["Python", "AI/ML", "Outlook API", "Workflow Automation", "Dashboard"],
      category: "AI Systems"
    },
    {
      title: "Growstack",
      description: "Architected a Prompt-Based Workflow Builder for a no-code platform, enabling users to generate complex, custom workflows solely through natural language queries. Designed and implemented a Multi-Agent System to autonomously interpret user intent, decompose tasks, and assemble the corresponding sequence of workflow nodes.",
      tech: ["Python", "Multi-Agent Systems", "NLP", "No-Code Platform", "Workflow Builder"],
      category: "AI Systems"
    },
    {
      title: "uRecruits: Agentic Chatbot System",
      description: "Designed and architected the backend for an advanced recruitment chatbot with a fully agentic core, shifting from traditional logic to autonomous decision-making. Built a robust Multi-Agent System (MAS) to handle complex recruitment workflows, including candidate screening, personalized Q&A, and interview scheduling coordination.",
      tech: ["Python", "Multi-Agent Systems", "NLP", "Backend Architecture", "Recruitment AI"],
      category: "AI Systems"
    },
    {
      title: "Case Property Analysis",
      description: "Led a Prompt Engineering project focused on real estate case analysis, generating optimal legal strategies based on complex court documents and property case files. Developed a sophisticated prompt structure incorporating proprietary client legal strategies to enable the AI to provide data-driven recommendations for best-course-of-action.",
      tech: ["Python", "Prompt Engineering", "Legal AI", "Document Analysis", "Strategy Generation"],
      category: "AI Systems"
    },
    {
      title: "AI Dialer Voice Assistant",
      description: "Designed and developed a real-estate voice assistant with core features: brochure queries, appointment booking, and seamless integration with email & Google Calendar. Implemented a robust bulk calling engine and analytics dashboard, built entirely with a Python backend.",
      tech: ["Python", "Voice AI", "Google Calendar API", "Email Integration", "Analytics Dashboard"],
      category: "AI Systems"
    },
    {
      title: "LearnAI",
      description: "AI chatbot helping students learn CBSE curriculum via RAG-based Q&A. Integrated lipsync avatar, TTS & STT for a voice-enabled experience. Provides personalized learning experiences with detailed explanations and page references for comprehensive understanding.",
      tech: ["Python", "RAG", "TTS/STT", "Avatar Integration", "Educational AI"],
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "SoftwareSourceCode",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "programmingLanguage": project.tech
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#00ffcc15] text-[#00ffcc] hover:bg-[#00ffcc25] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#00ffcc15] text-[#00ffcc] hover:bg-[#00ffcc25] transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Navigation Dots */}
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
    </>
  )
}

