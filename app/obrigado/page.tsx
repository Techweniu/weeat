"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function ObrigadoPage() {
  return (
    <div className="w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Detalhe de fundo borrado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 bg-[#0a0a0a]/60 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
        
        {/* Logo weeat */}
        <div className="relative w-32 h-10 mx-auto mb-2">
          <Image 
            src="/logo.webp" 
            alt="weeat Logo" 
            fill
            className="object-contain"
            priority 
          />
        </div>

        {/* Ícone de Sucesso */}
        <div className="flex justify-center">
          <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-full animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-[#FF6B00]" />
          </div>
        </div>

        {/* Textos */}
        <div className="space-y-3">
          <h1 className="font-[family-name:var(--font-gate)] text-3xl md:text-4xl text-white uppercase tracking-tight">
            Inscrição Recebida!
          </h1>
          <p className="font-[family-name:var(--font-poppins)] text-sm md:text-base text-white/70 leading-relaxed font-light">
            Obrigado pelo seu contato. Nossa equipe de especialistas já está analisando seus dados e entrará em contato em breve.
          </p>
        </div>

        {/* Linha divisória */}
        <div className="w-full h-px bg-white/10" />

        {/* Botão de Voltar */}
        <div className="pt-2">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full h-12 bg-transparent border border-white/10 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/5 text-white/80 hover:text-white rounded-full font-medium transition-all text-sm font-[family-name:var(--font-poppins)] group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  )
}