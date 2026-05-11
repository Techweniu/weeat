"use client"

import Image from "next/image"

// --- SECÇÃO PRINCIPAL (FUNDO BRANCO) - MANTIDA IDÊNTICA AO ORIGINAL, SEM ANIMAÇÕES ---
export function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-12 px-4 flex flex-col items-center text-center w-full min-h-screen relative overflow-hidden">
      
      {/* 1. Logo Centralizada no Topo */}
      <div className="relative w-48 h-16 md:w-56 md:h-20 mb-8 md:mb-12 z-20">
        <Image 
          src="/logo.webp" 
          alt="weeat Logo" 
          fill
          className="object-contain" 
          priority
          sizes="(max-width: 768px) 192px, 224px"
        />
      </div>

      {/* 2. Títulos Originais MANTIDOS EXACTAMENTE COMO NO SEU ARQUIVO */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-20">
        <h1 className="font-[family-name:var(--font-gate)] text-4xl sm:text-5xl md:text-6xl text-[#1a1710] mb-4 leading-[1.1] text-balance">
          Aumente as suas vendas, sem depender do ifood!
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-[#1a1710] mb-8 leading-relaxed max-w-2xl font-medium">
          "Você foca na cozinha e nós vendemos para você!"
        </p>
      </div>

      {/* 3. Imagem Otimizada SEM os Cards Flutuantes (CORRIGIDA PARA NÃO CORTAR) */}
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        {/* Removido o h-[380px] e md:h-[500px] para a caixa esticar junto com a imagem */}
        <div className="w-full max-w-2xl relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1a1710]/10 flex">
          <Image
            src="/cozinheiro.webp"
            alt="Cozinheiro feliz weeat"
            // Trocado "fill" por width e height para manter a proporção sem cortar
            width={800} 
            height={1000} 
            className="w-full h-auto" 
            priority={true}
            fetchPriority="high" 
            sizes="(max-width: 768px) 100vw, 800px" 
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none block md:hidden" />
        </div>
      </div>

      {/* 4. CTA: Botão Original MANTIDO */}
      <div className="w-full px-4 md:px-0 mt-10 z-20">
        <a
          href="#contato"
          className="w-full sm:w-auto bg-[#f78608] hover:bg-[#da7607] text-white rounded-full px-10 py-5 text-lg font-[family-name:var(--font-poppins)] font-bold transition-transform hover:scale-105 shadow-[0_8px_30px_rgba(247,134,8,0.3)] inline-flex items-center justify-center"
        >
          Quero Escalar Meu Faturamento
        </a>
      </div>

    </section>
  )
}