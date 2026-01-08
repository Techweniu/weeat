"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  // ATUALIZADO: "weeat" minúsculo na mensagem
  const whatsappLink = "https://wa.me/553497304302?text=Ol%C3%A1!%20Quero%20escalar%20meu%20faturamento%20com%20a%20metodologia%20da%20weeat.%20Podem%20me%20ajudar%3F"

  return (
    <section className="pt-32 pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              {/* ATUALIZADO: Texto visual para "weeat" minúsculo */}
              Chega de vaidade! A weeat é o seu braço de crescimento focado em dinheiro no bolso! Tenha
              previsibilidade de vendas e lucro saudável!
            </p>
            
            <Button
              size="lg"
              className="bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-8 py-6 text-lg font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Quero Escalar Meu Faturamento
            </Button>

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
                alt="Chef weeat Ilustração" // Alt text atualizado
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
