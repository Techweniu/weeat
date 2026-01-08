"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Link do WhatsApp codificado para o Header
  const whatsappLink = "https://wa.me/553497304302?text=Ol%C3%A1!%20Vi%20o%20site%20da%20WeEat%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20crescimento%20do%20meu%20delivery."

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
          <div className="flex items-center">
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

          <nav className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Método</a>
            <a href="#cases" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Cases</a>
            <a href="#planos" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Planos</a>
          </nav>

          <div className="hidden md:block">
            {/* Botão Desktop com Link */}
            <Button 
              className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-6 font-[family-name:var(--font-poppins)] transition-transform hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>

          <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#metodo" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Método</a>
              <a href="#cases" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Cases</a>
              <a href="#planos" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors">Planos</a>
              {/* Botão Mobile com Link */}
              <Button 
                className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full font-[family-name:var(--font-poppins)]"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Falar com Especialista
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
