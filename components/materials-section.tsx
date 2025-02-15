"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MaterialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const materials = [
    {
      category: "Ferrous Metals",
      items: ["Iron", "Steel", "Cast Iron", "Heavy Melting Scrap"],
      image:
        "https://sjc.microlink.io/sLcjTJL5fur80LB52qM8ce7_Ei1E5PpR24k7r6ddSL_5Ivz9imwPBK5zyjsVmXpMkhNbtoQUPzZgj9QwJtIA4g.jpeg",
      description: "High-quality ferrous metals including steel and iron products for industrial use.",
    },
    {
      category: "Non-Ferrous Metals",
      items: ["Copper", "Aluminum", "Brass", "Stainless Steel", "Lead", "Zinc"],
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop",
      description: "Premium non-ferrous metals including copper, aluminum, and brass materials.",
    },
    {
      category: "Electronic Scrap & Industrial Metal Waste",
      items: ["E-Waste", "Industrial Metal Residues"],
      image:
        "https://media.istockphoto.com/id/172777435/photo/dump-full-of-old-computers-and-gadgets.jpg?s=612x612&w=0&k=20&c=JBph0toK_33zJv2zGfyGl50bJGFc-jf-FfHp1LlEXAU=",
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
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]"
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

