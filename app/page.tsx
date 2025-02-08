"use client"

import { motion } from "framer-motion"
import Navigation from "./components/Navigation"
import { Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Terminal from "./components/Terminal"
// import Scene from "./components/Scene"

export default function Home() {
  return (
    <main className="h-screen bg-[#0a0118] text-white overflow-x-hidden">
      <Navigation />
      {/* <Scene /> */}
      
      {/* Hero Section */}
      <section className="h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Hello,
                <br />
                This is{" "}
                <span className="bg-gradient-to-r from-[#ff3366] to-[#ff6b6b] text-transparent bg-clip-text">
                  Dhruv Thakkar
                </span>
                <br />
                I'm a Professional{" "}
                <span className="bg-gradient-to-r from-[#00ffcc] to-[#33ff99] text-transparent bg-clip-text">
                  AI Engineer.
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-lg">
                Specializing in Large Language Models, RAG Systems, and AI Solutions
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  href="#contact"
                  className="bg-gradient-to-r from-[#00ffcc] to-[#33ff99] text-black px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
                <Link
                  href="#projects"
                  className="border border-[#00ffcc] text-[#00ffcc] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#00ffcc]/10 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-xl mx-auto lg:mx-0"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="bg-[#0a0118]">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div 
        className="fixed bottom-6 right-6 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="https://github.com"
          target="_blank"
          className="text-white/70 hover:text-white transition-colors"
        >
          <Github size={20} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-white/70 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </Link>
      </motion.div>
    </main>
  )
}

