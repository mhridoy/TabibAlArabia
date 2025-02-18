"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MaterialsGallery } from "./materials-gallery"

export function MaterialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("") 

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handleLearnMore = (category: string) => {
    setSelectedCategory(category)
    setIsGalleryOpen(true)
  }

  const materials = [
    {
      category: "Ferrous Metals",
      items: ["Iron", "Steel", "Cast Iron", "Heavy Melting Scrap"],
      image: "/Our Products/ferrous_images/image1.png",
      description: "High-quality ferrous metals including steel and iron products for industrial use.",
    },
    {
      category: "Non-Ferrous Metals",
      items: ["Copper", "Aluminum", "Brass", "Stainless Steel", "Lead", "Zinc"],
      image: "/Our Products/nonferrous_images/image1.jpeg",
      description: "Premium non-ferrous metals including copper, aluminum, and brass materials.",
    },
    {
      category: "Electronic Scrap & Industrial Metal Waste",
      items: ["E-Waste", "Industrial Metal Residues"],
      image: "https://i.postimg.cc/TKkWBcn1/Whats-App-Image-2025-02-17-at-10-18-34.jpg",
      description: "Responsible recycling of electronic waste and industrial metal residues.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background-secondary to-background"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />

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
              Types of Metals We Handle
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in processing and recycling a wide range of metal materials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={material.image}
                  alt={material.category}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{material.category}</h3>
                    <p className="text-gray-200 text-sm">{material.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-2 mb-4">
                  {material.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => handleLearnMore(material.category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <MaterialsGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        category={selectedCategory}
      />
    </section>
  )
}
