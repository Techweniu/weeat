"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowLeft, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  // Disparo exclusivo do evento ViewContent na consolidação do funil
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Página de Obrigado'
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Brilho Laranja de Fundo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f78608]/20 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[#f78608]/10 rounded-full flex items-center justify-center border border-[#f78608]/20 animate-pulse">
            <CheckCircle2 className="w-12 h-12 text-[#f78608]" aria-hidden="true" />
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl text-white mb-6 leading-tight">
          QUASE TUDO <span className="text-[#f78608]">PRONTO!</span>
        </h1>
        
        <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
          Recebemos os teus dados com sucesso. A nossa equipa de especialistas vai analisar o teu perfil e entrará em contacto contigo em breve para agendar a tua consultoria.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" passHref>
            <Button className="w-full sm:w-auto h-14 px-8 bg-white hover:bg-white/90 text-black font-bold rounded-full gap-2 transition-all">
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Voltar ao Início
            </Button>
          </Link>
          
          <a 
            href="https://instagram.com/weeat.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto h-14 px-8 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full gap-2 transition-all"
          >
            <Instagram className="w-5 h-5 text-[#f78608]" aria-hidden="true" />
            Acompanha no Instagram
          </a>
        </div>
      </div>
    </main>
  )
}