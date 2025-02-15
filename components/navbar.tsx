"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TABIB%20AL%20ARABIA%20LOGO%20%20PNG-8-xRhnViYaEo5kiEmu9KZEoAXVacgZ2w.png"
              alt="Tabib Al Arabia Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="font-bold text-xl text-primary hidden md:inline">Tabib Al Arabia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#metals" className="text-gray-600 hover:text-primary transition-colors">
              Materials
            </Link>
            <Link href="#contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#metals"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Materials
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

