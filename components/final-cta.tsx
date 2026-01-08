"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  const whatsappLink = "https://wa.me/553497304302?text=Ol%C3%A1!%20Estou%20pronto%20para%20investir%20no%20crescimento%20do%20meu%20restaurante.%20Vamos%20conversar%3F"

  return (
    <section className="py-24 px-4 bg-[#f78608] relative overflow-hidden">
      {/* Elementos de fundo para textura */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
         <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-gate)] text-5xl md:text-6xl text-white mb-6 leading-tight"
        >
          Pronto para ver o seu negócio explodir de verdade?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-poppins)] text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Não deixe mais dinheiro na mesa. Junte-se aos parceiros da WeEat e transforme sua operação em uma máquina de vendas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="bg-white text-[#f78608] hover:bg-gray-100 rounded-full px-10 py-8 text-xl font-[family-name:var(--font-poppins)] font-semibold shadow-2xl transition-transform hover:scale-105 group"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Começar Agora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
