"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { Gallery } from "@/components/gallery" 
import { MarketStats } from "@/components/market-stats"
import { ProblemSolution } from "@/components/problem-solution"
import { Ecosystem } from "@/components/ecosystem"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form" // <--- Importação Nova

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <HeroSection />
      <LogoCarousel />
      <Gallery />
      <MarketStats />
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      <Pricing />
      
      {/* Nota: Se você quiser manter o FinalCTA e o Form, 
        pode colocar um em cima do outro, ou substituir o FinalCTA 
        pelo formulário se eles tiverem objetivos conflitantes.
        Aqui coloquei o Form ANTES do FinalCTA (que geralmente é o rodapé/chamada final)
      */}
      <ContactForm /> 
      
      <FinalCTA />
    </div>
  )
}
