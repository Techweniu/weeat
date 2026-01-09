"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// --- COMPONENTES INTERNOS (Para reutilização) ---

const ProblemCard = () => (
  <Card className="h-full bg-white border-2 border-[#EF4444]/20 shadow-sm">
    <CardHeader>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#EF4444]/10 rounded-full flex items-center justify-center shrink-0">
          <span className="text-2xl">😰</span>
        </div>
        <CardTitle className="font-[family-name:var(--font-gate)] text-xl md:text-2xl text-[#1A1A1A] leading-tight">
          O Ciclo de Sobrevivência
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        "Promoção que corrói margem",
        "Marketing de 'foto bonita' sem vendas",
        "Movimento sem lucro real",
        "Produto excelente, margem zero"
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <X className="text-[#EF4444] mt-1 shrink-0" size={20} />
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] text-sm md:text-base">{item}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

const SolutionCard = () => (
  <Card className="h-full bg-gradient-to-br from-[#F27A23]/5 to-[#F27A23]/10 border-2 border-[#F27A23] shadow-md relative overflow-hidden">
    {/* Brilho decorativo apenas na solução */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27A23]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    
    <CardHeader>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#F27A23]/20 rounded-full flex items-center justify-center shrink-0">
          <span className="text-2xl">🏆</span>
        </div>
        <CardTitle className="font-[family-name:var(--font-gate)] text-xl md:text-2xl text-[#1A1A1A] leading-tight">
          O Padrão de Escala weeat
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 relative z-10">
      {[
        "Promoção Inteligente & Lucrativa",
        "Marketing de Performance (ROAS Alto)",
        "Previsibilidade Financeira",
        "Produto + Vendas Escaláveis"
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="text-[#22C55E] mt-1 shrink-0" size={20} />
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] font-medium text-sm md:text-base">{item}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

// --- COMPONENTE PRINCIPAL ---

export function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<"problem" | "solution">("problem")

  return (
    <section className="py-16 md:py-20 px-4 bg-[#FFFBF5]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            Qual é o Seu Cenário Hoje?
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-sm md:text-lg hidden md:block">
            Identifique onde você está para saber onde pode chegar.
          </p>
        </motion.div>

        {/* --- VERSÃO MOBILE (Toggle + Single Card) --- */}
        <div className="block lg:hidden max-w-md mx-auto">
          
          {/* Toggle Switch */}
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 flex relative mb-8">
            {/* Background deslizante */}
            <motion.div 
              className={`absolute top-1.5 bottom-1.5 rounded-full shadow-sm z-0 transition-colors duration-300 ${
                activeTab === 'problem' ? 'bg-red-50' : 'bg-[#f78608]/10'
              }`}
              initial={false}
              animate={{ 
                x: activeTab === "problem" ? 0 : "100%", 
                width: "50%" // Ocupa metade do container
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveTab("problem")}
              className={`relative z-10 w-1/2 py-3 text-sm font-[family-name:var(--font-poppins)] font-medium transition-colors duration-200 rounded-full ${
                activeTab === "problem" ? "text-[#EF4444]" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cenário Atual 😰
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`relative z-10 w-1/2 py-3 text-sm font-[family-name:var(--font-poppins)] font-medium transition-colors duration-200 rounded-full ${
                activeTab === "solution" ? "text-[#f78608]" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cenário weeat 🏆
            </button>
          </div>

          {/* Card Dinâmico Mobile */}
          <div className="min-h-[420px]"> {/* Altura mínima para evitar layout shift */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === "problem" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "problem" ? -20 : 20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "problem" ? <ProblemCard /> : <SolutionCard />}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-4 font-[family-name:var(--font-poppins)] italic">
            Toque nos botões acima para comparar.
          </p>
        </div>

        {/* --- VERSÃO DESKTOP (Grid Original) --- */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProblemCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SolutionCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
