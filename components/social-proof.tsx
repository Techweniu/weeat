"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wind } from "lucide-react"

export function SocialProof() {
  const [investimento, setInvestimento] = useState(1000)
  const retorno = investimento * 25

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section id="cases" className="py-20 px-4 bg-[#FFFBF5] relative overflow-hidden">
      {/* VAPOR / CALOR DECORATIVO */}
      <div className="absolute left-1/4 bottom-20 text-[#f78608]/10 animate-pulse duration-[4s] pointer-events-none">
        <Wind size={120} strokeWidth={1} className="-rotate-90 scale-y-150" />
      </div>
      <div className="absolute right-1/4 bottom-40 text-[#f78608]/10 animate-pulse duration-[5s] delay-700 pointer-events-none">
         <Wind size={100} strokeWidth={1} className="-rotate-90 scale-y-150" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-6">
            Nosso Propósito é Gerar Faturamento
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f78608] to-[#da7607] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-2 leading-relaxed opacity-90">
                Se você investir
              </p>

              <div className="flex flex-col items-center justify-center mb-6 group">
                <div className="relative inline-block">
                  <input
                    type="number"
                    value={investimento}
                    onChange={(e) => setInvestimento(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className="font-[family-name:var(--font-gate)] text-5xl md:text-7xl border-b-4 border-white/30 group-hover:border-white transition-colors pb-2 px-4">
                    {formatMoney(investimento)}
                  </div>
                  <p className="text-sm mt-2 opacity-70 font-[family-name:var(--font-poppins)]">
                    (Clique para editar ou arraste abaixo)
                  </p>
                </div>

                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={investimento}
                  onChange={(e) => setInvestimento(Number(e.target.value))}
                  className="w-full max-w-xs mt-4 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-6 leading-relaxed opacity-90">
                o retorno estimado em pedidos é:
              </p>

              <motion.div
                key={retorno}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-[family-name:var(--font-gate)] text-6xl md:text-8xl mb-6 text-[#FFFBF5] drop-shadow-md"
              >
                {formatMoney(retorno)}
              </motion.div>

              <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto">
                Baseado no ROAS médio de 25x dos nossos parceiros ativos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
