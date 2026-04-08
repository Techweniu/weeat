"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"

// Fallbacks de esqueleto para evitar CLS
const LoadingFallback = ({ height }: { height: string }) => (
  <div style={{ minHeight: height, width: '100%', background: 'transparent' }} />
)

const ResultsDashboard = dynamic(() => import("@/components/results-dashboard").then(mod => mod.ResultsDashboard), {
  loading: () => <LoadingFallback height="600px" />
})
const Gallery = dynamic(() => import("@/components/gallery").then(mod => mod.Gallery), {
  loading: () => <LoadingFallback height="400px" />
})
const MarketStats = dynamic(() => import("@/components/market-stats").then(mod => mod.MarketStats), {
  loading: () => <LoadingFallback height="500px" />
})
const ProblemSolution = dynamic(() => import("@/components/problem-solution").then(mod => mod.ProblemSolution), {
  loading: () => <LoadingFallback height="600px" />
})
const Ecosystem = dynamic(() => import("@/components/ecosystem").then(mod => mod.Ecosystem), {
  loading: () => <LoadingFallback height="500px" />
})
const SocialProof = dynamic(() => import("@/components/social-proof").then(mod => mod.SocialProof), {
  loading: () => <LoadingFallback height="400px" />
})
const Pricing = dynamic(() => import("@/components/pricing").then(mod => mod.Pricing), {
  loading: () => <LoadingFallback height="700px" />
})
const FinalCTA = dynamic(() => import("@/components/final-cta").then(mod => mod.FinalCTA), {
  loading: () => <LoadingFallback height="300px" />
})
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm), {
  loading: () => <LoadingFallback height="600px" />
})

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string>("")

  return (
    <main className="min-h-screen bg-[#1a1710]">
      <Header />
      <HeroSection />
      <LogoCarousel />
      <ContactForm />
      <ResultsDashboard />
      <Gallery />
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      <Pricing onSelectPlan={setSelectedPlan} />
      <FinalCTA />
    </main>
  )
}