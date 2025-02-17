"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const materialImages = [
  "https://i.postimg.cc/hXM9cnRS/Whats-App-Image-2025-02-17-at-10-18-32.jpg",
  "https://i.postimg.cc/75qgF6cs/Whats-App-Image-2025-02-17-at-10-18-32-1.jpg",
  "https://i.postimg.cc/TKkWBcn1/Whats-App-Image-2025-02-17-at-10-18-34.jpg",
  "https://i.postimg.cc/4HCcBNV1/Whats-App-Image-2025-02-17-at-10-18-34-1.jpg",
  "https://i.postimg.cc/2bLvQBb6/Whats-App-Image-2025-02-17-at-10-18-34-2.jpg",
  "https://i.postimg.cc/nsPB91Lg/Whats-App-Image-2025-02-17-at-10-18-34-3.jpg",
  "https://i.postimg.cc/H8QyKDt1/Whats-App-Image-2025-02-17-at-10-18-34-4.jpg",
  "https://i.postimg.cc/23vh3hN9/Whats-App-Image-2025-02-17-at-10-18-34-5.jpg",
  "https://i.postimg.cc/WhvrZz2N/Whats-App-Image-2025-02-17-at-10-18-34-6.jpg",
  "https://i.postimg.cc/LhzgmSjr/Whats-App-Image-2025-02-17-at-10-18-34-7.jpg",
  "https://i.postimg.cc/mPZHdnzK/Whats-App-Image-2025-02-17-at-10-18-34-8.jpg",
  "https://i.postimg.cc/D8PGPhZq/Whats-App-Image-2025-02-17-at-10-18-34-9.jpg",
  "https://i.postimg.cc/5QMH8KW7/Whats-App-Image-2025-02-17-at-10-18-35.jpg",
  "https://i.postimg.cc/QBHWDWqb/Whats-App-Image-2025-02-17-at-10-18-35-1.jpg",
  "https://i.postimg.cc/zL6HGXt1/Whats-App-Image-2025-02-17-at-10-18-35-2.jpg",
  "https://i.postimg.cc/PpDpps9v/Whats-App-Image-2025-02-17-at-10-18-35-3.jpg",
]

interface MaterialsGalleryProps {
  isOpen: boolean
  onClose: () => void
  category?: string
}

export function MaterialsGallery({ isOpen, onClose, category }: MaterialsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {category || "Our Materials"}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {materialImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Preview Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative w-full max-w-7xl aspect-auto p-4"
                >
                  <Image
                    src={selectedImage}
                    alt="Preview"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
