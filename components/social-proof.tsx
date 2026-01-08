"use client"

import { motion } from "framer-motion"

export function SocialProof() {
  return (
    <section id="cases" className="py-20 px-4 bg-[#FFFBF5]">
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
            className="bg-gradient-to-br from-[#F27A23] to-[#D66A1D] rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <div className="mb-8">
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-6 leading-relaxed">
                Para cada
              </p>
              <div className="font-[family-name:var(--font-gate)] text-6xl md:text-8xl mb-6">R$ 1</div>
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-8 leading-relaxed">
                investido,
              </p>
              <div className="font-[family-name:var(--font-gate)] text-7xl md:text-9xl mb-6 text-[#FFFBF5]">R$ 25</div>
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl leading-relaxed">
                retornam em pedidos reais.
              </p>
            </div>

            {/* Illustration placeholder */}
            <div className="mt-12 w-full max-w-md mx-auto aspect-video bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  <span className="font-[family-name:var(--font-gate)] text-white text-lg">Social Proof</span>
                </div>
                <p className="font-[family-name:var(--font-poppins)] text-sm text-white/80">
                  Placeholder for metrics illustration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
