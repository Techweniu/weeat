"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ResultsDashboard } from "@/components/results-dashboard"
import { Gallery } from "@/components/gallery"
import { MarketStats } from "@/components/market-stats"
import { ProblemSolution } from "@/components/problem-solution"
import { Ecosystem } from "@/components/ecosystem"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  // Estado para armazenar o plano selecionado (Gold ou Diamond)
  const [selectedPlan, setSelectedPlan] = useState<string>("")

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <HeroSection />
      <LogoCarousel />
      <ResultsDashboard />
      <Gallery />
      <MarketStats />
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      
      {/* Passamos a função de setar o plano para o Pricing */}
      <Pricing onSelectPlan={setSelectedPlan} />
      
      {/* Passamos o plano selecionado para o Formulário preencher */}
      <ContactForm preSelectedPlan={selectedPlan} />
      
      <FinalCTA />
    </div>
  )
}
