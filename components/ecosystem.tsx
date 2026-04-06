"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChefHat, Flame, UtensilsCrossed, ScrollText, Bell, Camera, ArrowRight } from "lucide-react"

const services = [
  {
    icon: ChefHat,
    title: "Delineamento Estratégico",
    description: "Planejamento direto ao ponto",
    color: "#f78608",
  },
  {
    icon: Flame,
    title: "Tráfego Pago (Meta Ads)",
    description: "Foco em conversão",
    color: "#22C55E",
  },
  {
    icon: UtensilsCrossed,
    title: "Criativos Competitivos",
    description: "Anúncios que dão fome",
    color: "#f78608",
  },
  {
    icon: ScrollText,
    title: "Cardápio Digital",
    description: "Engenharia de menu",
    color: "#22C55E",
  },
  {
    icon: Bell,
    title: "Ações de Marketing",
    description: "Promoções que protegem o lucro",
    color: "#f78608",
  },
  {
    icon: Camera,
    title: "Audiovisual Completo",
    description: "Conteúdo que vende",
    color: "#22C55E",
  },
]

export function Ecosystem() {
  return (
    <section id="metodo" className="py-16 md:py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-5xl text-[#1A1A1A] mb-4">
            O Ecossistema weeat
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-base md:text-lg text-[#1A1A1A]/70 text-balance px-4">
            Tudo o que precisa para escalar, num único lugar.
          </p>
        </motion.div>

        {/* --- DESKTOP VIEW (Grid Original) --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-[#FFFBF5] border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <CardHeader>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={28} style={{ color: service.color }} />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-gate)] text-xl text-[#1A1A1A]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* --- MOBILE VIEW (Swipe Carousel com Snap) --- */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
           {services.map((service, index) => {
             const Icon = service.icon
             return (
               <div 
                 key={index} 
                 className="min-w-[85%] snap-center flex" // 85% width para mostrar o próximo card
               >
                 <Card className="w-full bg-[#FFFBF5] border border-gray-100 shadow-md h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <Icon size={24} style={{ color: service.color }} />
                        </div>
                        {/* Indicador visual de swipe no primeiro card */}
                        {index === 0 && (
                            <ArrowRight className="text-gray-300 animate-pulse" size={20} />
                        )}
                      </div>
                      <CardTitle className="font-[family-name:var(--font-gate)] text-lg text-[#1A1A1A] leading-tight">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-sm">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                 </Card>
               </div>
             )
           })}
           
           {/* Espaçador final para garantir que o último card não fique colado à borda */}
           <div className="min-w-[4%] snap-align-none" />
        </div>

      </div>
    </section>
  )
}
