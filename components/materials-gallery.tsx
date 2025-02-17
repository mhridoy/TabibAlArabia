"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const materialImages = [
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.32.jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.32 (1).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34.jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (1).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (2).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (3).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (4).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (5).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (6).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (7).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (8).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.34 (9).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35.jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (1).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (2).jpeg",
  "/Our Products/WhatsApp Image 2025-02-17 at 10.18.35 (3).jpeg"
]

interface MaterialsGalleryProps {
  isOpen: boolean
  onClose: () => void
  category?: string
}

export function MaterialsGallery({ isOpen, onClose, category }: MaterialsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl bg-white rounded-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">
            {category || "Our Materials"}
          </h3>
          <MotionButton
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </MotionButton>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Material ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

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
            <MotionButton
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </MotionButton>
          </div>
        </div>
      )}
    </div>
  )
}
