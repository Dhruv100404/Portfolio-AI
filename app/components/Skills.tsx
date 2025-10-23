"use client"

import { motion } from "framer-motion"
import { 
  SiPython, SiPytorch, SiOpenai, 
  SiReact, SiTailwindcss, SiFastapi, SiFlask, SiJavascript, SiDocker,
  SiMicrosoftazure, SiPandas, SiNextdotjs, SiTypescript,
  SiMysql
} from "react-icons/si"
import { BsRobot, BsDatabase, BsVoicemail} from "react-icons/bs"
import { GiArtificialIntelligence, GiCyberEye, GiCircuitry } from "react-icons/gi"
import { VscAzure } from "react-icons/vsc"
import { FaCloud, FaRocket } from "react-icons/fa"
import { MdGraphicEq } from "react-icons/md"
import { TbBrain } from "react-icons/tb"
import { HiSparkles } from "react-icons/hi"
import { RiAiGenerate } from "react-icons/ri"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI/LLM Engineering",
      icon: <TbBrain className="w-5 h-5" />,
      color: "#00ffcc",
      gradient: "from-[#00ffcc] to-[#00d4aa]",
      skills: [
        { name: "Multi-Agent Systems", icon: <BsRobot className="w-6 h-6" />, color: "#00ffcc", glow: true },
        { name: "Prompt Engineering", icon: <RiAiGenerate className="w-6 h-6" />, color: "#ff6b6b", glow: true },
        { name: "RAG Systems", icon: <BsDatabase className="w-6 h-6" />, color: "#4ecdc4", glow: true },
        { name: "LLM Finetuning", icon: <GiArtificialIntelligence className="w-6 h-6" />, color: "#ffe66d", glow: true },
        { name: "OpenAI GPT", icon: <SiOpenai className="w-6 h-6" />, color: "#74c0fc", glow: true },
        { name: "CrewAI", icon: <BsRobot className="w-6 h-6" />, color: "#00ffcc", glow: true },
        { name: "LangGraph", icon: <MdGraphicEq className="w-6 h-6" />, color: "#ff6b6b", glow: true },
        { name: "PyTorch", icon: <SiPytorch className="w-6 h-6" />, color: "#ee4c2c", glow: true }
      ]
    },
    {
      title: "Cloud & Backend",
      icon: <FaCloud className="w-5 h-5" />,
      color: "#0078D4",
      gradient: "from-[#0078D4] to-[#005a9f]",
      skills: [
        { name: "Azure AI Services", icon: <VscAzure className="w-6 h-6" />, color: "#0078D4", glow: true },
        { name: "Azure CosmosDB", icon: <SiMicrosoftazure className="w-6 h-6" />, color: "#00d4ff", glow: true },
        { name: "ChromaDB", icon: <BsDatabase className="w-6 h-6" />, color: "#ff9f43", glow: true },
        { name: "Docker", icon: <SiDocker className="w-6 h-6" />, color: "#2ed573", glow: true },
        { name: "Python", icon: <SiPython className="w-6 h-6" />, color: "#ffa502", glow: true },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6" />, color: "#26de81", glow: true },
        { name: "Pandas", icon: <SiPandas className="w-6 h-6" />, color: "#a55eea", glow: true },
        { name: "SQL", icon: <SiMysql className="w-6 h-6" />, color: "#4db33d", glow: true },
      ]
    },
    {
      title: "Frontend & Frameworks",
      icon: <FaRocket className="w-5 h-5" />,
      color: "#ff6b6b",
      gradient: "from-[#ff6b6b] to-[#ee5a52]",
      skills: [
        { name: "React", icon: <SiReact className="w-6 h-6" />, color: "#61dafb", glow: true },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" />, color: "#ffffff", glow: true },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, color: "#3178c6", glow: true },
        { name: "JavaScript ES6+", icon: <SiJavascript className="w-6 h-6" />, color: "#f7df1e", glow: true },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, color: "#06b6d4", glow: true },
        { name: "Flask", icon: <SiFlask className="w-6 h-6" />, color: "#000000", glow: true },
        { name: "Vapi.ai", icon: <BsVoicemail className="w-6 h-6" />, color: "#74c0fc", glow: true },
        { name: "Langchain", icon: <TbBrain className="w-6 h-6" />, color: "#00ffcc", glow: true },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="py-12 md:py-16 bg-[#0a0118] relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffcc20] to-transparent animate-pulse"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,204,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,204,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        
        {/* Floating Orbs */}
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00ffcc] to-[#0078D4] rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 1}}}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-[#ff6b6b] to-[#ffa502] rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-[#a55eea] to-[#26de81] rounded-full blur-3xl opacity-15"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            animate={pulseAnimation}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0c0c1d] to-[#1a1a2e] px-6 py-2 rounded-full border border-[#00ffcc30] backdrop-blur-sm"
          >
            <HiSparkles className="w-4 h-4 text-[#00ffcc]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#00ffcc] to-[#0078D4] bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </span>
            <HiSparkles className="w-4 h-4 text-[#00ffcc]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4"
          >
            <span className="text-white">Technical</span>
            <br />
            <span className="bg-gradient-to-r from-[#00ffcc] via-[#0078D4] to-[#ff6b6b] bg-clip-text text-transparent animate-pulse">
              Proficiency
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Mastering cutting-edge AI and ML technologies with{" "}
            <span className="text-[#00ffcc] font-semibold">futuristic innovation</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500"
                   style={{ background: `linear-gradient(45deg, ${category.color}, transparent, ${category.color})` }}>
              </div>
              
              <div className="relative bg-gradient-to-br from-[#0c0c1d] to-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a3e] backdrop-blur-sm overflow-hidden">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-2 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}
                    style={{ 
                      boxShadow: `0 0 20px ${category.color}40`
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotateZ: 2,
                        transition: { duration: 0.2 }
                      }}
                      className="group/skill cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-[#0a0118] to-[#1a1a2e] rounded-xl p-4 border border-[#2a2a3e] hover:border-opacity-50 transition-all duration-300 relative overflow-hidden">
                        {/* Skill Glow Effect */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        
                        <motion.div 
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center mb-3 relative z-10"
                          style={{ 
                            color: skill.color,
                            filter: skill.glow ? `drop-shadow(0 0 8px ${skill.color}60)` : 'none'
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        
                        <p className="text-xs text-gray-400 text-center group-hover/skill:text-white transition-colors font-medium leading-tight relative z-10">
                          {skill.name}
                        </p>
                        
                        {/* Animated Background Pattern */}
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute -top-4 -right-4 w-8 h-8 opacity-5"
                        >
                          <GiCircuitry className="w-full h-full text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Category Background Pattern */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-8 -right-8 w-24 h-24 opacity-5"
                >
                  <GiCyberEye className="w-full h-full" style={{ color: category.color }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

