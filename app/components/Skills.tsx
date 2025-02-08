"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { 
  Brain, 
  Database, 
  Cloud, 
  Code2, 
  Cpu, 
  Network,
  Bot,
  Boxes,
  Server,
  Workflow,
  GitBranch,
  Terminal as TerminalIcon
} from "lucide-react"
import React from "react"

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
  category: string
  angle?: number
  radius?: number
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const skills: Skill[] = [
    {
      name: "Large Language Models",
      icon: <Brain size={24} />,
      color: "#00ffcc",
      category: "AI"
    },
    {
      name: "RAG Systems",
      icon: <Database size={24} />,
      color: "#ff3366",
      category: "AI"
    },
    {
      name: "LLM Fine-tuning",
      icon: <Cpu size={24} />,
      color: "#33ff99",
      category: "AI"
    },
    {
      name: "Python Development",
      icon: <Code2 size={24} />,
      color: "#ffcc00",
      category: "Development"
    },
    {
      name: "PyTorch",
      icon: <Network size={24} />,
      color: "#ff6b6b",
      category: "AI"
    },
    {
      name: "LangChain",
      icon: <Bot size={24} />,
      color: "#00ffcc",
      category: "AI"
    },
    {
      name: "Hugging Face",
      icon: <Boxes size={24} />,
      color: "#ff3366",
      category: "AI"
    },
    {
      name: "FastAPI",
      icon: <Server size={24} />,
      color: "#33ff99",
      category: "Development"
    },
    {
      name: "Vector Databases",
      icon: <Database size={24} />,
      color: "#ffcc00",
      category: "Development"
    },
    {
      name: "MLOps",
      icon: <Workflow size={24} />,
      color: "#ff6b6b",
      category: "DevOps"
    },
    {
      name: "AWS SageMaker",
      icon: <Cloud size={24} />,
      color: "#00ffcc",
      category: "Cloud"
    },
    {
      name: "Git & Version Control",
      icon: <GitBranch size={24} />,
      color: "#ff3366",
      category: "DevOps"
    }
  ].map((skill, index) => {
    const totalSkills = 12
    return {
      ...skill,
      index
    }
  })

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setContainerSize({
        width: Math.min(width * 0.8, 1200),
        height: Math.min(height * 0.7, 800)
      })
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.1
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section ref={ref} id="skills" className="py-20 relative min-h-screen flex flex-col justify-center bg-[#0a0118]">
      <div className="absolute inset-0 bg-gradient-radial from-[#0a0118] via-[#0a0118] to-black opacity-80" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] to-[#33ff99]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Expertise
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={isInView ? "animate" : "initial"}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ffcc] to-[#33ff99] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div
                className="relative flex items-center gap-3 bg-[#0c0c1d] px-4 py-3 rounded-lg backdrop-blur-sm
                border border-[#ffffff10] hover:border-[#00ffcc40] transition-colors duration-300"
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <div style={{ color: skill.color }}>
                    {React.cloneElement(skill.icon as React.ReactElement, {
                      size: 20
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white whitespace-nowrap">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

