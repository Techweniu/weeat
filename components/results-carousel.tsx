"use client"

import * as React from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  Video, 
  BarChart3, 
  LayoutTemplate, 
  Users2, 
  Megaphone, 
  ArrowUpRight 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <ShoppingBag className="w-7 h-7 text-[#f78608]" />,
    title: "Soluções Comerciais para Restaurantes",
    image: "/solucao.webp", // Ajuste para o nome real do seu ficheiro
    points: [
      "Scripts, processos e ferramentas prontos para aumentar seus pedidos e reservas.",
      "Treinamos seus atendentes para venderem mais no balcão, salão ou WhatsApp."
    ]
  },
  {
    icon: <Video className="w-7 h-7 text-[#f78608]" />,
    title: "Criativos/Vídeos",
    image: "/criativo.webp",
    points: [
      "Vídeos 100% focados na venda de mais pedidos.",
      "Criados, testados e validados em +2.000 restaurantes atendidos.",
      "Feitos por profissionais qualificados, de alto nível e performance."
    ]
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-[#f78608]" />,
    title: "Relatórios e Acompanhamento",
    image: "/relatorio.webp",
    points: [
      "Monitoramos os indicadores mais importantes do seu restaurante e te entregamos análises semanais para tomada de decisão rápida.",
      "Controle total da sua performance com reuniões semanais de alinhamento."
    ]
  },
  {
    icon: <LayoutTemplate className="w-7 h-7 text-[#f78608]" />,
    title: "Cardápio Digital",
    image: "/cardapio.webp",
    points: [
      "Estruturamos todo o seu cardápio digital, desde o layout até os itens.",
      "Aumentamos seu ticket médio para ter maior margem de lucro, utilizando uma estratégia validada.",
      "Maior conversão de clientes através de hierarquia visual, produtos âncora e campanhas sazonais."
    ]
  },
  {
    icon: <Users2 className="w-7 h-7 text-[#f78608]" />,
    title: "Gestão e Atendimento",
    image: "/gestao.webp",
    points: [
      "Estratégias de growth aplicadas à realidade do seu restaurante com visão de longo prazo.",
      "Contamos com um time formado e acompanhado de perto por gestores de alta performance."
    ]
  },
  {
    icon: <Megaphone className="w-7 h-7 text-[#f78608]" />,
    title: "Mídia Paga",
    image: "/midia.webp",
    points: [
      "Gestão dos seus anúncios no Instagram, Facebook e iFood.",
      "Impactamos seu público ideal com anúncios feitos para quem tem fome de comprar.",
      "Transformamos desconhecidos em clientes fiéis com tráfego direcionado e estratégia afiada."
    ]
  }
]

export function ResultsCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Cabeçalho com correção de alinhamento de botões */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-4xl text-left">
            <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl text-[#1a1710] mb-6 leading-tight">
              O QUE FAZEMOS?
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-sm md:text-xl text-[#1a1710]/70 font-medium uppercase tracking-widest leading-relaxed">
              A ASSESSORIA <span className="text-[#f78608] font-bold">WEEAT</span> ESTRUTURA O MARKETING DO SEU RESTAURANTE COM BASE NA SUA NECESSIDADE
            </p>
          </div>
          
          {/* Botões corrigidos: mais visíveis e alinhados */}
          <div className="hidden md:flex gap-4 mb-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("left")} 
              className="rounded-full w-14 h-14 border-[#1a1710]/10 text-[#1a1710] hover:bg-[#f78608] hover:text-white hover:border-[#f78608] shadow-sm transition-all duration-300"
            >
              <ChevronLeft className="w-7 h-7" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("right")} 
              className="rounded-full w-14 h-14 border-[#1a1710]/10 text-[#1a1710] hover:bg-[#f78608] hover:text-white hover:border-[#f78608] shadow-sm transition-all duration-300"
            >
              <ChevronRight className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carrossel Full-Width com cards responsivos */}
      <div className="w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-12 px-4 md:px-[calc((100vw-1152px)/2+24px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <Card 
              key={index}
              className="w-[88vw] min-w-[300px] max-w-[420px] md:w-[420px] flex-shrink-0 snap-center rounded-[40px] overflow-hidden group border-none shadow-2xl relative"
            >
              {/* Imagem de Fundo com Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 group-hover:via-black/60 transition-colors duration-500" />

              <CardContent className="p-8 md:p-12 flex flex-col h-full min-h-[520px] relative z-10">
                
                {/* Badge do Ícone */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/20 group-hover:bg-[#f78608]/20 group-hover:border-[#f78608]/40 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-[family-name:var(--font-gate)] text-2xl md:text-3xl text-white mb-3 uppercase leading-tight tracking-wide">
                  {service.title}
                </h3>
                
                <div className="flex items-center text-white/90 font-[family-name:var(--font-poppins)] font-semibold text-xs md:text-sm mb-8 group-hover:text-[#f78608] transition-all cursor-pointer">
                  Saiba mais <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>

                {/* Tópicos em Lista */}
                <div className="space-y-5 mt-auto">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-[#f78608] mt-2.5 shrink-0 shadow-[0_0_10px_rgba(247,134,8,0.5)]" />
                      <p className="font-[family-name:var(--font-poppins)] text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}