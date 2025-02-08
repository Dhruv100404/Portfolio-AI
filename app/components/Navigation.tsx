"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#33ff99] text-transparent bg-clip-text hover:scale-105 transition-transform"
            >
              Dhruv Thakkar
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="relative text-white/70 hover:text-white transition-colors group py-2"
                  >
                    {section.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ffcc] scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${section.id}`}
                      className="text-2xl font-light text-white/70 hover:text-white transition-colors py-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {section.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

