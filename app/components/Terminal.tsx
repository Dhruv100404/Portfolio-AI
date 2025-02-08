"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Terminal() {
  const [text, setText] = useState("")
  const fullText = `
> python3 load_profile.py
> Initializing AI environment...
> Loading Python packages...

NAME: Dhruv Thakkar
ROLE: Python & LLM Specialist
STATUS: Available for AI projects

SPECIALIZATIONS = [
    "Large Language Models",
    "Retrieval Augmented Generation",
    "LLM Fine-tuning & Optimization",
    "Production ML Systems",
    "Python Backend Development"
]

MISSION: Building next-generation AI systems
with Python and cutting-edge LLM technology.
`

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black border border-neon-green rounded-lg p-6 font-mono text-neon-green"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap">{text}</pre>
      <div className="animate-pulse">_</div>
    </motion.div>
  )
}

