"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

// Optimized with fewer elements and CSS animations where possible
const HexGrid = () => {
  const hexPositions = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      left: (i % 4) * 33,
      top: Math.floor(i / 4) * 50,
      delay: i * 0.3
    })), []
  )

  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      {hexPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-[#00ffcc]">
            <path
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              fill="currentColor"
              fillOpacity="0.03"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Reduced from 8 to 3 floating shapes
const FloatingShapes = () => {
  const shapePositions = useMemo(() =>
    Array.from({ length: 3 }, (_, i) => ({
      left: 20 + i * 30,
      top: 20 + i * 20,
      delay: i * 1.5
    })), []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#00ffcc] to-[#33ff99] opacity-10 rounded-lg" />
        </motion.div>
      ))}
    </div>
  )
}

// Reduced from 15 to 6 data flow particles
const DataFlow = () => {
  const flowPositions = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      left: Math.random() * 80 + 10,
      top: Math.random() * 80 + 10,
      delay: i * 0.5
    })), []
  )

  return (
    <div className="absolute inset-0">
      {flowPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-[#00ffcc]"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function AIFlowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <HexGrid />
        <FloatingShapes />
        <DataFlow />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a011860] to-[#0a0118] pointer-events-none" />
      </div>
    </div>
  )
} 