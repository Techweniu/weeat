"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

// --- DADOS DOS 15 CARDS (Divididos em 5 grupos de 3) ---

type CardData = {
  emoji: string
  title: string
  subtitle: string
  bg: string
  color: string
}

// Grupo 1: Topo Direita (Foco em Vendas/Lanches)
const groupTopRight: CardData[] = [
  { emoji: "🍔", title: "Combo Smash", subtitle: "Mais Vendido", bg: "bg-orange-100", color: "text-[#f78608]" },
  { emoji: "🥤", title: "Milkshake 500ml", subtitle: "Adicional Sugerido", bg: "bg-pink-100", color: "text-pink-500" },
  { emoji: "🍟", title: "Batata Grande", subtitle: "Alta Margem", bg: "bg-yellow-100", color: "text-yellow-600" },
]

// Grupo 2: Meio Esquerda (Foco em Avaliação/Social)
const groupMiddleLeft: CardData[] = [
  { emoji: "🍕", title: "Pizza 4 Queijos", subtitle: '"Melhor da cidade!"', bg: "bg-red-100", color: "text-red-500" },
  { emoji: "⭐", title: "Avaliação 5.0", subtitle: "Cliente Fidelizado", bg: "bg-yellow-100", color: "text-yellow-500" },
  { emoji: "💬", title: "Novo Feedback", subtitle: '"Entrega super rápida"', bg: "bg-blue-100", color: "text-blue-500" },
]

// Grupo 3: Baixo Direita (Foco em Delivery/Japonês)
const groupBottomRight: CardData[] = [
  { emoji: "🍣", title: "Combo Sushi", subtitle: "Saiu para entrega 🛵", bg: "bg-green-100", color: "text-green-600" },
  { emoji: "🥡", title: "Yakisoba", subtitle: "Pedido #2849", bg: "bg-red-100", color: "text-red-600" },
  { emoji: "🥢", title: "Temaki Salmão", subtitle: "Preparando...", bg: "bg-orange-100", color: "text-orange-500" },
]

// Grupo 4: Baixo Esquerda (Foco em Dinheiro/Resultados)
const groupBottomLeft: CardData[] = [
  { emoji: "💸", title: "Faturamento", subtitle: "+35% este mês", bg: "bg-green-100", color: "text-green-700" },
  { emoji: "📈", title: "Ticket Médio", subtitle: "Subiu para R$ 85", bg: "bg-blue-100", color: "text-blue-600" },
  { emoji: "💰", title: "Lucro Líquido", subtitle: "Meta Batida 🎯", bg: "bg-yellow-100", color: "text-yellow-700" },
]

// Grupo 5: Topo Centro/Esquerda (Variedade/Bebidas)
const groupTopLeft: CardData[] = [
  { emoji: "🥗", title: "Salada Caesar", subtitle: "Opção Fit", bg: "bg-green-100", color: "text-green-500" },
  { emoji: "☕", title: "Cappuccino", subtitle: "Venda Cruzada", bg: "bg-stone-100", color: "text-stone-600" },
  { emoji: "🍰", title: "Sobremesa", subtitle: "Acabou de sair", bg: "bg-pink-100", color: "text-pink-500" },
]

// --- COMPONENTE QUE GIRA OS CARDS (Lógica Isolada) ---
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
          // ATUALIZADO: 'border-2' deixa a borda mais grossa
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

// --- COMPONENTE PRINCIPAL ---

export function HeroSection() {
  const whatsappLink = "https://wa.me/553497304302?text=Ol%C3%A1!%20Quero%20escalar%20meu%20faturamento%20com%20a%20metodologia%20da%20weeat.%20Podem%20me%20ajudar%3F"

  return (
    <section className="pt-32 pb-20 px-4 bg-[#FFFBF5] overflow-hidden relative">
      
      {/* Background Sutil */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#f78608]/5 rounded-full blur-3xl animate-pulse duration-[10s]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl animate-pulse duration-[10s] delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ESQUERDA: TEXTO */}
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
              Chega de vaidade! A weeat é o seu braço de de crescimento focado em dinheiro no bolso! Tenha
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

          {/* DIREITA: IMAGEM + 5 SLOTS ROTATIVOS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center lg:justify-end min-h-[500px]"
          >
            {/* Imagem Principal */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-video lg:w-[160%] lg:-ml-[60%]"
              style={{
                maskImage: 'linear-gradient(to right, transparent 5%, black 60%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 60%)'
              }}
            >
              <Image
                src="/heroweeat.webp"
                alt="Chef weeat Ilustração"
                fill
                priority
                className="object-cover lg:object-right"
              />
            </motion.div>

            {/* --- SLOTS DE CARDS ROTATIVOS --- */}
            
            {/* Slot 1: Topo Direita */}
            <CardRotator 
              items={groupTopRight} 
              positionClass="top-0 right-0 lg:-right-4" 
              intervalTime={6000} 
            />

            {/* Slot 2: Meio Esquerda */}
            <CardRotator 
              items={groupMiddleLeft} 
              positionClass="top-1/2 -translate-y-1/2 left-0 lg:-left-12" 
              intervalTime={5500} 
            />

            {/* Slot 3: Baixo Direita */}
            <CardRotator 
              items={groupBottomRight} 
              positionClass="bottom-12 right-8 lg:right-0" 
              intervalTime={7000} 
            />

             {/* Slot 4: Baixo Esquerda */}
             <CardRotator 
              items={groupBottomLeft} 
              positionClass="bottom-24 left-4 lg:-left-4" 
              intervalTime={6500} 
            />

            {/* Slot 5: Topo Centro/Esq */}
            <CardRotator 
              items={groupTopLeft} 
              positionClass="top-8 left-10 lg:left-0" 
              intervalTime={8000} 
            />

          </motion.div>
        </div>
      </div>
    </section>
  )
}
