"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star } from "lucide-react"

export function Pricing() {
  return (
    <section id="planos" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Escolha Seu Plano de Crescimento
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg text-[#1A1A1A]/70 text-balance">
            Investimento para crescimento real e previsível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-[#FFFBF5] border-2 border-[#D4AF37]/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="text-[#D4AF37]" size={28} />
                  <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-[#1A1A1A]">
                    Plano GOLD
                  </CardTitle>
                </div>
                <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-base">
                  Essencial para começar a escalar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="font-[family-name:var(--font-gate)] text-5xl text-[#1A1A1A] mb-2">12x R$ 600</div>
                  <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/60">ou R$ 6.180 à vista</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Tráfego Pago otimizado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Estratégia de Growth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Edição de Criativos</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-[family-name:var(--font-poppins)] font-medium transition-all bg-transparent"
                >
                  Começar com Gold
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Diamond Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-[#F27A23] text-white px-6 py-2 rounded-full font-[family-name:var(--font-poppins)] font-medium text-sm shadow-lg">
                  🏆 Recomendado
                </div>
              </div>
              <Card className="h-full bg-[#1A1A1A] border-2 border-[#F27A23] shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-[#F27A23]" size={28} fill="#F27A23" />
                    <CardTitle className="font-[family-name:var(--font-gate)] text-3xl text-white">
                      Plano DIAMOND
                    </CardTitle>
                  </div>
                  <CardDescription className="font-[family-name:var(--font-poppins)] text-white/70 text-base">
                    Full Service para dominar o mercado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <div className="font-[family-name:var(--font-gate)] text-5xl text-white mb-2">3x R$ 2.660</div>
                    <p className="font-[family-name:var(--font-poppins)] text-white/60">Total: R$ 7.980</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="text-[#F27A23] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">
                        <strong>Tudo do Gold +</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#F27A23] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Audiovisual Completo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#F27A23] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Engenharia de Cardápio</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#F27A23] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Promoções Estratégicas</p>
                    </div>
                  </div>

                  <Button className="w-full rounded-full bg-[#F27A23] hover:bg-[#D66A1D] text-white font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg">
                    Quero Dominar o Mercado
                  </Button>

                  {/* Visual placeholder */}
                  <div className="mt-6 w-full aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-2">
                        <span className="font-[family-name:var(--font-gate)] text-white text-xs">Pricing Visual</span>
                      </div>
                      <p className="font-[family-name:var(--font-poppins)] text-xs text-white/60">
                        Placeholder for pricing illustration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
