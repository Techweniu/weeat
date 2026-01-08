"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-[#FFFBF5] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="z-10 relative"
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <Rocket className="text-[#f78608]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  ROAS Médio 25x
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="text-[#22C55E]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  ROI Mínimo 1.5
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <TrendingUp className="text-[#f78608]" size={20} />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">
                  Foco 100% em Resultado
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            {/* ATUALIZADO:
              - Removido max-w fixo para aproveitar a largura da coluna
              - Alterado para aspect-video (16:9)
              - Removida a máscara (maskImage) pois a imagem já é transparente
            */}
            <div className="relative w-full aspect-video">
              <Image
                src="/heroweeat.webp"
                alt="Chef WeEat Ilustração"
                fill
                priority
                className="object-contain" // Garante que a imagem 16:9 caiba perfeitamente no container 16:9
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
