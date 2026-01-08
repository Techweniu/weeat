"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image" // Importação adicionada

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
            className="z-10 relative" // Garante que o texto fique sobre a imagem se houver sobreposição
          >
            <h1 className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 leading-tight text-balance">
              Inteligência e Crescimento Real para o seu Food Service
            </h1>
            <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-[#1A1A1A]/80 mb-8 leading-relaxed text-pretty">
              Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha
              previsibilidade de vendas e lucro saudável.
            </p>
            {/* ATUALIZADO: Cores do botão para #f78608 e #da7607 */}
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
                {/* ATUALIZADO: Cor do ícone */}
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
                {/* ATUALIZADO: Cor do ícone */}
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
            {/* Container da Imagem */}
            <div className="relative w-full max-w-[600px] aspect-square lg:aspect-[4/3]">
              <Image
                src="/heroweeat.webp"
                alt="Chef WeEat Ilustração"
                fill
                priority
                className="object-contain"
                // EFEITO: Máscara de gradiente
                // 'transparent' na esquerda (0%) -> 'black' (visível) na direita
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
