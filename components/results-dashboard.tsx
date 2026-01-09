"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, 
  ShoppingBag, BadgeCheck, Zap, Percent, Repeat, Clock, Star 
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- DADOS (Mantidos) ---
const cases = [
  {
    id: 1,
    niche: "Hamburgueria Artesanal",
    tags: ["Delivery", "Salão", "Tráfego"],
    highlight: "+R$ 28k",
    highlightLabel: "Faturamento Mensal Extra",
    metrics: [
      { label: "ROAS (Ads)", value: "18.5x", icon: Zap },
      { label: "Ticket Médio", value: "R$ 59,30", icon: DollarSign },
      { label: "Novos Clientes", value: "+450", icon: Users },
      { label: "Taxa Conv.", value: "4.8%", icon: Percent },
      { label: "Recompra", value: "32%", icon: Repeat },
      { label: "Custo/Pedido", value: "R$ 2,10", icon: ShoppingBag },
    ],
    quote: "A otimização dos combos aumentou nossa margem em 30% já no primeiro mês."
  },
  {
    id: 2,
    niche: "Culinária Japonesa",
    tags: ["Full Delivery", "LTV", "CRM"],
    highlight: "1.200",
    highlightLabel: "Pedidos no Mês (Recorde)",
    metrics: [
      { label: "Faturamento", value: "R$ 180k", icon: TrendingUp },
      { label: "Recompra", value: "42%", icon: Repeat },
      { label: "Custo/Pedido", value: "R$ 1,80", icon: DollarSign },
      { label: "LTV (6 meses)", value: "R$ 850", icon: Clock },
      { label: "Avaliação", value: "4.9", icon: Star },
      { label: "ROAS", value: "22x", icon: Zap },
    ],
    quote: "Conseguimos prever nosso faturamento semanal com precisão cirúrgica."
  },
  {
    id: 3,
    niche: "Steakhouse Premium",
    tags: ["Reservas", "Ticket Alto", "Branding"],
    highlight: "R$ 210",
    highlightLabel: "Ticket Médio Consolidado",
    metrics: [
      { label: "Reservas", value: "+150%", icon: ShoppingBag },
      { label: "Faturamento", value: "R$ 350k", icon: TrendingUp },
      { label: "ROI Total", value: "12x", icon: Zap },
      { label: "CAC", value: "R$ 15,00", icon: Users },
      { label: "Margem Liq.", value: "18%", icon: Percent },
      { label: "No-Show", value: "-80%", icon: TrendingUp },
    ],
    quote: "Nosso salão nunca esteve tão cheio nas terças e quartas-feiras."
  },
  {
    id: 4,
    niche: "Pizzaria Delivery",
    tags: ["Volume", "Ifood", "Cuponagem"],
    highlight: "-40%",
    highlightLabel: "Redução no CAC",
    metrics: [
      { label: "Pedidos/Mês", value: "2.5k", icon: ShoppingBag },
      { label: "Faturamento", value: "R$ 145k", icon: DollarSign },
      { label: "Novos Clientes", value: "+600", icon: Users },
      { label: "Conversão", value: "6.2%", icon: Percent },
      { label: "Ticket Médio", value: "R$ 72,00", icon: TrendingUp },
      { label: "ROAS", value: "15x", icon: Zap },
    ],
    quote: "Dominamos o delivery da região com campanhas agressivas e lucrativas."
  },
  {
    id: 5,
    niche: "Poke & Saudável",
    tags: ["Tendência", "Almoço", "Recorrência"],
    highlight: "+55%",
    highlightLabel: "Crescimento Ano a Ano",
    metrics: [
      { label: "Faturamento", value: "R$ 95k", icon: TrendingUp },
      { label: "Freqüência", value: "3.5x/mês", icon: Repeat },
      { label: "Ticket Médio", value: "R$ 48,90", icon: DollarSign },
      { label: "Avaliação", value: "5.0", icon: Star },
      { label: "Custo/Lead", value: "R$ 1,50", icon: Users },
      { label: "Margem", value: "22%", icon: Percent },
    ],
    quote: "Transformamos o movimento do almoço em nossa principal fonte de receita."
  },
  {
    id: 6,
    niche: "Cafeteria & Doceria",
    tags: ["Salão", "Takeaway", "Venda Cruzada"],
    highlight: "R$ 38",
    highlightLabel: "Ticket Médio (Antes R$ 22)",
    metrics: [
      { label: "Venda Cruzada", value: "+45%", icon: Repeat },
      { label: "Faturamento", value: "R$ 68k", icon: DollarSign },
      { label: "Clientes/Dia", value: "180", icon: Users },
      { label: "ROAS", value: "10x", icon: Zap },
      { label: "Takeaway", value: "+30%", icon: ShoppingBag },
      { label: "Lucro", value: "+25%", icon: TrendingUp },
    ],
    quote: "A estratégia de upsell no balcão mudou o jogo do nosso faturamento."
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
      
      {/* Background Decorativo (Visível apenas em Desktop para performance) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f78608]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-8 md:mb-16">
           <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-5xl text-[#1A1A1A] mb-3 md:mb-4">
            Resultados Comprovados
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/60 max-w-2xl mx-auto text-base md:text-lg">
            Números reais de quem já escalou com a weeat.
          </p>
        </div>

        {/* =========================================================
            VERSÃO MOBILE (Layout Limpo + Foco no Número)
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
                        {/* Header do Card */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="inline-block px-3 py-1 bg-orange-100 text-[#f78608] text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                                    {currentCase.tags[0]}
                                </span>
                                <h3 className="font-[family-name:var(--font-gate)] text-xl text-[#1A1A1A] leading-tight">
                                    {currentCase.niche}
                                </h3>
                            </div>
                            <BadgeCheck className="text-[#f78608] w-6 h-6 shrink-0" />
                        </div>

                        {/* Resultado Principal (Gigante) */}
                        <div className="text-center mb-6 py-4 bg-[#FFFBF5] rounded-2xl border border-orange-100">
                             <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Resultado Principal</p>
                             <h2 className="text-5xl font-bold font-[family-name:var(--font-gate)] text-[#f78608] tracking-tighter">
                                {currentCase.highlight}
                             </h2>
                             <p className="text-sm text-[#1A1A1A]/70 font-medium mt-1">
                                {currentCase.highlightLabel}
                             </p>
                        </div>

                        {/* Grid Métricas (Simplificado - Top 4) */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {currentCase.metrics.slice(0, 4).map((m, i) => (
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

            {/* Navegação Mobile (Externa ao card para não ocupar espaço de conteúdo) */}
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
            VERSÃO DESKTOP (Carrossel 3D Original - Mantido)
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
             {/* CARD ANTERIOR */}
             <motion.div
                key={`prev-${getIndex(-1)}`}
                className="absolute w-[50%] h-[480px] bg-gradient-to-br from-[#f78608]/40 to-[#ff9933]/40 rounded-[2rem] border border-white/10 blur-[2px] opacity-40 pointer-events-none"
                initial={{ x: "-50%", scale: 0.8, opacity: 0 }}
                animate={{ x: "-55%", scale: 0.85, opacity: 0.4, zIndex: 10 }}
                transition={{ duration: 0.5 }}
             >
                <div className="p-8 h-full flex flex-col justify-center items-center">
                    <h3 className="text-4xl font-[family-name:var(--font-gate)] text-white/50">
                        Case {cases[getIndex(-1)].id}
                    </h3>
                </div>
             </motion.div>

             {/* CARD SEGUINTE */}
             <motion.div
                key={`next-${getIndex(1)}`}
                className="absolute w-[50%] h-[480px] bg-gradient-to-br from-[#f78608]/40 to-[#ff9933]/40 rounded-[2rem] border border-white/10 blur-[2px] opacity-40 pointer-events-none"
                initial={{ x: "50%", scale: 0.8, opacity: 0 }}
                animate={{ x: "55%", scale: 0.85, opacity: 0.4, zIndex: 10 }}
                transition={{ duration: 0.5 }}
             >
                <div className="p-8 h-full flex flex-col justify-center items-center">
                    <h3 className="text-4xl font-[family-name:var(--font-gate)] text-white/50">
                         Case {cases[getIndex(1)].id}
                    </h3>
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
                  <div className="bg-gradient-to-br from-[#f78608] to-[#ff9933] rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(247,134,8,0.4)] border border-white/20 overflow-hidden text-white relative flex flex-row">
                     
                     <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
                     
                     {/* COLUNA ESQUERDA: Info */}
                     <div className="w-[40%] p-10 flex flex-col justify-between border-r border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {currentCase.tags.slice(0, 3).map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-white/90 bg-white/20 border border-white/20 px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="font-[family-name:var(--font-gate)] text-6xl text-white mb-1 leading-none drop-shadow-md">
                                Case {currentCase.id}
                            </h3>
                            <p className="font-[family-name:var(--font-poppins)] text-xl text-white/90 font-medium mb-6">
                                {currentCase.niche}
                            </p>

                            <div className="w-12 h-1 bg-white/30 rounded-full mb-6" />

                            <div className="relative pl-3 border-l-2 border-white/40 italic text-white/90 text-base leading-relaxed mb-6">
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

                     {/* COLUNA DIREITA: Métricas */}
                     <div className="w-[60%] p-10 relative flex flex-col justify-center z-10">
                         <div className="mb-6">
                             <div className="flex items-center gap-2 mb-2 opacity-90">
                                <BadgeCheck className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Resultado Principal</span>
                             </div>
                             <h4 className="text-7xl font-bold font-[family-name:var(--font-gate)] tracking-tight drop-shadow-sm mb-1">
                                {currentCase.highlight}
                             </h4>
                             <p className="text-white/80 text-sm font-medium">{currentCase.highlightLabel}</p>
                         </div>

                         <div className="grid grid-cols-3 gap-3">
                             {currentCase.metrics.map((m, i) => (
                                 <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col justify-center items-center text-center">
                                     <m.icon className="w-5 h-5 mb-2 opacity-80" />
                                     <span className="text-xl font-bold leading-none mb-1">{m.value}</span>
                                     <span className="text-[10px] text-white/70 font-medium uppercase tracking-wide">{m.label}</span>
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
