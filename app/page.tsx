"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarketStats } from "@/components/market-stats"
import { ProblemSolution } from "@/components/problem-solution"
import { Ecosystem } from "@/components/ecosystem"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      <HeroSection />
      <MarketStats />
      <ProblemSolution />
      <Ecosystem />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </div>
  )
}
