"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Clock, Building, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We're here to help and answer any question you might have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 transform -skew-y-6 rounded-3xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Your message here..." 
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">123 Business Street, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@tabibalrabia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+971 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Office</h4>
                  <p className="text-gray-600">Main Branch - Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
