"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Terminal() {
  const [text, setText] = useState("")
  const terminalRef = useRef<HTMLPreElement>(null)
  
  const fullText = `
> python3 load_profile.py
> Initializing AI environment...
> Loading dependencies...

NAME: Dhruv Thakkar
ROLE: AI/ML Engineer
STATUS: Available for AI Projects

SPECIALIZATIONS = [
    "Large Language Models (LLMs)",
    "Retrieval Augmented Generation (RAG)",
    "Natural Language Processing",
    "Machine Learning Systems",
]

MISSION: Building next-generation AI systems 
that push the boundaries of what's possible.

> Running system_check.py...
> All systems operational ✓
`

  useEffect(() => {
    let index = 0
    let isScrolling = false

    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
        
        if (terminalRef.current && !isScrolling) {
          isScrolling = true
          terminalRef.current.scrollTo({
            top: terminalRef.current.scrollHeight,
            behavior: 'smooth'
          })
          setTimeout(() => {
            isScrolling = false
          }, 100)
        }
      } else {
        clearInterval(timer)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black border border-[#00ffcc]/20 rounded-lg p-2 md:p-3 font-mono text-[#00ffcc] 
                w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[640px] mx-auto lg:mx-0"
    >
      {/* Terminal Header */}
      <div className="flex gap-1.5 mb-2 md:mb-3 px-1">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal Content */}
      <pre 
        ref={terminalRef} 
        className="whitespace-pre-wrap text-[11px] md:text-sm 
                  min-h-[200px] md:min-h-[280px] lg:min-h-[320px] 
                  max-h-[300px] md:max-h-[400px] lg:max-h-[420px] 
                  overflow-y-auto terminal-scrollbar px-2 md:px-3"
      >
        {text}
      </pre>
      <div className="animate-pulse text-sm md:text-base px-2">_</div>
    </motion.div>
  )
}

