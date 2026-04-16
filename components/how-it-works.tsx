"use client"

import { Sparkles, BarChart3, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: <Sparkles className="w-12 h-12 text-[#f78608]" />,
    title: "1. Criativos Atrativos",
    description: "Estruturação de criativos atrativos para gerar aquisição de novos clientes."
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-[#f78608]" />,
    title: "2. Gestão & Conversão",
    description: "Gerenciamento de campanhas e otimização de cardápios para aumentar a conversão! Com anúncios ativos apenas no horário de funcionamento, a geração de clientes é certa!"
  },
  {
    icon: <Target className="w-12 h-12 text-[#f78608]" />,
    title: "3. Ofertas Impactantes",
    description: "Criação de ofertas impactantes, para impactar o cliente certo na hora certa!"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 px-4 bg-black relative overflow-hidden">
      
      {/* Brilho de fundo laranja para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f78608]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl text-white mb-6 leading-[1.1]">
            O método weeat <br className="hidden md:block" />
            garante <span className="text-[#f78608]">dinheiro <br className="md:hidden" /> no seu bolso!</span>
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Com 3 pilares focados em vender mais, nosso método já foi comprovado por mais de 100 clientes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="border-2 border-white/5 bg-[#0a0a0a] shadow-2xl rounded-[40px] hover:border-[#f78608]/30 transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="pt-16 pb-16 px-8 flex flex-col items-center text-center h-full">
                
                <div className="relative mb-12 flex flex-col items-center">
                  <div className="text-[#f78608] mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <div className="font-[family-name:var(--font-gate)] text-7xl text-white/[0.03] pointer-events-none absolute -bottom-6 -left-6">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-gate)] text-2xl md:text-3xl text-white mb-6 leading-tight group-hover:text-[#f78608] transition-colors relative z-10">
                  {pillar.title}
                </h3>

                <p className="font-[family-name:var(--font-poppins)] text-white/60 leading-relaxed text-base md:text-lg relative z-10">
                  {pillar.description}
                </p>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prova Social */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
             <p className="text-sm font-[family-name:var(--font-poppins)] text-white/80">
              <span className="font-bold text-[#f78608]">+100 restaurantes</span> escalando agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}