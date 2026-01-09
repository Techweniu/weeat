"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star, ArrowRight } from "lucide-react"

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

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
            Modelos de Atuação
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg text-[#1A1A1A]/70 text-balance max-w-2xl mx-auto">
            Não vendemos pacotes fechados. Entregamos a estratégia exata que o seu momento de negócio exige.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full bg-[#FFFBF5] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300">
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
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Gestão de Tráfego Pago (Ads)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Delineamento Estratégico</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Otimização de Criativos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                    <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]">Relatórios de Performance</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-[family-name:var(--font-poppins)] font-medium transition-all bg-transparent group"
                  onClick={scrollToContact}
                >
                  Solicitar Proposta Gold
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
            className="flex"
          >
            <div className="relative w-full flex">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-[200px]">
                <div className="bg-[#f78608] text-white py-1 px-4 rounded-full font-[family-name:var(--font-poppins)] font-medium text-sm shadow-lg text-center">
                  🏆 Mais Escolhido
                </div>
              </div>
              
              <Card className="flex flex-col w-full bg-[#1A1A1A] border-2 border-[#f78608] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f78608]/10 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <CardHeader>
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
                      <p className="font-[family-name:var(--font-poppins)] text-white">
                        <strong>Tudo do Gold +</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Audiovisual Profissional (Fotos/Vídeos)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Engenharia de Cardápio (Menu)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-[#f78608] mt-1 shrink-0" size={20} />
                      <p className="font-[family-name:var(--font-poppins)] text-white">Ações Promocionais Estratégicas</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full rounded-full bg-[#f78608] hover:bg-[#da7607] text-white font-[family-name:var(--font-poppins)] font-medium transition-transform hover:scale-105 shadow-lg group"
                    onClick={scrollToContact}
                  >
                    Falar com Consultor
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
             <p className="font-[family-name:var(--font-poppins)] text-sm text-[#1A1A1A]/50">
                * Os valores de investimento variam conforme a complexidade e abrangência geográfica da operação.
             </p>
        </div>
      </div>
    </section>
  )
}
