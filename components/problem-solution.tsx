"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-[#FFFBF5]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Qual é o Seu Cenário Hoje?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem - Cenário 01 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white border-2 border-[#EF4444]/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#EF4444]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😰</span>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A]">
                    O Ciclo de Sobrevivência
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="text-[#EF4444] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Promoção que corrói margem</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-[#EF4444] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">
                    Marketing de 'foto bonita' sem vendas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-[#EF4444] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Movimento sem lucro real</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-[#EF4444] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">
                    Produto excelente, margem zero
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution - Cenário 02 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-[#F27A23]/5 to-[#F27A23]/10 border-2 border-[#F27A23]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F27A23]/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A]">
                    O Padrão de Escala weeat
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-[#22C55E] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] font-medium">
                    Promoção Inteligente & Lucrativa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#22C55E] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] font-medium">
                    Marketing de Performance (ROAS Alto)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#22C55E] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] font-medium">
                    Previsibilidade Financeira
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#22C55E] mt-1 shrink-0" size={20} />
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A] font-medium">
                    Produto + Vendas Escaláveis
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
