"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Mail, Home, Users, Briefcase, Box, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      {/* Top Bar with Contact Info */}
      <div className="hidden md:block bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+966 53 435 8144</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>sales@tabibalarabia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
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
            <span className="font-bold text-xl hidden md:inline group-hover:opacity-90 transition-all duration-300">
              <span className="text-blue-600">Tabib</span>
              <span className="text-yellow-500"> Al </span>
              <span className="text-blue-600">Arabia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link href="#about" className="nav-link flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link href="#services" className="nav-link flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link href="#products" className="nav-link flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
              <Box className="w-4 h-4" />
              <span>Our Products</span>
            </Link>
            <Link href="#team" className="nav-link flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </Link>
            <Link href="#contact">
              <Button className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
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
            {/* Mobile Contact Info */}
            <div className="px-4 py-2 space-y-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+966 53 435 8144</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>sales@tabibalarabia.com</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="#about"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link
              href="#services"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link
              href="#products"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Box className="w-4 h-4" />
              <span>Our Products</span>
            </Link>
            <Link
              href="#team"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-center flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

