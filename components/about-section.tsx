"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Recycle, Globe2, Shield } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "250,000+", label: "Metric Tonnes Volume Annually" },
    { value: "1,000+", label: "Satisfied Customers" },
    { value: "50+", label: "Global Partners" },
  ]

  const features = [
    {
      icon: Recycle,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly recycling methods for a greener future",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Connecting with international markets for optimal resource utilization",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Maintaining highest standards in metal processing and export",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div ref={sectionRef} className="space-y-24">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  About Tabib Al Arabia
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A trusted leader in the scrap metal industry, delivering excellence in environmental services across Saudi Arabia and beyond.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group hover:shadow-blue-200/50 transition-all duration-500"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/Our Products/nonferrous_images/image35.jpeg"
                  alt="Tabib Al Arabia Facility"
                  fill
                  className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 transform group-hover:scale-95 transition-transform duration-300" />
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide sustainable and efficient metal recycling solutions while ensuring the highest standards of environmental safety and customer satisfaction. We aim to be the bridge between responsible waste management and resource conservation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 transform group-hover:scale-95 transition-transform duration-300" />
              <Eye className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading force in sustainable metal recycling across the Middle East and global markets. We envision a future where waste is transformed into valuable resources, contributing to a cleaner, greener planet for generations to come.
              </p>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
