"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-background-secondary"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,51,102,0.1),transparent_50%)]"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our environmental services and metal recycling solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Building, title: "Company Name", content: "Tabib Al Arabia For Environmental Services Co" },
                  { icon: MapPin, title: "Address", content: "Dammam, Saudi Arabia" },
                  { icon: Phone, title: "Phone", content: "+966 53 435 8144", href: "tel:+966534358144" },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "sales@tabibalarabia.com",
                    href: "mailto:sales@tabibalarabia.com",
                  },
                  { icon: Clock, title: "Working Hours", content: "Sunday - Thursday: 9:00 AM - 6:00 PM" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.5258047406063!2d49.96362111286657!3d26.485218596740758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e36010ec53129d1%3A0x2218a1942fc85035!2sTabib%20Al%20Arabia%20For%20Environmental%20Services%20Co!5e0!3m2!1sen!2ssa!4v1739605139464!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">First Name</label>
                  <Input placeholder="John" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Last Name</label>
                  <Input placeholder="Doe" className="bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Phone</label>
                <Input type="tel" placeholder="+966 XX XXX XXXX" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-white" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

