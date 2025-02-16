"use client"

import { motion } from "framer-motion"
import Navigation from "./components/Navigation"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Hero from "./components/Hero"
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <main className="bg-[#0a0118] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      
      {/* Content Sections */}
      <div className="bg-[#0a0118] space-y-4 md:space-y-6">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Skills />
          <Projects />
          <Education />
        </motion.div>
      </div>
    </main>
  )
}

