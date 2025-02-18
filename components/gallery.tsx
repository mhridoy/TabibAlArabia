"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { getImagesFromDirectory } from "@/utils/image-utils"

interface GalleryProps {
  isOpen: boolean
  onClose: () => void
  category?: string
}

export function Gallery({ isOpen, onClose, category }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [ferrousImages, setFerrousImages] = useState<string[]>([])
  const [nonFerrousImages, setNonFerrousImages] = useState<string[]>([])

  useEffect(() => {
    // Ferrous images (using .png extension)
    const ferrous = getImagesFromDirectory('Our Products/ferrous_images')
    setFerrousImages(ferrous)

    // Non-ferrous images (using .jpeg extension)
    const nonFerrous = getImagesFromDirectory('Our Products/nonferrous_images')
    setNonFerrousImages(nonFerrous)
  }, [])

  const images = !category || category === "All Products"
    ? [...ferrousImages, ...nonFerrousImages]
    : category === "Ferrous Metals"
    ? ferrousImages
    : category === "Non-Ferrous Metals"
    ? nonFerrousImages
    : []

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="h-6 w-6" />
      </button>

      {images.length > 0 && (
        <div className="relative max-w-4xl w-full aspect-video">
          <Image
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={handlePrevious}
              className="p-2 text-white hover:text-gray-300"
            >
              <X className="h-6 w-6 rotate-45" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-white hover:text-gray-300"
            >
              <X className="h-6 w-6 -rotate-45" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export function Gallery({ isOpen, onClose, category }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [ferrousImages, setFerrousImages] = useState<string[]>([])
  const [nonFerrousImages, setNonFerrousImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    // Ferrous images (using .png extension)
    const ferrous = getImagesFromDirectory('Our Products/ferrous_images')
    setFerrousImages(ferrous)

    // Non-ferrous images (using .jpeg extension)
    const nonFerrous = getImagesFromDirectory('Our Products/nonferrous_images')
    setNonFerrousImages(nonFerrous)
  }, [])

  const images = !category || category === "All Products"
    ? [...ferrousImages, ...nonFerrousImages]
    : category === "Ferrous Metals"
    ? ferrousImages
    : category === "Non-Ferrous Metals"
    ? nonFerrousImages
    : []

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
                  priority={index < 8}
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
              priority
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
