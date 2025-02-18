"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Gallery } from "./gallery"

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
      image: "/Our Products/ferrous_images/image1.jpeg",
      description: "High-quality ferrous metals including steel and iron products for industrial use.",
    },
    {
      category: "Non-Ferrous Metals",
      items: ["Copper", "Aluminum", "Brass", "Stainless Steel", "Lead", "Zinc"],
      image: "/Our Products/nonferrous_images/image1.jpeg",
      description: "Premium non-ferrous metals including copper, aluminum, and brass materials.",
    },
    {
      category: "All Products",
      items: ["View All Products"],
      image: "/Our Products/ferrous_images/image2.jpeg",
      description: "Browse our complete collection of ferrous and non-ferrous metals.",
    },
  ]

  return (
    <>
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
                className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.category}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
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
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => handleLearnMore(material.category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      View Gallery <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isGalleryOpen && (
        <Gallery 
          isOpen={isGalleryOpen} 
          onClose={() => setIsGalleryOpen(false)} 
          category={selectedCategory}
        />
      )}
    </>
  )
}
