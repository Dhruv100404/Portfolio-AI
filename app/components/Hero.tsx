"use client"

import { motion } from "framer-motion"
import Terminal from "./Terminal"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden bg-[#0a0118]">
      {/* Animated background grid */}
      <div className="absolute inset-0 ai-grid opacity-20" />
      
      {/* Radial gradient */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-3 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold space-y-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block text-white"
                >
                  Hello,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-[#ff3366]"
                >
                  I'm Dhruv Thakkar
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block"
                >
                  AI/ML Engineer &{" "}
                  <span className="text-[#00ffcc] text-glow relative inline-block">
                    LLM Specialist
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="absolute -right-4 top-0"
                    >
                      _
                    </motion.span>
                  </span>
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg md:text-xl"
            >
              Building next-generation AI systems with expertise in Large Language Models, 
              RAG Systems, and Machine Learning
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#projects"
                className="group relative border border-[#00ffcc] text-[#00ffcc] px-8 py-3 rounded-lg font-medium 
                         hover:bg-[#00ffcc]/10 transition-all duration-300"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-[#00ffcc]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-first lg:order-last floating"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-12 w-24 h-24 bg-[#00ffcc] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-1/4 -right-12 w-24 h-24 bg-[#ff3366] rounded-full blur-[120px] opacity-20" />
    </section>
  )
}

