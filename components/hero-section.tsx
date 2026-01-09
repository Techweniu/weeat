"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

// --- DADOS (Mantidos do original) ---
type CardData = {
  emoji: string
  title: string
  subtitle: string
  bg: string
  color: string
}

// Dados originais organizados por grupos
const groupTopRight: CardData[] = [
  { emoji: "🍔", title: "Combo Smash", subtitle: "Mais Vendido", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "🥤", title: "Milkshake 500ml", subtitle: "Adicional Sugerido", bg: "bg-pink-100", color: "text-pink-500" },
  { emoji: "🍟", title: "Batata Grande", subtitle: "Alta Margem", bg: "bg-yellow-100", color: "text-yellow-600" },
]
const groupMiddleLeft: CardData[] = [
  { emoji: "🍕", title: "Pizza 4 Queijos", subtitle: '"Melhor da cidade!"', bg: "bg-red-100", color: "text-red-500" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Cliente Fidelizado", bg: "bg-yellow-100", color: "text-yellow-500" },
  { emoji: "💬", title: "Novo Feedback", subtitle: '"Entrega super rápida"', bg: "bg-blue-100", color: "text-blue-500" },
]
const groupBottomRight: CardData[] = [
  { emoji: "🍣", title: "Combo Sushi", subtitle: "Saiu para entrega 🛵", bg: "bg-green-100", color: "text-green-600" },
  { emoji: "🥡", title: "Yakisoba", subtitle: "Pedido #2849", bg: "bg-red-100", color: "text-red-600" },
  { emoji: "🥢", title: "Temaki Salmão", subtitle: "Preparando...", bg: "bg-orange-100", color: "text-orange-500" },
]
const groupBottomLeft: CardData[] = [
  { emoji: "💸", title: "Faturamento", subtitle: "+35% este mês", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "📈", title: "Ticket Médio", subtitle: "Subiu para R$ 85", bg: "bg-blue-100", color: "text-blue-600" },
  { emoji: "💰", title: "Lucro Líquido", subtitle: "Meta Batida 🎯", bg: "bg-yellow-100", color: "text-yellow-700" },
]
const groupTopLeft: CardData[] = [
  { emoji: "🥗", title: "Salada Caesar", subtitle: "Opção Fit", bg: "bg-green-100", color: "text-green-500" },
  { emoji: "☕", title: "Cappuccino", subtitle: "Venda Cruzada", bg: "bg-stone-100", color: "text-stone-600" },
  { emoji: "🍰", title: "Sobremesa", subtitle: "Acabou de sair", bg: "bg-pink-100", color: "text-pink-500" },
]

// --- NOVO: SELEÇÃO PARA MOBILE (Os melhores cards para conversão) ---
const mobileHighlights: CardData[] = [
  { emoji: "💸", title: "Faturamento +35%", subtitle: "Crescimento Real", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Fidelização", bg: "bg-yellow-100", color: "text-yellow-600" },
  { emoji: "🍔", title: "Vendas no Automático", subtitle: "Mais Pedidos", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "📈", title: "Ticket Médio R$ 85", subtitle: "Lucro Saudável", bg: "bg-blue-100", color: "text-blue-600" },
]

// --- COMPONENTE DESKTOP: CardRotator (Mantido) ---
const CardRotator = ({ 
  items, 
  positionClass, 
  intervalTime 
}: { 
  items: CardData[], 
  positionClass: string, 
  intervalTime: number 
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, intervalTime)
    return () => clearInterval(timer)
  }, [items.length, intervalTime])

  const currentItem = items[index]

  return (
    <div className={`absolute z-30 ${positionClass}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-[#f78608]/40 flex items-center gap-3 min-w-[180px]"
        >
          <div className={`${currentItem.bg} p-2 rounded-xl text-2xl flex items-center justify-center w-10 h-10`}>
            {currentItem.emoji}
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-[family-name:var(--font-poppins)] uppercase tracking-wide leading-none mb-1">
              {currentItem.subtitle}
            </p>
            <p className={`text-sm font-bold font-[family-name:var(--font-gate)] leading-none ${currentItem.color}`}>
              {currentItem.title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// --- NOVO COMPONENTE MOBILE: MobileHeroCarousel ---
const MobileHeroCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mobileHighlights.length)
    }, 4000) // Roda a cada 4 segundos
    return () => clearInterval(timer)
  }, [])

  const currentItem = mobileHighlights[index]

  return (
    <div className="w-full flex justify-center mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-[#f78608]/20 shadow-sm flex items-center gap-3"
        >
          <span className="text-2xl">{currentItem.emoji}</span>
          <div className="flex flex-col">
            <span className={`text-sm font-bold font-[family-name:var(--font-gate)] ${currentItem.color}`}>
              {currentItem.title}
            </span>
             <span className="text-[10px] text-gray-400 font-[family-name:var(--font-poppins)] uppercase tracking-wide">
              {currentItem.subtitle}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// --- COMPONENTE PRINCIPAL ---

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      
      {/* Background Sutil */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#f78608]/5 rounded-full blur-3xl animate-pulse duration-[10s]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl animate-pulse duration-[10s] delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ESQUERDA: TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="z-20 relative text-center lg:text-left"
          >
            <h1 className="font-[family-name:var(--font-gate)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 leading-[1.1] text-balance">
              Inteligência e Crescimento Real para o seu Food Service
            </h1>
            <p className="font-[family-name:var(--font-poppins)] text-base md:text-lg md:text-xl text-[#1A1A1A]/80 mb-8 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              Chega de vaidade! A weeat é o seu braço de crescimento focado em dinheiro no bolso. Tenha
              previsibilidade de vendas e lucro saudável!
            </p>
            
            <div className="flex flex-col items-center lg:items-start w-full">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-8 py-6 text-lg font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg mb-8"
                onClick={scrollToContact}
              >
                Quero Escalar Meu Faturamento
              </Button>

              {/* Badges - Ocultos no Mobile para limpar, ou simplificados */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
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
            </div>
          </motion.div>

          {/* DIREITA: VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-full flex flex-col items-center justify-center lg:justify-end min-h-[300px] md:min-h-[500px]"
          >
            {/* VERSÃO DESKTOP (Com Slots Rotativos) */}
            <div className="hidden lg:block relative w-full h-full min-h-[500px]">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[160%] -ml-[60%]"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 5%, black 60%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 60%)'
                }}
              >
                <Image
                    src="/heroweeat.webp"
                    alt="Chef weeat Ilustração"
                    width={1000}
                    height={1000}
                    priority
                    className="object-contain"
                />
              </motion.div>

              {/* Slots de Cards Rotativos (Apenas Desktop) */}
              <CardRotator items={groupTopRight} positionClass="top-0 right-0 -mr-4" intervalTime={6000} />
              <CardRotator items={groupMiddleLeft} positionClass="top-1/2 -translate-y-1/2 -left-12" intervalTime={5500} />
              <CardRotator items={groupBottomRight} positionClass="bottom-12 right-0" intervalTime={7000} />
              <CardRotator items={groupBottomLeft} positionClass="bottom-24 -left-4" intervalTime={6500} />
              <CardRotator items={groupTopLeft} positionClass="top-8 left-0" intervalTime={8000} />
            </div>

            {/* VERSÃO MOBILE (Imagem Limpa + Carrossel Único) */}
            <div className="block lg:hidden w-full relative">
                {/* Imagem sem cortes agressivos no mobile */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[350px] mx-auto aspect-square mb-4"
                >
                    <Image
                        src="/heroweeat.webp"
                        alt="Chef weeat Ilustração"
                        fill
                        priority
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Carrossel de Resultados (Substituto dos cards voadores) */}
                <MobileHeroCarousel />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
