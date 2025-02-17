"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Recycle, Globe, Leaf, Cog, FileCheck } from "lucide-react"

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const services = [
    {
      icon: <Recycle />,
      title: "Scrap Metal Collection & Recycling",
      description: "Handling and processing ferrous & non-ferrous metals with state-of-the-art equipment.",
    },
    {
      icon: <Cog />,
      title: "Metal Sorting & Processing",
      description: "Advanced techniques to separate and refine different metal types for optimal recycling.",
    },
    {
      icon: <Globe />,
      title: "Global Export",
      description: "Efficient worldwide shipping of processed metals.",
    },
    {
      icon: <Leaf />,
      title: "Environmental Compliance",
      description: "Ensuring all operations follow eco-friendly standards and sustainability practices.",
    },
    {
      icon: <FileCheck />,
      title: "Custom Metal Solutions",
      description: "Tailored services based on client needs for bulk metal procurement and processing.",
    },
  ]

  return (
    <section id="services" ref={containerRef} className="relative py-32 overflow-hidden">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive metal recycling and environmental solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary w-8 h-8 transform group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
