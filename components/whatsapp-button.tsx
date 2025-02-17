"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/966534358144"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:from-green-600 hover:to-green-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageSquare className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" />
      <span className="font-medium">Contact Sales</span>
    </motion.a>
  )
}
