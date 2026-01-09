"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Wrapper */}
            <div className="flex items-center">
              <div className="relative w-28 h-9 md:w-32 md:h-10 bg-[#f78608] rounded overflow-hidden flex items-center justify-center p-1 shadow-sm">
                <Image 
                  src="/logoweeat.webp" 
                  alt="weeat Logo" 
                  fill
                  className="object-contain" 
                  priority
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#metodo" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors text-sm font-medium">Método</a>
              <a href="#cases" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors text-sm font-medium">Resultados</a>
              <a href="#planos" className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:text-[#f78608] transition-colors text-sm font-medium">Planos</a>
            </nav>

            <div className="hidden md:block">
              <Button 
                className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-6 text-sm font-[family-name:var(--font-poppins)] transition-transform hover:scale-105 shadow-md"
                onClick={scrollToContact}
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl md:hidden p-4 rounded-b-3xl"
          >
            <nav className="flex flex-col gap-2">
              <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)} className="p-3 font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:bg-[#f78608]/10 hover:text-[#f78608] rounded-xl transition-colors font-medium">
                Método
              </a>
              <a href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="p-3 font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:bg-[#f78608]/10 hover:text-[#f78608] rounded-xl transition-colors font-medium">
                Resultados
              </a>
              <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="p-3 font-[family-name:var(--font-poppins)] text-[#1A1A1A] hover:bg-[#f78608]/10 hover:text-[#f78608] rounded-xl transition-colors font-medium">
                Planos
              </a>
              <div className="pt-2">
                <Button 
                  className="w-full bg-[#f78608] hover:bg-[#da7607] text-white rounded-xl h-12 text-base font-[family-name:var(--font-poppins)] shadow-lg"
                  onClick={scrollToContact}
                >
                  Falar com Especialista
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
