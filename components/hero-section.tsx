"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

// --- DADOS ---
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

const mobileHighlights: CardData[] = [
  { emoji: "💸", title: "Faturamento +35%", subtitle: "Crescimento Real", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Fidelização", bg: "bg-yellow-100", color: "text-yellow-600" },
  { emoji: "🍔", title: "Vendas no Automático", subtitle: "Mais Pedidos", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "📈", title: "Ticket Médio R$ 85", subtitle: "Lucro Saudável", bg: "bg-blue-100", color: "text-blue-600" },
]

// --- COMPONENTES AUXILIARES ---
const CardRotator = ({ items, positionClass, intervalTime }: { items: CardData[], positionClass: string, intervalTime: number }) => {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // Atraso inicial para libertar a thread principal durante o LCP
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
            <p className="text-[10px] text-gray-500 font-[family-name:var(--font-poppins)] uppercase tracking-wide leading-none mb-1">{currentItem.subtitle}</p>
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
    <div className="w-full flex justify-center mt-8 md:mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-white px-6 py-3 rounded-full border border-[#f78608]/20 shadow-md flex items-center gap-3 w-full max-w-xs justify-start"
        >
          <span className="text-2xl shrink-0">{currentItem.emoji}</span>
          <div className="flex flex-col overflow-hidden">
            <span className={`text-sm font-bold font-[family-name:var(--font-gate)] truncate ${currentItem.color}`}>
              {currentItem.title}
            </span>
             <span className="text-[10px] text-gray-400 font-[family-name:var(--font-poppins)] uppercase tracking-wide truncate">
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
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative min-h-[90vh] md:min-h-screen flex items-center">
      
      {/* Background Decorativo */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#f78608]/5 rounded-full blur-3xl animate-pulse duration-[10s]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl animate-pulse duration-[10s] delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="z-20 relative text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* OTIMIZAÇÃO CRÍTICA LCP: Imagem mobile fora do framer-motion */}
            <div className="block lg:hidden w-full relative h-[320px] rounded-3xl overflow-hidden mb-8 shadow-2xl border-2 border-[#f78608]/10">
                  <Image
                    src="/hero-weat.webp"
                    alt="Chef weeat em ação"
                    fill
                    sizes="(max-width: 1024px) 100vw, 0vw"
                    className="object-cover object-top" 
                    priority={true}
                    fetchPriority="high" // <-- Força o download antes de tudo
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFBF5] to-transparent" />
            </div>

            {/* Mantemos apenas os textos com animação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
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

                <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <Rocket className="text-[#f78608]" size={20} />
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">ROAS Médio 16x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#22C55E]" size={20} />
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">ROI Mínimo 1.5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-[#f78608]" size={20} />
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#1A1A1A]">Foco 100% em Resultado</span>
                  </div>
                </div>
              </div>

              <div className="block lg:hidden w-full">
                  <MobileHeroCarousel />
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)'
            }}
          >
                <Image
                  src="/hero-weat.webp"
                  alt="Chef weeat em ação"
                  fill
                  sizes="(min-width: 1024px) 60vw, 0vw" 
                  className="object-cover object-left-top" 
                  priority={true}
                  fetchPriority="high" // <-- Otimização para Desktop
              />
          </div>

          <div className="absolute inset-0 z-10">
             <CardRotator items={groupTopRight} positionClass="top-28 right-8" intervalTime={6000} />
             <CardRotator items={groupMiddleLeft} positionClass="top-1/2 -translate-y-1/2 left-20" intervalTime={5500} />
             <CardRotator items={groupBottomRight} positionClass="bottom-24 right-8" intervalTime={7000} />
          </div>
      </div>

    </section>
  )
}