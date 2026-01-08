"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Container */}
          <div className="flex items-center">
            {/* Container com a cor oficial #f78608.
               'p-1' adicionado para garantir que o logo não toque nas bordas se for muito grande.
               'object-contain' garante que o logo apareça inteiro.
            */}
            <div className="relative w-32 h-10 bg-[#f78608] rounded overflow-hidden flex items-center justify-center p-1">
              <Image 
                src="/logoweeat.webp" 
                alt="WeEat Logo"
                fill
                className="object-contain" 
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#metodo"
              className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
            >
              Método
            </a>
            <a
              href="#cases"
              className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
            >
              Cases
            </a>
            <a
              href="#planos"
              className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
            >
              Planos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-6 font-[family-name:var(--font-poppins)] transition-transform hover:scale-105">
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#metodo"
                className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
              >
                Método
              </a>
              <a
                href="#cases"
                className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
              >
                Cases
              </a>
              <a
                href="#planos"
                className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors"
              >
                Planos
              </a>
              <Button className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full font-[family-name:var(--font-poppins)]">
                Falar com Especialista
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
