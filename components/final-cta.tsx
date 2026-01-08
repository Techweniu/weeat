"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-white mb-8 leading-tight text-balance">
            Parabéns pela decisão. Era isso que o seu negócio precisava.
          </h2>

          <Button
            size="lg"
            className="bg-[#F27A23] hover:bg-[#D66A1D] text-white rounded-full px-12 py-8 text-xl font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-2xl"
          >
            Agendar Reunião Agora
          </Button>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="font-[family-name:var(--font-poppins)] text-white/60 text-sm">
              Copyright weeat © 2026. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
