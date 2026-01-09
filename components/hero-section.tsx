"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

// --- DADOS DOS CARDS (Mantidos iguais) ---
type CardData = {
  emoji: string
  title: string
  subtitle: string
  bg: string
  color: string
}

const groupTopRight: CardData[] = [
  { emoji: "🍔", title: "Combo Smash", subtitle: "Mais Vendido", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "🥤", title: "Milkshake", subtitle: "Adicional", bg: "bg-pink-100", color: "text-pink-500" },
  { emoji: "🍟", title: "Batata Grande", subtitle: "Margem Alta", bg: "bg-yellow-100", color: "text-yellow-600" },
]
const groupMiddleLeft: CardData[] = [
  { emoji: "🍕", title: "Pizza 4 Queijos", subtitle: '"Melhor da cidade!"', bg: "bg-red-100", color: "text-red-500" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Fidelizado", bg: "bg-yellow-100", color: "text-yellow-500" },
  { emoji: "💬", title: "Novo Feedback", subtitle: '"Entrega rápida"', bg: "bg-blue-100", color: "text-blue-500" },
]
const groupBottomRight: CardData[] = [
  { emoji: "🍣", title: "Combo Sushi", subtitle: "Saiu para entrega", bg: "bg-green-100", color: "text-green-600" },
  { emoji: "🥡", title: "Yakisoba", subtitle: "Pedido #2849", bg: "bg-red-100", color: "text-red-600" },
  { emoji: "🥢", title: "Temaki", subtitle: "Preparando...", bg: "bg-orange-100", color: "text-orange-500" },
]
const groupBottomLeft: CardData[] = [
  { emoji: "💸", title: "Faturamento", subtitle: "+35% este mês", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "📈", title: "Ticket Médio", subtitle: "R$ 85,00", bg: "bg-blue-100", color: "text-blue-600" },
  { emoji: "💰", title: "Lucro Líquido", subtitle: "Meta Batida", bg: "bg-yellow-100", color: "text-yellow-700" },
]
const groupTopLeft: CardData[] = [
  { emoji: "🥗", title: "Salada Caesar", subtitle: "Opção Fit", bg: "bg-green-100", color: "text-green-500" },
  { emoji: "☕", title: "Cappuccino", subtitle: "Venda Cruzada", bg: "bg-stone-100", color: "text-stone-600" },
  { emoji: "🍰", title: "Sobremesa", subtitle: "Saiu agora", bg: "bg-pink-100", color: "text-pink-500" },
]

const CardRotator = ({ items, positionClass, intervalTime }: { items: CardData[], positionClass: string, intervalTime: number }) => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), intervalTime)
    return () => clearInterval(timer)
  }, [items.length, intervalTime])

  const currentItem = items[index]

  return (
    <div className={`absolute z-30 ${positionClass}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-[#f78608]/20 flex items-center gap-2.5 min-w-[150px] md:min-w-[180px]"
        >
          <div className={`${currentItem.bg} p-1.5 rounded-lg text-xl md:text-2xl flex items-center justify-center w-8 h-8 md:w-10 md:h-10`}>
            {currentItem.emoji}
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wide leading-none mb-0.5">
              {currentItem.subtitle}
            </p>
            <p className={`text-xs md:text-sm font-bold font-[family-name:var(--font-gate)] leading-none ${currentItem.color}`}>
              {currentItem.title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#f78608]/5 rounded-full blur-3xl animate-pulse duration-[10s]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-20 relative text-center lg:text-left"
          >
            <h1 className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6 leading-[1.1] text-balance">
              Inteligência e Crescimento Real para seu Food Service
            </h1>
            <p className="font-[family-name:var(--font-poppins)] text-base md:text-xl text-[#1A1A1A]/80 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Chega de vaidade! A weeat é o seu braço de crescimento focado em dinheiro no bolso.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-6">
                <Button
                    size="lg"
                    className="w-full md:w-auto bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-8 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                    onClick={scrollToContact}
                >
                    Quero Escalar Meu Faturamento
                </Button>

                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2">
                        <Rocket className="text-[#f78608]" size={18} />
                        <span className="text-sm font-medium text-[#1A1A1A]">ROAS Médio 25x</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#22C55E]" size={18} />
                        <span className="text-sm font-medium text-[#1A1A1A]">ROI Mínimo 1.5</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* IMAGEM + CARDS */}
          {/* AQUI ESTÁ O AJUSTE PRINCIPAL: lg:justify-end e min-h restaurados */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px] w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Imagem Principal */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              // VOLTAMOS AO PADRÃO EXPANDIDO NO DESKTOP: w-[160%] e -ml-[60%]
              className="relative w-full h-full lg:w-[160%] lg:-ml-[60%] lg:aspect-video"
            >
               {/* Desktop: object-cover + object-right + máscara lateral 
                 Mobile: object-contain + máscara inferior
               */}
              <Image
                src="/heroweeat.webp"
                alt="Chef weeat"
                fill
                priority
                className="object-contain lg:object-cover lg:object-right"
                // Máscara condicional via CSS inline ou classes se preferir. 
                // Aqui uso style para garantir compatibilidade com o que tínhamos.
                style={{ 
                    // No mobile usamos mask bottom, no desktop mask right
                    maskImage: 'linear-gradient(to right, transparent 5%, black 60%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 60%)'
                }}
              />
            </motion.div>

            {/* Slot 1: Topo Direita */}
            <CardRotator items={groupTopRight} positionClass="top-4 right-0 lg:-right-4 scale-90 lg:scale-100" intervalTime={6000} />

            {/* Slot 2: Meio Esquerda */}
            <CardRotator items={groupMiddleLeft} positionClass="top-1/2 -translate-y-1/2 left-0 lg:-left-12 scale-90 lg:scale-100" intervalTime={5500} />

            {/* Slot 3: Baixo Direita */}
            <CardRotator items={groupBottomRight} positionClass="bottom-8 right-0 lg:right-0 scale-90 lg:scale-100" intervalTime={7000} />

            {/* Slot 4: Baixo Esquerda (Visível em todos, ajustado posição mobile) */}
            <CardRotator items={groupBottomLeft} positionClass="bottom-20 -left-4 lg:-left-4 lg:bottom-24 scale-90 lg:scale-100" intervalTime={6500} />

            {/* Slot 5: Topo Centro/Esq (Visível em todos, ajustado posição mobile) */}
            <CardRotator items={groupTopLeft} positionClass="top-10 left-10 lg:left-0 lg:top-8 scale-90 lg:scale-100" intervalTime={8000} />

          </motion.div>
        </div>
      </div>
    </section>
  )
}
