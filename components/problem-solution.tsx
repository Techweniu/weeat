"use client"

import { X, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// --- COMPONENTES DE APOIO (CARDS) ---

const ProblemCard = () => (
  <Card className="w-full bg-[#0a0a0a] border-2 border-[#EF4444]/30 shadow-none rounded-3xl">
    <CardHeader>
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-[#EF4444]/10 rounded-full flex items-center justify-center shrink-0">
          <span className="text-2xl">😰</span>
        </div>
        <CardTitle className="font-[family-name:var(--font-gate)] text-2xl md:text-3xl text-[#EF4444] leading-tight">
          COMO VOCÊ ESTÁ HOJE
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-5 pb-8">
      {[
        "Pagando até 26% do pedido para o iFood e os clientes são deles, não seus",
        "Fazendo promoção que destrói a margem só para aparecer na vitrine da plataforma",
        "Agência postando foto bonita que não gera pedido nenhum e cobrando por isso",
        "Cheio no sábado, vazio na segunda sem previsibilidade, sem estabilidade",
        "Trabalhando 12 horas por dia sem saber se o dinheiro vai entrar no mês que vem"
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <X className="text-[#EF4444] mt-1 shrink-0" size={22} />
          <p className="font-[family-name:var(--font-poppins)] text-white/90 text-base md:text-lg leading-snug">{item}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

const SolutionCard = () => (
  <Card className="w-full bg-gradient-to-br from-[#f78608]/5 to-[#f78608]/10 border-2 border-[#f78608] shadow-[0_0_30px_rgba(247,134,8,0.1)] rounded-3xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-40 h-40 bg-[#f78608]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    
    <CardHeader>
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-[#f78608]/20 rounded-full flex items-center justify-center shrink-0">
          <span className="text-2xl">🏆</span>
        </div>
        <CardTitle className="font-[family-name:var(--font-gate)] text-2xl md:text-3xl text-[#f78608] leading-tight">
          COMO FICA COM A WEEAT
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-5 pb-8 relative z-10">
      {[
        "Clientes diretos pelo WhatsApp e cardápio próprio sem pagar comissão de plataforma",
        "Anúncios que geram pedido real, não likes, não seguidores, não \"engajamento\"",
        "Relatório semanal com faturamento, pedidos e ROI em linguagem simples",
        "Casa cheia de segunda a domingo com previsibilidade de vendas todo mês",
        "Você foca na cozinha nós cuidamos de tudo no marketing"
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <Check className="text-[#22C55E] mt-1 shrink-0" size={22} />
          <p className="font-[family-name:var(--font-poppins)] text-white font-semibold text-base md:text-lg leading-snug">{item}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

// --- SEÇÃO PRINCIPAL ---

export function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        
        {/* Título Principal - Optei por manter para manter a estrutura visual, 
            mesmo alterando os títulos dos cards como pediu */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl text-white mb-6 leading-tight">
            Qual é o Seu <br className="md:hidden" /> Cenário Hoje?
          </h2>
          <div className="w-20 h-1.5 bg-[#f78608] mx-auto rounded-full" />
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="w-full">
            <ProblemCard />
          </div>
          
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-[#EF4444]/50 to-[#f78608]/50 rounded-full" />
              <span className="text-white/30 font-bold text-sm uppercase tracking-widest">Para</span>
              <div className="w-1 h-8 bg-gradient-to-t from-[#f78608]/50 to-[#EF4444]/50 rounded-full" />
            </div>
          </div>

          <div className="w-full">
            <SolutionCard />
          </div>
        </div>
      </div>
    </section>
  )
}