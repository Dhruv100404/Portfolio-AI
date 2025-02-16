"use client"

import { motion } from "framer-motion"
import {  SiPython, SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiJupyter, SiMongodb, SiGit, 
          SiReact, SiTailwindcss,SiFastapi,SiFlask,SiHuggingface} 
        from "react-icons/si"
import { BsRobot, BsDatabase } from "react-icons/bs"
import { GiPineTree } from "react-icons/gi"
import { VscAzure } from "react-icons/vsc"
export default function Skills() {
  const skills = [
    // AI/ML Core
    {
      name: "Python",
      icon: <SiPython className="w-8 h-8" />,
      color: "#3776AB"
    },
    {
      name: "LangChain",
      icon: <BsRobot className="w-8 h-8" />,
      color: "#00A67D"
    },
    {
      name: "OpenAI",
      icon: <SiOpenai className="w-8 h-8" />,
      color: "#412991"
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="w-8 h-8" />,
      color: "#009688"
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="w-8 h-8" />,
      color: "#EE4C2C"
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="w-8 h-8" />,
      color: "#FF6F00"
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface className="w-8 h-8" />,
      color: "#FFD21E"
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn className="w-8 h-8" />,
      color: "#F7931E"
    },
    {
      name: "RAG",
      icon: <BsDatabase className="w-8 h-8" />,
      color: "#00FFCC"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-8 h-8" />,
      color: "#47A248"
    },
    {
      name: "Pinecone",
      icon: <GiPineTree className="w-8 h-8" />,
      color: "#4169E1"
    },
    {
      name: "Git",
      icon: <SiGit className="w-8 h-8" />,
      color: "#F05032"
    },
    {
      name: "React",
      icon: <SiReact className="w-8 h-8" />,
      color: "#61DAFB"
    },
    {
      name: "Flask",
      icon: <SiFlask className="w-8 h-8" />,
      color: "#FFFFFF"
    },
    {
      name: "Jupyter Notebook",
      icon: <SiJupyter className="w-8 h-8" />,
      color: "#FFFFFF"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-8 h-8" />,
      color: "#38BDF8"
    },
    {
      name: "Azure",
      icon: <VscAzure className="w-8 h-8" />,
      color: "#0078D4"
    },  
  ]

  return (
    <section className="py-8 md:py-10 bg-[#0a0118] z-0">
      <div className="container mx-auto px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-block bg-[#0c0c1d] px-4 py-1.5 rounded-lg">
            <span className="text-xs md:text-sm font-medium text-[#00ffcc]">
              SKILLS & EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-3 text-white">
            Technical<br />Proficiency
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base px-3">
            Mastering cutting-edge AI and Machine Learning technologies to build 
            innovative, production-ready systems
          </p>
        </motion.div>

        <div className="grid grid-cols-5 md:grid-cols-7 gap-2 md:gap-4 max-w-6xl mx-auto px-2 md:px-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="w-full aspect-square bg-[#0a0118] rounded-lg md:rounded-xl 
                          flex items-center justify-center relative overflow-hidden 
                          border border-[#1a1a2e] hover:border-[#00ffcc20] transition-colors
                          group-hover:shadow-lg group-hover:shadow-[#00ffcc10]"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300" 
                     style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-1 md:mt-2 text-[10px] md:text-sm text-gray-400 text-center group-hover:text-[#00ffcc] 
                          transition-colors truncate px-1">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

