"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = ev;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      containerRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-banner-image-how-to-start-a-scrap-business-in-india.jpg"
          alt="Scrap Business Banner"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
      </div>

      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 rounded-full bg-yellow-400/20 backdrop-blur-sm"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0
          }}
          animate={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}

      <motion.div className="container mx-auto px-4 z-20 relative" style={{ y, opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-12 relative"
          >
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 rounded-full filter blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <Image src="/logo.jpeg" alt="Company Logo" width={180} height={180} className="mx-auto relative z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="block">Leading Environmental</span>
              <span className="block mt-2 text-5xl md:text-7xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Services in Saudi Arabia
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light">
            Leading the industry in scrap metal export and sales, ensuring quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#services">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-primary px-8 py-6 text-lg shadow-lg">
                  <span className="flex items-center">Explore Our Services <ArrowRight className="ml-2 h-5 w-5" /></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:text-primary px-8 py-6 text-lg shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </section>
  );
}
