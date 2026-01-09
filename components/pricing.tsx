"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star, ArrowRight } from "lucide-react"

// Interface para receber a função do pai
interface PricingProps {
  onSelectPlan: (plan: string) => void
}

// --- SUB-COMPONENTES (Para reutilização Mobile/Desktop) ---

const GoldPlan = ({ onSelect }: { onSelect: (p: string) => void }) => (
  <Card className="flex flex-col w-full h-full bg-[#FFFBF5] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300">
    <CardHeader>
      <div className="flex items-center gap-2 mb-4">
        <Crown className="text-[#D4AF37]" size={28} />
        <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-[#1A1A1A]">
          Escopo GOLD
        </CardTitle>
      </div>
      <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-base">
        Ideal para quem precisa validar canais e começar a escalar vendas rapidamente.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <div className="mb-8 p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#D4AF37] uppercase tracking-wide mb-1">
          Indicado para
        </p>
        <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm leading-relaxed">
          Operações que buscam previsibilidade de vendas e otimização de tráfego pago.
        </p>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        {[
            "Gestão de Tráfego Pago (Ads)",
            "Delineamento Estratégico",
            "Otimização de Criativos",
            "Relatórios de Performance"
        ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
                <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm md:text-base">{item}</p>
            </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-[family-name:var(--font-poppins)] font-medium transition-all bg-transparent group h-12"
        onClick={() => onSelect("Gold")}
      >
        Solicitar Proposta Gold
        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
)

const DiamondPlan = ({ onSelect }: { onSelect: (p: string) => void }) => (
  <div className="relative w-full flex h-full pt-6 md:pt-0"> {/* Padding top no mobile para o badge não cortar */}
    <div className="absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-[200px]">
      <div className="bg-[#f78608] text-white py-1 px-4 rounded-full font-[family-name:var(--font-poppins)] font-medium text-xs md:text-sm shadow-lg text-center flex items-center justify-center gap-1">
        🏆 Mais Escolhido
      </div>
    </div>
    
    <Card className="flex flex-col w-full bg-[#1A1A1A] border-2 border-[#f78608] shadow-2xl relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f78608]/10 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <CardHeader className="pt-8 md:pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-[#f78608]" size={28} fill="#f78608" />
          <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-white">
            Escopo DIAMOND
          </CardTitle>
        </div>
        <CardDescription className="font-[family-name:var(--font-poppins)] text-white/70 text-base">
          A experiência Full Service da weeat. Marketing 360º para dominar a região.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-8 p-4 bg-[#f78608]/10 rounded-xl border border-[#f78608]/30">
           <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#f78608] uppercase tracking-wide mb-1">
            Indicado para
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-white/90 text-sm leading-relaxed">
            Marcas que precisam de posicionamento forte, audiovisual profissional e engenharia de cardápio.
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-1">
          <div className="flex items-start gap-3">
            <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
            <p className="font-[family-name:var(--font-poppins)] text-white text-sm md:text-base">
              <strong>Tudo do Gold +</strong>
            </p>
          </div>
          {[
              "Audiovisual Profissional (Fotos/Vídeos)",
              "Engenharia de Cardápio (Menu)",
              "Ações Promocionais Estratégicas"
          ].map((item, i) => (
             <div key={i} className="flex items-start gap-3">
                <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
                <p className="font-[family-name:var(--font-poppins)] text-white text-sm md:text-base">{item}</p>
             </div>
          ))}
        </div>

        <Button 
          className="w-full rounded-full bg-[#f78608] hover:bg-[#da7607] text-white font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg group h-12"
          onClick={() => onSelect("Diamond")}
        >
          Falar com Consultor
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  </div>
)

// --- COMPONENTE PRINCIPAL ---

export function Pricing({ onSelectPlan }: PricingProps) {
  // Estado para o Toggle Mobile (Diamond pré-selecionado)
  const [activePlan, setActivePlan] = useState<"Gold" | "Diamond">("Diamond")
  
  const handleSelectPlan = (plan: string) => {
    onSelectPlan(plan)
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="planos" className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Modelos de Atuação
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-base md:text-lg text-[#1A1A1A]/70 text-balance max-w-2xl mx-auto">
            Não vendemos pacotes fechados. Entregamos a estratégia exata que o seu momento de negócio exige.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: TOGGLE + SINGLE CARD --- */}
        <div className="block lg:hidden max-w-md mx-auto">
           
           {/* Toggle Switch */}
           <div className="bg-[#FFFBF5] p-1.5 rounded-full shadow-inner border border-gray-200 flex relative mb-8">
              {/* Slider de Fundo */}
              <motion.div 
                className={`absolute top-1.5 bottom-1.5 rounded-full shadow-md z-0 transition-all duration-300 ${
                  activePlan === 'Gold' ? 'bg-white border border-[#D4AF37]/50' : 'bg-[#1A1A1A] border border-[#f78608]'
                }`}
                initial={false}
                animate={{ 
                  x: activePlan === "Gold" ? 0 : "100%", 
                  width: "50%" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => setActivePlan("Gold")}
                className={`relative z-10 w-1/2 py-3 text-sm font-[family-name:var(--font-poppins)] font-bold transition-colors duration-200 rounded-full flex items-center justify-center gap-2 ${
                  activePlan === "Gold" ? "text-[#D4AF37]" : "text-gray-400"
                }`}
              >
                <Crown size={16} />
                GOLD
              </button>
              <button
                onClick={() => setActivePlan("Diamond")}
                className={`relative z-10 w-1/2 py-3 text-sm font-[family-name:var(--font-poppins)] font-bold transition-colors duration-200 rounded-full flex items-center justify-center gap-2 ${
                  activePlan === "Diamond" ? "text-[#f78608]" : "text-gray-400"
                }`}
              >
                <Star size={16} />
                DIAMOND
              </button>
           </div>

           {/* Card Dinâmico */}
           <div className="min-h-[600px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan}
                  initial={{ opacity: 0, x: activePlan === "Gold" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activePlan === "Gold" ? -20 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                   {activePlan === "Gold" ? (
                      <GoldPlan onSelect={handleSelectPlan} />
                   ) : (
                      <DiamondPlan onSelect={handleSelectPlan} />
                   )}
                </motion.div>
             </AnimatePresence>
           </div>
        </div>


        {/* --- DESKTOP VIEW: GRID ORIGINAL --- */}
        <div className="hidden lg:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex h-full"
          >
             <GoldPlan onSelect={handleSelectPlan} />
          </motion.div>

          {/* Diamond Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex h-full"
          >
             <DiamondPlan onSelect={handleSelectPlan} />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
