"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryProps {
  isOpen: boolean
  onClose: () => void
  category?: string
}

const getImagesForCategory = (category?: string) => {
  // Ferrous images (using .png extension)
  const ferrousImageNumbers = [1, 2, 4, 6, 9]
  const ferrousImages = ferrousImageNumbers.map(num => 
    `/Our Products/ferrous_images/image${num}.png`
  )

  // Non-ferrous images (using .jpeg extension)
  const nonFerrousImageNumbers = [
    1, 3, 4, 5, 8, 10, 11, 12, 13, 16, 17, 18, 20, 21, 22, 23, 24, 26, 27, 29, 30,
    31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 48, 49, 50, 52, 53, 54, 55,
    56, 58, 59, 60, 63, 65, 66, 68, 72, 73, 75, 76, 77, 78, 79, 82, 85, 87, 88,
    90, 91, 94, 96, 97, 98, 99, 100
  ]
  const nonFerrousImages = nonFerrousImageNumbers.map(num => 
    `/Our Products/nonferrous_images/image${num}.jpeg`
  )

  if (!category || category === "All Products") {
    return [...ferrousImages, ...nonFerrousImages]
  } else if (category === "Ferrous Metals") {
    return ferrousImages
  } else if (category === "Non-Ferrous Metals") {
    return nonFerrousImages
  }
  return []
}

export function Gallery({ isOpen, onClose, category }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    setImages(getImagesForCategory(category))
  }, [category])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
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
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
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
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
