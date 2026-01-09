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
          isScrolled || isMobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
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

            {/* Desktop Nav (Mantido) */}
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

            {/* Mobile Toggle (Otimizado para Toque) */}
            <button 
              className="md:hidden w-12 h-12 flex items-center justify-center text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-colors active:scale-95" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay (Fundo Sólido e Foco) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-white md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-4 p-6 pt-8">
              {/* Links Grandes para facilitar o toque */}
              <a 
                href="#metodo" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A] border-b border-gray-100 flex justify-between items-center active:bg-gray-50"
              >
                Método
                <span className="text-[#f78608] text-lg">→</span>
              </a>
              <a 
                href="#cases" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A] border-b border-gray-100 flex justify-between items-center active:bg-gray-50"
              >
                Resultados
                <span className="text-[#f78608] text-lg">→</span>
              </a>
              <a 
                href="#planos" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A] border-b border-gray-100 flex justify-between items-center active:bg-gray-50"
              >
                Planos
                <span className="text-[#f78608] text-lg">→</span>
              </a>
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-[#f78608] hover:bg-[#da7607] active:bg-[#da7607] text-white rounded-xl h-14 text-lg font-[family-name:var(--font-poppins)] shadow-lg"
                  onClick={scrollToContact}
                >
                  Falar com Especialista
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4 font-[family-name:var(--font-poppins)]">
                  Vamos escalar o seu negócio hoje.
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
