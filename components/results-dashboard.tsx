"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, 
  ShoppingBag, BadgeCheck, Zap, Percent, Star 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// --- DADOS REAIS DOS CLIENTES (Estritos) ---
const cases = [
  {
    id: 1,
    name: "Caio Sabeh",
    logo: "/logocaiosabeh.webp", 
    niche: "Hamburgueria Artesanal", 
    // Tags mantidas para contexto visual, mas baseadas nos dados
    tags: ["Tráfego Pago", "Alta Conversão"], 
    highlight: "R$ 25.576",
    highlightLabel: "Faturamento em Anúncios",
    // Apenas os 4 dados solicitados
    metrics: [
      { label: "ROAS", value: "21,80x", icon: Zap },
      { label: "Pedidos", value: "386", icon: ShoppingBag },
      { label: "Ticket Médio", value: "R$ 66,25", icon: DollarSign },
      { label: "Conversão", value: "40%", icon: Percent },
    ],
    quote: "Escalamos o volume de pedidos mantendo a consistência de vendas.",
    logoScale: "scale-100" // Logo normal
  },
  {
    id: 2,
    name: "Kiwi Foods",
    logo: "/kiwi-purple.webp",
    niche: "Saudável & Fresh",
    tags: ["Recorrência", "Branding"],
    highlight: "R$ 23.250",
    highlightLabel: "Faturamento em Anúncios",
    metrics: [
      { label: "ROAS", value: "18,60x", icon: Zap },
      { label: "Pedidos", value: "253", icon: ShoppingBag },
      { label: "Ticket Médio", value: "R$ 91,89", icon: DollarSign },
      { label: "Conversão", value: "28%", icon: Percent },
    ],
    quote: "Um ROAS sólido com ticket médio alto, consolidando a marca.",
    logoScale: "scale-125" // Aumento forçado para Kiwi
  },
  {
    id: 3,
    name: "Casa Tali",
    logo: "/logocasatali.webp",
    niche: "Alta Gastronomia",
    tags: ["Ticket High-End", "Lucro"],
    highlight: "R$ 16.905",
    highlightLabel: "Faturamento em Anúncios",
    metrics: [
      { label: "ROAS", value: "19,72x", icon: Zap },
      { label: "Pedidos", value: "137", icon: ShoppingBag },
      { label: "Ticket Médio", value: "R$ 123,40", icon: DollarSign },
      { label: "Conversão", value: "44%", icon: Percent },
    ],
    quote: "Ticket médio de R$ 123 com quase 20x de retorno.",
    logoScale: "scale-125" // Aumento forçado para Casa Tali
  },
  {
    id: 4,
    name: "Casarão",
    logo: "/casarao.webp",
    niche: "Gastronomia Tradicional",
    tags: ["Ticket Médio", "Margem"],
    highlight: "R$ 5.180",
    highlightLabel: "Faturamento em Anúncios",
    metrics: [
      { label: "ROAS", value: "23,11x", icon: Zap },
      { label: "Pedidos", value: "57", icon: ShoppingBag },
      { label: "Ticket Médio", value: "R$ 90,87", icon: DollarSign },
      { label: "Conversão", value: "47%", icon: Percent },
    ],
    quote: "Atingimos uma taxa de conversão de quase 50% com público qualificado.",
    logoScale: "scale-125" // Aumento forçado para Casarão
  },
]

export function ResultsDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const getIndex = (shift: number) => {
    return (currentIndex + shift + cases.length) % cases.length
  }

  const currentCase = cases[currentIndex]

  return (
    <section id="cases" className="py-16 md:py-24 bg-[#FFFBF5] relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="hidden lg:block absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f78608]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-8 md:mb-16">
           <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-5xl text-[#1A1A1A] mb-3 md:mb-4">
            Resultados Comprovados
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/60 max-w-2xl mx-auto text-base md:text-lg">
            Números reais, extraídos diretamente do gerenciador de anúncios dos nossos parceiros.
          </p>
        </div>

        {/* =========================================================
            VERSÃO MOBILE (Layout Limpo + Logo Ajustada)
           ========================================================= */}
        <div className="block lg:hidden max-w-md mx-auto relative">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                    >
{/* Header do Card Mobile - CENTRALIZADO */}
<div className="flex flex-col items-center mb-6 text-center w-full">
    
    {/* Tag e Selo alinhados horizontalmente no centro */}
    <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-3 py-1 bg-orange-100 text-[#f78608] text-[10px] font-bold uppercase tracking-wider rounded-full">
            {currentCase.tags[0]}
        </span>
        <BadgeCheck className="text-[#f78608] w-5 h-5 shrink-0" />
    </div>

    {/* Logo Mobile - Container Centralizado */}
    <div className="relative w-48 h-20 mb-1 flex items-center justify-center">
        <Image 
            src={currentCase.logo} 
            alt={currentCase.name} 
            fill 
            // Mudança crucial: object-center centraliza a imagem dentro do espaço
            className={`object-contain object-center ${currentCase.logoScale}`}
        />
    </div>
</div>

                        {/* Resultado Principal (Gigante) */}
                        <div className="text-center mb-6 py-4 bg-[#FFFBF5] rounded-2xl border border-orange-100">
                             <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Resultado Principal</p>
                             <h2 className="text-4xl font-bold font-[family-name:var(--font-gate)] text-[#f78608] tracking-tighter">
                                {currentCase.highlight}
                             </h2>
                             <p className="text-sm text-[#1A1A1A]/70 font-medium mt-1">
                                {currentCase.highlightLabel}
                             </p>
                        </div>

                        {/* Grid Métricas (2x2 para os 4 itens) */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {currentCase.metrics.map((m, i) => (
                                <div key={i} className="bg-gray-50 p-3 rounded-xl flex flex-col items-center text-center">
                                    <m.icon className="w-4 h-4 text-[#f78608] mb-1" />
                                    <span className="font-bold text-[#1A1A1A] text-sm">{m.value}</span>
                                    <span className="text-[9px] text-gray-500 uppercase">{m.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Botão de Ação */}
                        <Button 
                            className="w-full bg-[#f78608] hover:bg-[#da7607] text-white rounded-xl h-12 font-[family-name:var(--font-poppins)] shadow-md mb-4"
                            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Quero este resultado
                        </Button>
                        
                        <div className="text-center">
                            <p className="text-xs text-gray-400 italic">"{currentCase.quote}"</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navegação Mobile */}
            <div className="flex justify-center items-center gap-6 mt-6">
                <button onClick={handlePrev} className="p-3 bg-white rounded-full text-[#f78608] shadow-sm border border-gray-100 active:scale-95 transition-transform">
                    <ChevronLeft size={24} />
                </button>
                <span className="text-sm font-bold text-gray-400 font-[family-name:var(--font-poppins)]">
                    {currentIndex + 1} / {cases.length}
                </span>
                <button onClick={handleNext} className="p-3 bg-white rounded-full text-[#f78608] shadow-sm border border-gray-100 active:scale-95 transition-transform">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>


        {/* =========================================================
            VERSÃO DESKTOP (Carrossel 3D com Logos Ajustadas)
           ========================================================= */}
        <div className="hidden lg:flex relative max-w-7xl mx-auto min-h-[500px] flex-col md:flex-row items-center justify-center perspective-[1000px]">
          
          <button 
            onClick={handlePrev}
            className="absolute left-8 z-40 bg-white/80 backdrop-blur-md p-3 rounded-full text-[#f78608] shadow-lg hover:bg-white hover:scale-110 transition-all border border-white/20"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-8 z-40 bg-white/80 backdrop-blur-md p-3 rounded-full text-[#f78608] shadow-lg hover:bg-white hover:scale-110 transition-all border border-white/20"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative w-full flex justify-center items-center h-[550px]">
             
             {/* CARD ANTERIOR (Blurry) */}
             <motion.div
                key={`prev-${getIndex(-1)}`}
                className="absolute w-[50%] h-[480px] bg-gradient-to-br from-[#f78608]/40 to-[#ff9933]/40 rounded-[2rem] border border-white/10 blur-[2px] opacity-40 pointer-events-none"
                initial={{ x: "-50%", scale: 0.8, opacity: 0 }}
                animate={{ x: "-55%", scale: 0.85, opacity: 0.4, zIndex: 10 }}
                transition={{ duration: 0.5 }}
             >
                <div className="p-8 h-full flex flex-col justify-center items-center opacity-50">
                     <div className="relative w-40 h-20 grayscale brightness-200">
                        <Image 
                            src={cases[getIndex(-1)].logo} 
                            alt="Logo" 
                            fill 
                            className="object-contain"
                        />
                     </div>
                </div>
             </motion.div>

             {/* CARD SEGUINTE (Blurry) */}
             <motion.div
                key={`next-${getIndex(1)}`}
                className="absolute w-[50%] h-[480px] bg-gradient-to-br from-[#f78608]/40 to-[#ff9933]/40 rounded-[2rem] border border-white/10 blur-[2px] opacity-40 pointer-events-none"
                initial={{ x: "50%", scale: 0.8, opacity: 0 }}
                animate={{ x: "55%", scale: 0.85, opacity: 0.4, zIndex: 10 }}
                transition={{ duration: 0.5 }}
             >
                <div className="p-8 h-full flex flex-col justify-center items-center opacity-50">
                     <div className="relative w-40 h-20 grayscale brightness-200">
                        <Image 
                            src={cases[getIndex(1)].logo} 
                            alt="Logo" 
                            fill 
                            className="object-contain"
                        />
                     </div>
                </div>
             </motion.div>


             {/* CARD CENTRAL (Foco) */}
             <AnimatePresence mode="popLayout">
               <motion.div
                  key={currentIndex}
                  className="z-30 w-full max-w-4xl"
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.3 }}
               >
                  <div className="bg-gradient-to-br from-[#f78608] to-[#ff9933] rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(247,134,8,0.4)] border border-white/20 overflow-hidden text-white relative flex flex-row h-[500px]">
                     
                     <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
                     
                     {/* COLUNA ESQUERDA: Info e Logo */}
                     <div className="w-[45%] p-10 flex flex-col justify-between border-r border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {currentCase.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-white/90 bg-white/20 border border-white/20 px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* LOGO EM DESTAQUE - MAXIMIZADA */}
                            {/* 1. Aumentei altura para h-32 */}
                            {/* 2. Removi padding da Imagem */}
                            {/* 3. Apliquei scale-110/125 específico */}
                            <div className="relative w-full h-32 mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 overflow-hidden">
                                <Image 
                                    src={currentCase.logo} 
                                    alt={currentCase.name} 
                                    fill 
                                    className={`object-contain ${currentCase.logoScale}`} 
                                />
                            </div>

                            <div className="w-12 h-1 bg-white/30 rounded-full mb-6 mt-4" />

                            <div className="relative pl-3 border-l-2 border-white/40 italic text-white/90 text-sm leading-relaxed mb-6">
                                "{currentCase.quote}"
                            </div>
                        </div>

                        <div>
                            <Button 
                                className="w-full rounded-full bg-white text-[#f78608] hover:bg-white/90 font-bold shadow-lg h-12 text-base"
                                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Quero este resultado
                            </Button>
                        </div>
                     </div>

                     {/* COLUNA DIREITA: Métricas (GRID 2x2) */}
                     <div className="w-[55%] p-10 relative flex flex-col justify-center z-10">
                         <div className="mb-10 text-center md:text-left">
                             <div className="flex items-center justify-center md:justify-start gap-2 mb-2 opacity-90">
                                <BadgeCheck className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{currentCase.highlightLabel}</span>
                             </div>
                             <h4 className="text-6xl font-bold font-[family-name:var(--font-gate)] tracking-tight drop-shadow-sm mb-1">
                                {currentCase.highlight}
                             </h4>
                         </div>

                         {/* Grid agora é 2 colunas para ficar simétrico com 4 itens */}
                         <div className="grid grid-cols-2 gap-4">
                             {currentCase.metrics.map((m, i) => (
                                 <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col justify-center items-center text-center h-28 hover:bg-white/20 transition-colors">
                                     <m.icon className="w-5 h-5 mb-2 opacity-90" />
                                     <span className="text-xl font-bold leading-none mb-1">{m.value}</span>
                                     <span className="text-[10px] text-white/80 font-medium uppercase tracking-wide leading-tight">{m.label}</span>
                                 </div>
                             ))}
                         </div>
                     </div>

                  </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}