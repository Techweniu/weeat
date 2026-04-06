"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// 1. CARREGAMENTO IMEDIATO (Topo do site, não pode atrasar)
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"

// 2. CARREGAMENTO "PREGUIÇOSO" (O navegador carrega em segundo plano)
const ResultsDashboard = dynamic(() => import("@/components/results-dashboard").then(mod => mod.ResultsDashboard))
const Gallery = dynamic(() => import("@/components/gallery").then(mod => mod.Gallery))
const MarketStats = dynamic(() => import("@/components/market-stats").then(mod => mod.MarketStats))
const ProblemSolution = dynamic(() => import("@/components/problem-solution").then(mod => mod.ProblemSolution))
const Ecosystem = dynamic(() => import("@/components/ecosystem").then(mod => mod.Ecosystem))
const SocialProof = dynamic(() => import("@/components/social-proof").then(mod => mod.SocialProof))
const Pricing = dynamic(() => import("@/components/pricing").then(mod => mod.Pricing))
const FinalCTA = dynamic(() => import("@/components/final-cta").then(mod => mod.FinalCTA))
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm))

export default function Home() {
  // Estado para armazenar o plano selecionado (Gold ou Diamond)
  const [selectedPlan, setSelectedPlan] = useState<string>("")

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <HeroSection />
      <LogoCarousel />
            {/* Passamos o plano selecionado para o Formulário preencher */}
      <ContactForm />
      <ResultsDashboard />
      <Gallery />
      
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      
      {/* Passamos a função de setar o plano para o Pricing */}
      <Pricing onSelectPlan={setSelectedPlan} />
      

      
      <FinalCTA />
    </div>
  )
}
