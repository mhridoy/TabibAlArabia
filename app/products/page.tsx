"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const getImagesForCategory = () => {
  // Ferrous images are numbered 1-20 (missing 17)
  const ferrousImages = Array.from({ length: 19 }, (_, i) => {
    const num = i + 1
    if (num >= 17) return `/Our Products/ferrous_images/image${num + 1}.jpeg`
    return `/Our Products/ferrous_images/image${num}.jpeg`
  })

  // Non-ferrous images have specific numbers
  const nonFerrousImageNumbers = [
    1, 2, 3, 4, 10, 14, 24, 27, 29, 30, 34, 35, 37, 38, 39, 40, 41,
    54, 58, 59, 60, 61, 62, 65, 69, 70, 71, 72, 73, 74, 75
  ]
  const nonFerrousImages = nonFerrousImageNumbers.map(num => 
    `/Our Products/nonferrous_images/image${num}.jpeg`
  )

  return [...ferrousImages, ...nonFerrousImages]
}

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const images = getImagesForCategory()

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
            Discover our wide range of high-quality metal products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Metal Product ${index + 1}`}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-7xl aspect-auto p-4">
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
