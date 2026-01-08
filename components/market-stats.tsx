"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed } from "lucide-react"

export function MarketStats() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* DECORAÇÃO DE FUNDO */}
      <div className="absolute top-10 right-10 text-[#f78608]/5 pointer-events-none select-none rotate-12">
        <UtensilsCrossed size={200} strokeWidth={1} />
      </div>
      <div className="absolute bottom-10 left-10 text-[#f78608]/5 pointer-events-none select-none -rotate-12">
        <UtensilsCrossed size={180} strokeWidth={1} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            O Oceano Azul do Food Service
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto text-pretty">
            A maioria dos seus concorrentes não sabe o que está fazendo. A oportunidade é agora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-[#FFFBF5] rounded-3xl border border-[#f78608]/10"
          >
            <div className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl text-[#f78608] mb-4">1,6Mi</div>
            <p className="font-[family-name:var(--font-poppins)] text-base text-[#1A1A1A]/80">
              Restaurantes ativos no Brasil
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-[#FFFBF5] rounded-3xl border border-[#f78608]/10"
          >
            <div className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl text-[#f78608] mb-4">500 Mil</div>
            <p className="font-[family-name:var(--font-poppins)] text-base text-[#1A1A1A]/80">
              Já no digital (Apps/Zap)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-[#FFFBF5] rounded-3xl border-2 border-[#EF4444]"
          >
            <div className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl text-[#EF4444] mb-4">
              {"<"}1,5%
            </div>
            <p className="font-[family-name:var(--font-poppins)] text-base text-[#1A1A1A]/80 font-medium">
              Utilizam marketing profissional
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
