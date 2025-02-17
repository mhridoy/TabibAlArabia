"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
    src: "https://i.postimg.cc/hXM9cnRS/Whats-App-Image-2025-02-17-at-10-18-32.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-32",
    href: "https://postimg.cc/hXM9cnRS"
  },
  {
    src: "https://i.postimg.cc/75qgF6cs/Whats-App-Image-2025-02-17-at-10-18-32-1.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-32-1",
    href: "https://postimg.cc/75qgF6cs"
  },
  {
    src: "https://i.postimg.cc/TKkWBcn1/Whats-App-Image-2025-02-17-at-10-18-34.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34",
    href: "https://postimg.cc/TKkWBcn1"
  },
  {
    src: "https://i.postimg.cc/4HCcBNV1/Whats-App-Image-2025-02-17-at-10-18-34-1.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-1",
    href: "https://postimg.cc/4HCcBNV1"
  },
  {
    src: "https://i.postimg.cc/2bLvQBb6/Whats-App-Image-2025-02-17-at-10-18-34-2.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-2",
    href: "https://postimg.cc/2bLvQBb6"
  },
  {
    src: "https://i.postimg.cc/nsPB91Lg/Whats-App-Image-2025-02-17-at-10-18-34-3.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-3",
    href: "https://postimg.cc/nsPB91Lg"
  },
  {
    src: "https://i.postimg.cc/H8QyKDt1/Whats-App-Image-2025-02-17-at-10-18-34-4.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-4",
    href: "https://postimg.cc/H8QyKDt1"
  },
  {
    src: "https://i.postimg.cc/23vh3hN9/Whats-App-Image-2025-02-17-at-10-18-34-5.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-5",
    href: "https://postimg.cc/23vh3hN9"
  },
  {
    src: "https://i.postimg.cc/WhvrZz2N/Whats-App-Image-2025-02-17-at-10-18-34-6.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-6",
    href: "https://postimg.cc/WhvrZz2N"
  },
  {
    src: "https://i.postimg.cc/LhzgmSjr/Whats-App-Image-2025-02-17-at-10-18-34-7.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-7",
    href: "https://postimg.cc/LhzgmSjr"
  },
  {
    src: "https://i.postimg.cc/mPZHdnzK/Whats-App-Image-2025-02-17-at-10-18-34-8.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-8",
    href: "https://postimg.cc/mPZHdnzK"
  },
  {
    src: "https://i.postimg.cc/D8PGPhZq/Whats-App-Image-2025-02-17-at-10-18-34-9.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-34-9",
    href: "https://postimg.cc/D8PGPhZq"
  },
  {
    src: "https://i.postimg.cc/5QMH8KW7/Whats-App-Image-2025-02-17-at-10-18-35.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-35",
    href: "https://postimg.cc/5QMH8KW7"
  },
  {
    src: "https://i.postimg.cc/QBHWDWqb/Whats-App-Image-2025-02-17-at-10-18-35-1.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-35-1",
    href: "https://postimg.cc/QBHWDWqb"
  },
  {
    src: "https://i.postimg.cc/zL6HGXt1/Whats-App-Image-2025-02-17-at-10-18-35-2.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-35-2",
    href: "https://postimg.cc/zL6HGXt1"
  },
  {
    src: "https://i.postimg.cc/PpDpps9v/Whats-App-Image-2025-02-17-at-10-18-35-3.jpg",
    alt: "Whats-App-Image-2025-02-17-at-10-18-35-3",
    href: "https://postimg.cc/PpDpps9v"
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-secondary to-background py-20">
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
