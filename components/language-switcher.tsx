"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
    // Here you would typically update the app's language context
    // and trigger a re-render of translated components
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="fixed top-4 right-4 z-50">
      {language === "en" ? "العربية" : "English"}
    </Button>
  )
}

