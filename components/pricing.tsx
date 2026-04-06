"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star, ArrowRight, ShieldCheck } from "lucide-react"

// Interface para receber a função do pai
interface PricingProps {
  onSelectPlan: (plan: string) => void
}

// --- SUB-COMPONENTES (Para reutilização Mobile/Desktop) ---

// 1. PLANO SILVER
const SilverPlan = ({ onSelect }: { onSelect: (p: string) => void }) => (
  <Card className="flex flex-col w-full h-full bg-[#FFFBF5] border-2 border-[#A1A1AA]/30 hover:border-[#A1A1AA] transition-colors duration-300">
    <CardHeader>
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="text-[#A1A1AA]" size={28} />
        <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-[#1A1A1A]">
          Plano SILVER
        </CardTitle>
      </div>
      <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-base">
        Entrada estratégica para validar canais e gerar tração inicial.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <div className="mb-8 p-4 bg-[#A1A1AA]/10 rounded-xl border border-[#A1A1AA]/20">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#71717a] uppercase tracking-wide mb-1">
          Indicado para
        </p>
        <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm leading-relaxed">
          Quem busca crescimento acelerado focando no essencial do tráfego pago.
        </p>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        {[
            "Tráfego Pago (Apenas Meta Ads)",
            "Estratégia de Growth",
            "Edição e Roteirização dos Criativos"
        ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
                <Check className="text-[#A1A1AA] mt-1 shrink-0" size={20} />
                <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm md:text-base">{item}</p>
            </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full rounded-full border-2 border-[#A1A1AA] text-[#71717a] hover:bg-[#A1A1AA] hover:text-white font-[family-name:var(--font-poppins)] font-medium transition-all bg-transparent group h-12"
        onClick={() => onSelect("Silver")}
      >
        Solicitar Proposta Silver
        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
)

// 2. PLANO GOLD
const GoldPlan = ({ onSelect }: { onSelect: (p: string) => void }) => (
  <Card className="flex flex-col w-full h-full bg-[#FFFBF5] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300">
    <CardHeader>
      <div className="flex items-center gap-2 mb-4">
        <Crown className="text-[#D4AF37]" size={28} />
        <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-[#1A1A1A]">
          Plano GOLD
        </CardTitle>
      </div>
      <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-base">
        O equilíbrio ideal entre performance de vendas e presença de marca.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <div className="mb-8 p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#D4AF37] uppercase tracking-wide mb-1">
          Indicado para
        </p>
        <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm leading-relaxed">
          Operações que precisam profissionalizar o visual e otimizar o cardápio.
        </p>
      </div>

      <div className="space-y-4 mb-8 flex-1">
         <div className="flex items-start gap-3">
            <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
            <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm md:text-base">
              <strong>Tudo do Plano Silver</strong>
            </p>
         </div>
        {[
            "Gestão do iFood ads",
            "1 mês de Forki grátis",
            "Otimização de Cardápio"
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

// 3. PLANO DIAMOND
const DiamondPlan = ({ onSelect }: { onSelect: (p: string) => void }) => (
  <div className="relative w-full flex h-full pt-6 md:pt-0">
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
            Plano DIAMOND
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
            Marcas que buscam onipresença digital e promoções inteligentes de alta conversão.
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-1">
          <div className="flex items-start gap-3">
            <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
            <p className="font-[family-name:var(--font-poppins)] text-white text-sm md:text-base">
              <strong>Tudo do Plano Gold</strong>
            </p>
          </div>
          {[
              "Tráfego Completo (Meta Ads, Google Ads e iFood)",
              "Elaboração e Gestão de Promoções Inteligentes",
              "Audiovisual completo"
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
  // Estado para o Toggle Mobile (Silver, Gold ou Diamond)
  const [activePlan, setActivePlan] = useState<"Silver" | "Gold" | "Diamond">("Diamond")
  
  const handleSelectPlan = (plan: string) => {
    onSelectPlan(plan)
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  // Lógica para posição do slider no mobile
  const getSliderPosition = () => {
    switch (activePlan) {
      case "Silver": return "0%"
      case "Gold": return "100%"
      case "Diamond": return "200%"
    }
  }

  return (
    <section id="planos" className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
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
           
           {/* Toggle Switch (3 Opções) */}
           <div className="bg-[#FFFBF5] p-1.5 rounded-full shadow-inner border border-gray-200 flex relative mb-8">
              {/* Slider de Fundo */}
              <motion.div 
                className={`absolute top-1.5 bottom-1.5 rounded-full shadow-md z-0 transition-colors duration-300 ${
                  activePlan === 'Diamond' ? 'bg-[#1A1A1A] border border-[#f78608]' : 'bg-white border border-gray-200'
                }`}
                initial={false}
                animate={{ 
                  x: getSliderPosition(), 
                  width: "33.33%" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => setActivePlan("Silver")}
                className={`relative z-10 w-1/3 py-3 text-xs sm:text-sm font-[family-name:var(--font-poppins)] font-bold transition-colors duration-200 rounded-full flex items-center justify-center gap-1 ${
                  activePlan === "Silver" ? "text-[#71717a]" : "text-gray-400"
                }`}
              >
                SILVER
              </button>

              <button
                onClick={() => setActivePlan("Gold")}
                className={`relative z-10 w-1/3 py-3 text-xs sm:text-sm font-[family-name:var(--font-poppins)] font-bold transition-colors duration-200 rounded-full flex items-center justify-center gap-1 ${
                  activePlan === "Gold" ? "text-[#D4AF37]" : "text-gray-400"
                }`}
              >
                GOLD
              </button>

              <button
                onClick={() => setActivePlan("Diamond")}
                className={`relative z-10 w-1/3 py-3 text-xs sm:text-sm font-[family-name:var(--font-poppins)] font-bold transition-colors duration-200 rounded-full flex items-center justify-center gap-1 ${
                  activePlan === "Diamond" ? "text-[#f78608]" : "text-gray-400"
                }`}
              >
                DIAMOND
              </button>
           </div>

           {/* Card Dinâmico */}
           <div className="min-h-[600px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                   {activePlan === "Silver" && <SilverPlan onSelect={handleSelectPlan} />}
                   {activePlan === "Gold" && <GoldPlan onSelect={handleSelectPlan} />}
                   {activePlan === "Diamond" && <DiamondPlan onSelect={handleSelectPlan} />}
                </motion.div>
             </AnimatePresence>
           </div>
        </div>


        {/* --- DESKTOP VIEW: GRID ORIGINAL (AGORA COM 3 COLUNAS) --- */}
        <div className="hidden lg:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          
          {/* Silver Plan */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex h-full"
          >
             <SilverPlan onSelect={handleSelectPlan} />
          </motion.div>

          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
