import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BackgroundElements } from "@/components/background-elements"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const notoNaskhArabic = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-noto-naskh-arabic" })

export const metadata: Metadata = {
  title: "Tabib Al Arabia - Environmental Services",
  description: "Leading scrap metal export and environmental services in Saudi Arabia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} ${oswald.variable} ${notoNaskhArabic.variable}`}>
        <BackgroundElements />
        <LanguageSwitcher />
        <Navbar />
        <main>{children}</main>
        <Footer />
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
      </body>
    </html>
  )
}

