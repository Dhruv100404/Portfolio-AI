"use client"

import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import "tailwindcss/tailwind.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 500)
      
      const sections = ["hero", "projects", "skills", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
  ]

  const socialLinks = [
    { 
      href: "https://github.com/Dhruv100404", 
      icon: <Github size={20} />,
      label: "GitHub"
    },
    { 
      href: "https://www.linkedin.com/in/dhruv-thakkar-2b0376219/", 
      icon: <Linkedin size={20} />,
      label: "LinkedIn"
    },
    { 
      href: "mailto:dhruvthakkar104@gmail.com", 
      icon: <Mail size={20} />,
      label: "Email"
    },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/20 via-[#0a0118]/10 to-[#ff3366]/20 blur-sm" />
        
        {/* Main navbar */}
        <div className="relative bg-[#0a0118]/80 backdrop-blur-md border-b border-[#ffffff10]">
          <nav className="container mx-auto px-3 h-14 md:h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-lg md:text-xl font-bold text-white relative group"
            >
              <span className="relative z-10">Dhruv Thakkar</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00ffcc] to-[#ff3366] opacity-0 
                group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 group`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-[#00ffcc]/5 rounded-lg scale-0 group-hover:scale-100 
                      transition-transform duration-200" />
                  {/* Active indicator - Modified */}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 
                      origin-left transform"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="relative p-2 group text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-[#00ffcc]/10 rounded-lg scale-0 group-hover:scale-100 
                    transition-transform duration-200" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 text-gray-400 hover:text-white group"
            >
              <span className="relative z-10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
              <span className="absolute inset-0 bg-[#00ffcc]/10 rounded-lg scale-0 group-hover:scale-100 
                transition-transform duration-200" />
            </button>
          </nav>
        </div>
      </header>

      {/* Height compensation */}
      <div className="h-14 md:h-16" />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="md:hidden fixed inset-0 z-[60] bg-[#0a0118]/95 backdrop-blur-md"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-medium relative group ${
                activeSection === item.href.slice(1)
                  ? "text-[#00ffcc]"
                  : "text-gray-400"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-[#00ffcc]/5 rounded-lg scale-0 group-hover:scale-100 
                transition-transform duration-200" />
            </Link>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex items-center space-x-6 mt-8">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        className="fixed bottom-6 right-6 p-3 bg-[#00ffcc]/10 text-[#00ffcc] rounded-lg 
          hover:bg-[#00ffcc]/20 transition-colors z-50"
      >
        <span className="sr-only">Back to top</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  )
}

