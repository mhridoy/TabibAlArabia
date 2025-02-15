import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BackgroundElements } from "@/components/background-elements"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <BackgroundElements />
        <LanguageSwitcher />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

