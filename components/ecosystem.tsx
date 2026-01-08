"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// NOVOS ÍCONES IMPORTADOS
import { ChefHat, Flame, UtensilsCrossed, ScrollText, Bell, Camera } from "lucide-react"

const services = [
  {
    icon: ChefHat, // Estratégia = Chef
    title: "Delineamento Estratégico",
    description: "Planejamento direto ao ponto",
    color: "#f78608", // Nova cor laranja
  },
  {
    icon: Flame, // Tráfego = Fogo/Potência
    title: "Tráfego Pago (Meta Ads)",
    description: "Foco em conversão",
    color: "#22C55E",
  },
  {
    icon: UtensilsCrossed, // Criativos = Apresentação/Talheres
    title: "Criativos Competitivos",
    description: "Anúncios que dão fome",
    color: "#f78608",
  },
  {
    icon: ScrollText, // Cardápio = Comanda/Menu
    title: "Cardápio Digital",
    description: "Engenharia de menu",
    color: "#22C55E",
  },
  {
    icon: Bell, // Marketing = Sino de Atenção
    title: "Ações de Marketing",
    description: "Promoções que protegem o lucro",
    color: "#f78608",
  },
  {
    icon: Camera, // Audiovisual = Fotografia
    title: "Audiovisual Completo",
    description: "Conteúdo que vende",
    color: "#22C55E",
  },
]

export function Ecosystem() {
  return (
    <section id="metodo" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            O Ecossistema weeat
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg text-[#1A1A1A]/70 text-balance">
            Tudo para Escalar Seu Food Service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
