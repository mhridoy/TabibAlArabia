"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div ref={sectionRef} className="section-fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Tabib Al Arabia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A trusted name in the scrap metal industry, delivering excellence in environmental services across Saudi
              Arabia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">About Us</h3>
                <p className="text-gray-600 mb-6">
                  Specializing in collection, processing, and export of high-quality ferrous and non-ferrous metals with
                  a commitment to environmental responsibility.
                </p>
                <Button variant="ghost" className="group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide sustainable and efficient metal recycling solutions while ensuring the highest standards of
                  environmental safety and customer satisfaction.
                </p>
                <Button variant="ghost" className="group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be a leading exporter of recycled metals in the Middle East and global markets, contributing to a
                  greener and more sustainable future.
                </p>
                <Button variant="ghost" className="group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

