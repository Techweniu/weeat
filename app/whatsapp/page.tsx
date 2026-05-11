"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function WhatsappRedirectPage() {
  // Configuração do WhatsApp
  const whatsappNumber = "5534936180667"; 
  const message = "Olá! Gostaria de saber mais sobre como acelerar as vendas do meu restaurante.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Aqui é onde o evento do Pixel/Analytics deve ser disparado
    // Exemplo: if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'Lead'); }

    // Temporizador de 2 segundos (2000 ms) antes de redirecionar
    const timer = setTimeout(() => {
      window.location.href = whatsappLink;
    }, 4000);

    // Limpeza do temporizador caso o utilizador saia antes
    return () => clearTimeout(timer);
  }, [whatsappLink]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden px-4">
      
      {/* Background tecnológico subtil (Mesh Gradient) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[#f78608]/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
        {/* Logo weeat */}
        <div className="relative w-48 h-12 mb-12">
          <Image 
            src="/logo.webp" 
            alt="weeat Logo" 
            fill
            className="object-contain"
            priority 
          />
        </div>

        {/* Estado de Carregamento */}
        <div className="space-y-6 flex flex-col items-center">
          <Loader2 className="w-16 h-16 text-[#f78608] animate-spin mb-4" />
          <h1 className="font-[family-name:var(--font-gate)] text-2xl md:text-3xl text-white uppercase tracking-wide">
            Estamos te redirecionando
          </h1>
          <p className="font-[family-name:var(--font-poppins)] text-white/60">
            Aguarde um momento, por favor.
          </p>
        </div>
      </div>
    </div>
  );
}