"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import "tailwindcss/tailwind.css"

const GradientBlob = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      <motion.div
        className="absolute -inset-[100%] bg-[length:50%_50%]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #00ffcc20 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, #33ff9920 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, #ff336620 0%, transparent 50%)
          `
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

const DynamicLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#00ffcc40] to-transparent"
          style={{
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            scaleY: [1, 2, 1],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1,
          }}
        />
      ))}
    </div>
  )
}

const Dots = () => {
  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00ffcc]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ModernGradientAnimation() {
  const [positions, setPositions] = useState<Array<{left: number, top: number}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Generate positions only on client-side
    const newPositions = Array.from({ length: 40 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
    setPositions(newPositions)
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Return nothing during SSR
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        <GradientBlob />
        <DynamicLines />
        <Dots />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          >
            <div 
              className="absolute w-1 h-1 rounded-full bg-[#00ffcc]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 