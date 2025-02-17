import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BackgroundElements } from "@/components/background-elements"
import { WhatsAppButton } from "@/components/whatsapp-button"

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
        <WhatsAppButton />
      </body>
    </html>
  )
}

