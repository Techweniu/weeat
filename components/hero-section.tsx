"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// --- DADOS DOS CARDS ---
type CardData = {
  emoji: string
  title: string
  subtitle: string
  bg: string
  color: string
}

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

const mobileHighlights: CardData[] = [
  { emoji: "💸", title: "Faturamento +35%", subtitle: "Crescimento Real", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Fidelização", bg: "bg-yellow-100", color: "text-yellow-600" },
  { emoji: "🍔", title: "Vendas no Automático", subtitle: "Mais Pedidos", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "📈", title: "Ticket Médio R$ 85", subtitle: "Lucro Saudável", bg: "bg-blue-100", color: "text-blue-600" },
]

// --- COMPONENTES DOS CARDS FLUTUANTES ---
const CardRotator = ({ items, positionClass, intervalTime }: { items: CardData[], positionClass: string, intervalTime: number }) => {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initialDelay = setTimeout(() => {
      timer = setInterval(() => { setIndex((prev) => (prev + 1) % items.length) }, intervalTime)
    }, 1500)
    
    return () => {
      clearTimeout(initialDelay)
      if (timer) clearInterval(timer)
    }
  }, [items.length, intervalTime])
  
  const currentItem = items[index]

  return (
    <div className={`absolute z-30 hidden md:block ${positionClass}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1710]/95 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border-2 border-[#f78608]/40 flex items-center gap-3 min-w-[180px]"
        >
          <div className={`${currentItem.bg} p-2 rounded-xl text-2xl flex items-center justify-center w-10 h-10`}>
            {currentItem.emoji}
          </div>
          <div>
            <p className="text-[10px] text-[#f5f0e8]/80 font-[family-name:var(--font-poppins)] uppercase tracking-wide leading-none mb-1">{currentItem.subtitle}</p>
            <p className={`text-sm font-bold font-[family-name:var(--font-gate)] leading-none ${currentItem.color}`}>{currentItem.title}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const MobileHeroCarousel = () => {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initialDelay = setTimeout(() => {
      timer = setInterval(() => { setIndex((prev) => (prev + 1) % mobileHighlights.length) }, 4000)
    }, 1500)
    
    return () => {
      clearTimeout(initialDelay)
      if (timer) clearInterval(timer)
    }
  }, [])
  
  const currentItem = mobileHighlights[index]

  return (
    <div className="w-full flex justify-center mt-6 md:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1a1710] px-6 py-3 rounded-full border border-[#f78608]/20 shadow-lg flex items-center gap-3 w-full max-w-xs justify-start"
        >
          <span className="text-2xl shrink-0">{currentItem.emoji}</span>
          <div className="flex flex-col overflow-hidden">
            <span className={`text-sm font-bold font-[family-name:var(--font-gate)] truncate ${currentItem.color}`}>
              {currentItem.title}
            </span>
             <span className="text-[10px] text-[#f5f0e8]/80 font-[family-name:var(--font-poppins)] uppercase tracking-wide truncate">
              {currentItem.subtitle}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// --- SECÇÃO PRINCIPAL (FUNDO BRANCO) ---
export function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-12 px-4 flex flex-col items-center text-center w-full min-h-screen relative overflow-hidden">
      
      {/* 1. Logo Centralizada no Topo */}
      <div className="relative w-48 h-16 md:w-56 md:h-20 mb-8 md:mb-12 z-20">
        <Image 
          src="/logo.webp" 
          alt="weeat Logo" 
          fill
          className="object-contain" 
          priority
          sizes="(max-width: 768px) 192px, 224px" // <-- ISSO AQUI RESOLVE A QUEDA NAS BOAS PRÁTICAS
        />
      </div>

      {/* 2. Títulos em PRETO para contraste perfeito */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-20">
        <h1 className="font-[family-name:var(--font-gate)] text-4xl sm:text-5xl md:text-6xl text-[#1a1710] mb-4 leading-[1.1] text-balance">
          Aumente as suas vendas, sem depender do ifood!
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-[#1a1710] mb-8 leading-relaxed max-w-2xl font-medium">
          "Você foca na cozinha e nós vendemos para você!"
        </p>
      </div>

      {/* 3. Imagem Otimizada com Cards Flutuantes em volta */}
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        <div className="w-full max-w-2xl relative h-[380px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1a1710]/10">
          <Image
            src="/hero.webp"
            alt="Cozinheiro feliz weeat"
            fill
            className="object-cover object-top" 
            priority={true}
            fetchPriority="high" 
            sizes="(max-width: 768px) 100vw, 800px" // <-- RESOLVE A QUEDA NAS BOAS PRÁTICAS
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none block md:hidden" />
        </div>

        {/* Cards Rotativos Desktop */}
        <CardRotator items={groupTopRight} positionClass="top-10 -right-10 lg:-right-20" intervalTime={6000} />
        <CardRotator items={groupMiddleLeft} positionClass="top-1/2 -translate-y-1/2 -left-10 lg:-left-20" intervalTime={5500} />
        <CardRotator items={groupBottomRight} positionClass="bottom-10 -right-10 lg:-right-20" intervalTime={7000} />

        {/* Card Rotativo Mobile */}
        <MobileHeroCarousel />
      </div>

      {/* 4. CTA: Botão Laranja mantido */}
      <div className="w-full px-4 md:px-0 mt-10 z-20">
        <a
          href="#contato"
          className="w-full sm:w-auto bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-10 py-5 text-lg font-[family-name:var(--font-poppins)] font-bold transition-transform hover:scale-105 shadow-[0_8px_30px_rgba(247,134,8,0.3)] inline-flex items-center justify-center"
        >
          Quero Escalar Meu Faturamento
        </a>
      </div>

    </section>
  )
}