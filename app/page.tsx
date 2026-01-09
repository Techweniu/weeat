"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ResultsDashboard } from "@/components/results-dashboard" // <--- Importação Nova
import { Gallery } from "@/components/gallery" 
import { MarketStats } from "@/components/market-stats"
import { ProblemSolution } from "@/components/problem-solution"
import { Ecosystem } from "@/components/ecosystem"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <HeroSection />
      <LogoCarousel />
      
      {/* Painel de Resultados inserido aqui */}
      <ResultsDashboard />
      
      <Gallery />
      <MarketStats />
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      <Pricing />
      
      {/* Formulário de contato antes do CTA Final */}
      <ContactForm /> 
      
      <FinalCTA />
    </div>
  )
}
