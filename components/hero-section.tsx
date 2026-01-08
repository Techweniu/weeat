"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      {/* ELEMENTOS DECORATIVOS DE FUNDO */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#f78608]/10 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-multiply"></div>
      
      {/* Ícone sutil de "calor/fogo" */}
      <svg className="absolute top-40 right-[40%] text-[#f78608]/20 w-24 h-24 -z-10 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.24-2.15.7-3.144.28.86.6 1.63 1.8 2.644Z"/>
      </svg>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="z-20 relative"
          >
            <h1 className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 leading-tight text-balance">
              Inteligência e Crescimento Real para o seu Food Service
            </h1>
            <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-[#1A1A1A]/80 mb-8 leading-relaxed text-pretty">
              Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha
              previsibilidade de vendas e lucro saudável.
            </p>
            <Button
              size="lg"
              className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-8 py-6 text-lg font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg"
            >
              Quero Escalar Meu Faturamento
            </Button>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Rocket className="text-[#f78608]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  ROAS Médio 25x
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#22C55E]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  ROI Mínimo 1.5
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-[#f78608]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  Foco 100% em Resultado
                </span>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita - Imagem do Chef 16:9 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-video lg:w-[170%] lg:-ml-[70%]"
              style={{
                maskImage: 'linear-gradient(to right, transparent 5%, black 60%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 60%)'
              }}
            >
              <Image
                src="/heroweeat.webp"
                alt="Chef WeEat Ilustração"
                fill
                priority
                className="object-cover lg:object-right"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
