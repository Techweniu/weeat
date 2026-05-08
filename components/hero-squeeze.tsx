import Image from "next/image";
import { MiniForm } from "./mini-form";
import { ShieldCheck } from "lucide-react";

export function HeroSqueeze() {
  return (
    <div className="w-full flex flex-col min-h-screen relative bg-[#050505]">
      
      {/* ========================================
        MOBILE: IMAGEM NO TOPO
        ========================================
      */}
      <div className="w-full relative z-0 block lg:hidden h-[40vh]">
        <div className="absolute top-0 left-0 w-full p-4 z-30 bg-gradient-to-b from-black/60 to-transparent">
           <div className="relative w-40 h-12">
            <Image 
              src="/logo.webp" 
              alt="weeat Logo" 
              fill
              className="object-contain"
              priority 
            />
          </div>
        </div>

        <Image 
          src="/hero.webp" 
          alt="weeat Hero - Acelere seu Restaurante"
          fill
          className="object-cover object-center" 
          priority 
          sizes="(max-width: 1024px) 100vw, 0vw" 
          quality={80} 
        />
        
        <div className="absolute bottom-0 w-full h-1 bg-[#FF6B00] z-10" />
      </div>

      {/* ========================================
        DESKTOP: LAYOUT SPLIT (RETO 55/45)
        ========================================
      */}
      <div className="absolute inset-y-0 right-0 z-0 w-[45%] hidden lg:block">
        <Image 
          src="/hero.webp" 
          alt="weeat Hero Background Desktop"
          fill
          className="object-cover object-center"
          priority 
          sizes="(min-width: 1024px) 50vw, 0vw" 
          quality={85}
        />
      </div>

      <div className="absolute inset-y-0 right-[45%] w-1 bg-[#FF6B00] hidden lg:block z-10" />

      <div className="absolute inset-y-0 left-0 w-[55%] bg-[#050505] hidden lg:block z-0" />

      {/* ========================================
        CONTEÚDO PRINCIPAL (DESKTOP E MOBILE)
        ========================================
      */}
      <header className="w-full py-6 lg:py-8 lg:px-16 xl:px-24 hidden lg:flex justify-start absolute top-0 left-0 z-30">
        <div className="relative w-56 h-16">
          <Image 
            src="/logo.webp" 
            alt="weeat Logo" 
            fill
            className="object-contain object-left"
            priority 
          />
        </div>
      </header>

      <div className="relative z-20 flex flex-col flex-1 w-full min-h-screen lg:flex-row pt-0 lg:pt-24">
        
        {/* LADO ESQUERDO: Texto e Estatísticas (55%) */}
        {/* ADICIONADO: order-2 (no mobile vai para 2º) e lg:order-1 (no desktop volta para 1º) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-12 lg:pb-24 order-2 lg:order-1">
          
          <div className="w-full space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full">
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
                Marketing para Restaurantes
              </span>
            </div>
            
            <h1 className="font-[family-name:var(--font-gate)] text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.05] uppercase tracking-tight drop-shadow-md">
              Descubra uma forma de vender mais através da internet. Está na hora de deixar <span className="text-[#FF6B00]">Mais dinheiro no seu bolso!</span>
            </h1>
            
            <p className="font-[family-name:var(--font-poppins)] text-base text-white/80 leading-relaxed font-light hidden lg:block max-w-lg">
              Você trabalha 12h por dia só para manter a cozinha rodando. A <span className="text-white font-semibold">weeat</span> muda o jogo com tecnologia própria e estratégia de vendas.
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 pt-4">
              <div className="flex flex-col items-center lg:items-start group">
                <span className="font-[family-name:var(--font-gate)] text-3xl lg:text-4xl text-[#FF6B00] leading-none transition-transform group-hover:scale-110">+80</span>
                <span className="font-[family-name:var(--font-poppins)] text-[10px] text-white/60 uppercase tracking-[0.2em] mt-2 leading-tight">Restaurantes<br/>Atendidos</span>
              </div>
              
              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              
              <div className="flex flex-col items-center lg:items-start group">
                <span className="font-[family-name:var(--font-gate)] text-3xl lg:text-4xl text-[#FF6B00] leading-none transition-transform group-hover:scale-110">3X</span>
                <span className="font-[family-name:var(--font-poppins)] text-[10px] text-white/60 uppercase tracking-[0.2em] mt-2 leading-tight">Retorno sobre<br/>Investimento</span>
              </div>

              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              
              <div className="flex flex-col items-center lg:items-start group">
                <span className="font-[family-name:var(--font-gate)] text-3xl lg:text-4xl text-[#FF6B00] leading-none transition-transform group-hover:scale-110">R$ 0</span>
                <span className="font-[family-name:var(--font-poppins)] text-[10px] text-white/60 uppercase tracking-[0.2em] mt-2 leading-tight">Risco no<br/>1º Passo</span>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Formulário (45%) */}
        {/* ADICIONADO: order-1 (no mobile vai para 1º) e lg:order-2 (no desktop volta para 2º) */}
        <div className="w-full lg:w-[45%] flex justify-center items-center px-6 lg:px-0 lg:pr-32 xl:pr-48 pb-12 lg:pb-0 mt-8 lg:mt-0 isolate order-1 lg:order-2">
          <div className="w-full max-w-md lg:max-w-[420px] flex-shrink-0 z-20">
            <div className="relative bg-[#0a0a0a] lg:bg-[#0a0a0a]/85 lg:backdrop-blur-md border border-white/10 p-6 lg:p-7 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transform-gpu">
              <div className="mb-5 text-center">
                <h2 className="font-[family-name:var(--font-gate)] text-2xl text-white uppercase mb-1">
                  Receba o seu Plano
                </h2>
                <p className="text-white/60 text-xs font-[family-name:var(--font-poppins)]">
                  Descubra quanto dinheiro está a deixar na mesa.
                </p>
              </div>
              
              <MiniForm />

              <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-[10px] font-[family-name:var(--font-poppins)]">
                <ShieldCheck className="w-3 h-3" />
                <span>Dados protegidos e seguros.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}