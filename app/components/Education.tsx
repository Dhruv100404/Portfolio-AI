"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedBackground from "./ui/AnimatedBackground"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

interface Education {
  degree: string
  school: string
  location: string
  period: string
  description: string[]
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Dharmsinh Desai University",
      location: "Nadiad, Gujarat, India",
      period: "2021 - 2025",
      description: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Research focus on Large Language Models and their applications",
        "Graduated with Distinction",
      ]
    },
    {
      degree: "Senior Secondary School",
      school: "St.Xavier's High School",
      location: "Gandhinagar, Gujarat, India",
      period: "2019 - 2021",
      description: [
        "Proficient in Maths and Science",
        "Statistics and Probability were my favorite subjects",
        "Gujcet Percentile - 99.65",
      ]
    }
    // Add more education entries
  ]

  return (
    <section ref={ref} id="education" className="py-8 md:py-10 bg-[#0a0118] relative min-h-screen flex flex-col justify-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="text-sm font-medium text-[#00ffcc] bg-[#00ffcc15] px-4 py-2 rounded-full mb-4 inline-block">
              EDUCATION
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] to-[#33ff99]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Academic Background
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 group"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#00ffcc20] to-[#33ff9920] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              
              <div className="relative bg-[#0c0c1d] p-6 rounded-xl border border-[#ffffff15] hover:border-[#00ffcc40] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#00ffcc15]">
                    <GraduationCap className="text-[#00ffcc]" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-[#00ffcc] mb-4">{edu.school}</h4>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

