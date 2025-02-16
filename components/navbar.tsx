"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Tabib Al Arabia Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hidden md:inline group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
              Tabib Al Arabia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            >
              Services
            </Link>
            <Link 
              href="#metals" 
              className="text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            >
              Materials
            </Link>
            <Link href="#contact">
              <Button className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#metals"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Materials
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-center">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

