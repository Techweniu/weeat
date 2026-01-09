"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, ShoppingBag, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- DADOS FICTÍCIOS DOS CASES ---
// Projetados para cobrir diferentes dores (Delivery, Ticket Médio, Lucro, Reservas)
const cases = [
  {
    id: 1,
    title: "Case Hamburgueria Artesanal",
    category: "Delivery & Salão",
    metrics: [
      { label: "ROAS (Retorno)", value: "18x", icon: TrendingUp },
      { label: "Custo por Pedido", value: "R$ 2,10", icon: DollarSign },
      { label: "Novos Clientes", value: "+450", icon: Users },
    ],
    // Dados fictícios para o gráfico (0 a 100)
    chartData: [20, 35, 30, 45, 60, 55, 75], 
    description: "Otimização de cardápio e tráfego focado em combos de alta margem.",
  },
  {
    id: 2,
    title: "Case Culinária Japonesa",
    category: "Full Delivery",
    metrics: [
      { label: "Ticket Médio", value: "+32%", icon: DollarSign },
      { label: "Faturamento", value: "R$ 180k", icon: TrendingUp },
      { label: "Pedidos/Mês", value: "1.2k", icon: ShoppingBag },
    ],
    chartData: [30, 40, 35, 50, 45, 70, 90],
    description: "Estratégia de LTV (Lifetime Value) para aumentar a recompra mensal.",
  },
  {
    id: 3,
    title: "Case Pizzaria Tradicional",
    category: "Híbrido",
    metrics: [
      { label: "Lucro Líquido", value: "+22%", icon: DollarSign },
      { label: "CAC (Custo/Cliente)", value: "-40%", icon: Users },
      { label: "Conversão", value: "4.8%", icon: TrendingUp },
    ],
    chartData: [15, 25, 40, 30, 50, 65, 80],
    description: "Redução drástica do CAC através de criativos de alta conversão.",
  },
  {
    id: 4,
    title: "Case Steakhouse Premium",
    category: "Salão & Reservas",
    metrics: [
      { label: "Reservas Online", value: "+150%", icon: Users },
      { label: "Ticket Médio", value: "R$ 210", icon: DollarSign },
      { label: "Faturamento", value: "R$ 350k", icon: TrendingUp },
    ],
    chartData: [40, 35, 55, 60, 75, 80, 95],
    description: "Implementação de sistema de reservas e tráfego para público de alta renda.",
  },
]

// --- SUB-COMPONENTE: Gráfico SVG Simples e Leve ---
const SimpleChart = ({ data }: { data: number[] }) => {
  const max = Math.max(...data)
  // Gera os pontos do SVG baseados nos dados
  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - (val / max) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="w-full h-32 mt-4 relative group">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Área preenchida (Area Chart) */}
        <path
          d={`M0,100 ${points.split(" ").map((p) => `L${p}`).join(" ")} L100,100 Z`}
          fill="url(#chartGradient)"
          className="transition-all duration-500 ease-out"
        />
        
        {/* Linha do gráfico (Line Chart) */}
        <path
          d={`M0,${100 - (data[0] / max) * 100} L ${points}`}
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md"
        />
        
        {/* Pontos Interativos */}
        {data.map((val, i) => (
          <circle
            key={i}
            cx={(i / (data.length - 1)) * 100}
            cy={100 - (val / max) * 100}
            r="4"
            fill="white"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </svg>
    </div>
  )
}

export function ResultsDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // Controla a direção da animação

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15
    })
  }

  return (
    <section className="py-24 bg-[#FFFBF5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
           <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Resultados que falam por si
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/60 max-w-2xl mx-auto text-lg">
            Acompanhe o impacto real da metodologia weeat em diferentes operações de Food Service.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[600px] flex items-center justify-center">
          
          {/* Botão Anterior */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 lg:-left-12 z-20 hidden md:flex bg-white/80 hover:bg-white rounded-full shadow-lg backdrop-blur-sm h-12 w-12 text-[#f78608] hover:text-[#da7607] transition-all hover:scale-110"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Área do Card (3D Perspective) */}
          <div className="w-full relative flex justify-center perspective-[1200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.4 }
                }}
                className="w-full max-w-md md:max-w-lg"
              >
                {/* --- O CARD LARANJA --- */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f78608] to-[#ff9933] shadow-[0_30px_60px_-12px_rgba(247,134,8,0.5)] text-white p-8 md:p-10 border border-white/20 select-none">
                  
                  {/* Elementos de Fundo (Glass Effect) */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none mix-blend-overlay" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none mix-blend-soft-light" />
                  
                  {/* Topo do Card */}
                  <div className="relative z-10 mb-8 flex justify-between items-start">
                    <div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 shadow-sm mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                            {cases[currentIndex].category}
                        </span>
                        <h3 className="font-[family-name:var(--font-gate)] text-3xl leading-tight mt-1">
                        {cases[currentIndex].title}
                        </h3>
                    </div>
                    <span className="font-[family-name:var(--font-gate)] text-6xl opacity-10 leading-none -mt-2">
                        0{cases[currentIndex].id}
                    </span>
                  </div>

                  {/* Área do Gráfico */}
                  <div className="relative z-10 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 mb-8 shadow-inner">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium opacity-90 flex items-center gap-2">
                            <ArrowUpRight size={16} /> Performance Mensal
                        </p>
                    </div>
                    <SimpleChart data={cases[currentIndex].chartData} />
                  </div>

                  {/* Métricas (Grid) */}
                  <div className="relative z-10 grid grid-cols-3 gap-4 mb-8">
                    {cases[currentIndex].metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/20 transition-colors">
                        <metric.icon size={20} className="mb-2 opacity-80" />
                        <span className="font-[family-name:var(--font-gate)] text-xl md:text-2xl font-bold leading-none mb-1 shadow-black drop-shadow-sm">
                          {metric.value}
                        </span>
                        <span className="text-[10px] md:text-xs uppercase tracking-wide opacity-80 leading-tight font-medium">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Descrição */}
                  <div className="relative z-10 border-t border-white/20 pt-6">
                    <p className="font-[family-name:var(--font-poppins)] text-sm md:text-base opacity-95 leading-relaxed text-center font-medium">
                      "{cases[currentIndex].description}"
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botão Próximo */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 lg:-right-12 z-20 hidden md:flex bg-white/80 hover:bg-white rounded-full shadow-lg backdrop-blur-sm h-12 w-12 text-[#f78608] hover:text-[#da7607] transition-all hover:scale-110"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

        </div>

        {/* Paginação Mobile / Indicadores */}
        <div className="flex justify-center items-center gap-3 mt-12">
            <Button variant="ghost" size="icon" onClick={prevSlide} className="md:hidden text-[#f78608]">
                <ChevronLeft />
            </Button>
            
            <div className="flex gap-2">
                {cases.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1)
                            setCurrentIndex(idx)
                        }}
                        className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                            idx === currentIndex ? "w-10 bg-[#f78608]" : "w-2.5 bg-gray-300 hover:bg-[#f78608]/50"
                        }`}
                    />
                ))}
            </div>

            <Button variant="ghost" size="icon" onClick={nextSlide} className="md:hidden text-[#f78608]">
                <ChevronRight />
            </Button>
        </div>

      </div>
    </section>
  )
}
