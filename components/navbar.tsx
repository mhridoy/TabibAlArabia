"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Mail, Home, Users, Briefcase, Box, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const TopContactBar = () => (
    <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-2 px-4 border-b border-sky-500/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 group cursor-pointer">
            <MapPin className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
            <span>Dammam, Saudi Arabia</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 group cursor-pointer">
            <Phone className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
            <span>+966 53 435 8144</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 group cursor-pointer">
            <Mail className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
            <span>sales@tabibalarabia.com</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="fixed w-full z-50">
        <TopContactBar />
        
        {/* Main Navbar */}
        <nav className="w-full bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-sky-500/10 shadow-lg shadow-slate-950/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-[72px]">
              {/* Logo and Brand */}
              <Link href="/" className="flex items-center space-x-3 group hover:opacity-95 transition-all duration-500">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Tabib Al Arabia Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-3xl hidden md:inline group-hover:opacity-90 transition-all duration-500">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Tabib</span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg"> Al </span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Arabia</span>
            </span>
          </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="nav-link flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 relative py-1 px-3 rounded-full hover:bg-sky-500/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:transition-all after:duration-500">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link href="#about" className="nav-link flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 relative py-1 px-3 rounded-full hover:bg-sky-500/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:transition-all after:duration-500">
                  <Users className="w-4 h-4" />
                  <span>About Us</span>
                </Link>
                <Link href="#services" className="nav-link flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 relative py-1 px-3 rounded-full hover:bg-sky-500/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:transition-all after:duration-500">
                  <Briefcase className="w-4 h-4" />
                  <span>Services</span>
                </Link>
                <Link href="#products" className="nav-link flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 relative py-1 px-3 rounded-full hover:bg-sky-500/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:transition-all after:duration-500">
                  <Box className="w-4 h-4" />
                  <span>Our Products</span>
                </Link>
                <Link href="#team" className="nav-link flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-all duration-300 relative py-1 px-3 rounded-full hover:bg-sky-500/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:transition-all after:duration-500">
                  <Users className="w-4 h-4" />
                  <span>Our Team</span>
                </Link>
                <Link href="#contact">
                  <Button className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 hover:from-sky-500 hover:via-blue-500 hover:to-sky-500 text-white shadow-lg shadow-sky-900/20 hover:shadow-sky-500/30 hover:shadow-2xl transition-all duration-500 flex items-center space-x-2 rounded-full px-6 py-2 hover:scale-105 border border-sky-400/10">
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact Us</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-full hover:bg-sky-500/10 transition-all duration-300 text-gray-300 hover:text-sky-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {/* Mobile Contact Info */}
            <div className="px-4 py-4 space-y-3 bg-sky-950/30 rounded-xl border border-sky-500/20 backdrop-blur-xl">
              <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 group">
                <MapPin className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
                <span>Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 group">
                <Phone className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
                <span>+966 53 435 8144</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 group">
                <Mail className="w-4 h-4 text-amber-400 group-hover:text-sky-400 transition-all duration-300" />
                <span>sales@tabibalarabia.com</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="#about"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link
              href="#services"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link
              href="#products"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Box className="w-4 h-4" />
              <span>Our Products</span>
            </Link>
            <Link
              href="#team"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-center flex items-center space-x-2 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-400 hover:via-blue-400 hover:to-sky-400 text-white shadow-lg hover:shadow-sky-500/20 hover:shadow-2xl transition-all duration-500 rounded-xl py-4 hover:scale-105">
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
        </nav>
      </div>
      {/* Spacer for fixed navbar */}
      <div className="h-[132px]" />
    </>
  )
}

