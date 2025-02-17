"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const productImages = [
  // Ferrous Metals
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.32.jpeg",
    alt: "Ferrous Metal Product 1"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.32 (1).jpeg",
    alt: "Ferrous Metal Product 2"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34.jpeg",
    alt: "Ferrous Metal Product 3"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (1).jpeg",
    alt: "Non-Ferrous Metal Product 1"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (2).jpeg",
    alt: "Non-Ferrous Metal Product 2"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (3).jpeg",
    alt: "Non-Ferrous Metal Product 3"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (4).jpeg",
    alt: "E-Waste Product 1"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (5).jpeg",
    alt: "Metal Product 8"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (6).jpeg",
    alt: "Metal Product 9"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (7).jpeg",
    alt: "Metal Product 10"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (8).jpeg",
    alt: "Metal Product 11"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (9).jpeg",
    alt: "Metal Product 12"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35.jpeg",
    alt: "Metal Product 13"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (1).jpeg",
    alt: "Metal Product 14"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (2).jpeg",
    alt: "Metal Product 15"
  },
  {
    src: "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (3).jpeg",
    alt: "Metal Product 16"
  }
]

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background-secondary to-background py-20">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality metal products and materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl"
            >
              <div className="block w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
