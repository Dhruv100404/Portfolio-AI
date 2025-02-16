"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const HexGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="relative w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#00ffcc]">
              <path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="currentColor"
                fillOpacity="0.05"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc] to-[#33ff99] opacity-10 rounded-lg" />
            <div className="absolute inset-0 border border-[#00ffcc] rounded-lg opacity-30" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const DataFlow = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#00ffcc]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function AIFlowAnimation() {
  const [positions, setPositions] = useState<Array<{left: number, top: number}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Generate positions only on client-side
    const newPositions = Array.from({ length: 15 }, () => ({
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <HexGrid />
        <FloatingShapes />
        <DataFlow />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a011880] to-[#0a0118] pointer-events-none" />
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
} 