"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Mail, Home, Users, Briefcase, Box, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const TopContactBar = () => (
    <div className="w-full bg-gradient-to-r from-slate-100 via-white to-slate-100 text-slate-800 py-2 px-4 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 group cursor-pointer font-medium">
            <MapPin className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-all duration-300" />
            <span>Dammam, Saudi Arabia</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 group cursor-pointer font-medium">
            <Phone className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-all duration-300" />
            <span>+966 53 435 8144</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 group cursor-pointer font-medium">
            <Mail className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-all duration-300" />
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
        <nav className="w-full bg-white border-b border-slate-200 shadow-md">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Brand */}
              <Link href="/" className="flex items-center space-x-4 group hover:opacity-95 transition-all duration-500">
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt="Tabib Al Arabia Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col space-y-0.5 hidden md:block">
              <span className="text-2xl tracking-[0.2em] font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-clip-text text-transparent uppercase font-[var(--font-oswald)] drop-shadow-lg text-center">TABIB AL ARABIA</span>
              <span className="text-base font-medium bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent text-center font-[var(--font-noto-naskh-arabic)] drop-shadow-md block">طبيب العربية</span>
            </div>
          </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="nav-link flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 relative py-1.5 px-3 rounded-lg hover:bg-blue-50 font-medium text-sm">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link href="#about" className="nav-link flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 relative py-1.5 px-3 rounded-lg hover:bg-blue-50 font-medium text-sm">
                  <Users className="w-4 h-4" />
                  <span>About Us</span>
                </Link>
                <Link href="#services" className="nav-link flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 relative py-1.5 px-3 rounded-lg hover:bg-blue-50 font-medium text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Our Services</span>
                </Link>
                <Link href="/products" className="nav-link flex items-center space-x-2 text-slate-700 hover:text-blue-700 transition-all duration-300 relative py-1.5 px-3 rounded-lg hover:bg-blue-50 font-medium text-sm">
                  <Box className="w-4 h-4" />
                  <span>Our Products</span>
                </Link>

                <Link href="#contact">
                  <Button className="bg-black hover:bg-gray-800 text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-2 rounded-lg px-4 py-1.5 text-sm font-medium">
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
              <span>Our Services</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Box className="w-4 h-4" />
              <span>Our Products</span>
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

