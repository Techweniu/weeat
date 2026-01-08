"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    // overflow-hidden crucial aqui para não criar barra de rolagem horizontal
    <section className="pt-32 pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*
             Coluna da Esquerda - Texto
             Z-INDEX 20: Garante que o texto fique SOBRE a imagem que vai invadir o espaço
          */}
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

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Rocket className="text-[#f78608]" size={20} />
                <span className="text-sm font-medium text-[#1A1A1A]">ROAS Médio 25x</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#22C55E]" size={20} />
                <span className="text-sm font-medium text-[#1A1A1A]">ROI Mínimo 1.5</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-[#f78608]" size={20} />
                <span className="text-sm font-medium text-[#1A1A1A]">Foco em Resultado</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita - Área da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-full" // Removido flex center para permitir posicionamento livre
          >
            {/*
               --- AQUI ESTÁ A MÁGICA DO "QUADRADO AZUL" ---
            */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              /*
                 1. POSICIONAMENTO EM TELAS GRANDES (lg:):
                 - lg:w-[170%]: Aumenta a largura do container para 170% da coluna original.
                 - lg:-ml-[70%]: Puxa o container 70% para a esquerda (margin-left negativa), fazendo invadir a área de texto.
                 - aspect-video: Mantém a proporção 16:9.
              */
              className="relative w-full aspect-video lg:w-[170%] lg:-ml-[70%]"

              /*
                 2. TRANSPARÊNCIA (Fade perto do texto):
                 - maskImage: Cria um degradê da esquerda para a direita.
                 - transparent 5%: O início (esquerda, perto do texto) é transparente.
                 - black 60%: A partir de 60% da largura, a imagem fica totalmente visível.
                 (Ajuste esses % se quiser mais ou menos fade)
              */
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
                // Usamos object-cover para garantir que a imagem preencha o novo container gigante
                // e object-right para garantir que o chefe (que está na direita da imagem) seja o foco.
                className="object-cover lg:object-right"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
