"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const floatingBubbles = Array(8).fill(null)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = ev
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      setMousePosition({ x, y })
      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-banner-image-how-to-start-a-scrap-business-in-india.jpg"
          alt="Scrap Business Banner"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 animate-pulse-soft bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Dynamic Mouse Follow Effect */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,184,0,0.2),transparent_50%)]"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>

        {/* Floating Bubbles */}
        {floatingBubbles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-yellow-400/20 backdrop-blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 z-20 relative"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-12 relative"
          >
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 rounded-full filter blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={180}
              height={180}
              className="mx-auto relative z-10"
            />
          </motion.div>

          {/* Animated Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                Leading Environmental
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="block mt-2 text-5xl md:text-7xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse-soft"
              >
                Services in Saudi Arabia
              </motion.span>
            </h1>

            {/* Animated Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-100 mb-12 font-light"
            >
              <span className="relative">
                Specializing in scrap metal export and sustainable
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </span>
              <br className="hidden md:block" />
              <span className="relative">
                waste management solutions
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 1 }}
                />
              </span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="#services">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-primary px-8 py-6 text-lg shadow-lg transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-white text-white hover:text-primary px-8 py-6 text-lg shadow-lg transition-all duration-500"
                >
                  <span className="relative z-10">Contact Us</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </section>
  )
}