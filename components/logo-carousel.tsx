"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Lista de logos .webp
const logos = [
  { src: "/logocasatali.webp", alt: "Logo Casa Tali" },
  { src: "/logodinatin.webp", alt: "Logo Dinatin" },
  { src: "/logofratteli.webp", alt: "Logo Fratteli" },
  { src: "/logonabrasa.webp", alt: "Logo Na Brasa" },
  { src: "/casarao.webp", alt: "Logo Casarão" },
  { src: "/bona-ventura.png", alt: "Logo Bona Ventura" },
  { src: "/Logo-sollo-pizzas.webp", alt: "Logo Sollo Pizzas" },
]

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

export function LogoCarousel() {
  return (
    <section className="py-10 bg-[#2a2718] overflow-hidden border-y-2 border-[#f78608]/40" aria-label="Parceiros weeat">
      <div className="container mx-auto px-4 mb-8">
        <p className="flex items-center justify-center gap-3 font-[family-name:var(--font-poppins)] text-sm text-[#f5f0e8]/80 uppercase tracking-[0.2em]">
          <span>Parceiros que confiam na</span>
          <Image
            src="/logo.webp"
            alt="WeEat"
            width={128}
            height={40}
            className="object-contain rounded-lg"
          />
        </p>
      </div>

      <div className="relative flex items-center overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => {
            const isCasaTali = logo.src.includes("casatali")
            const isCasarao = logo.src.includes("casarao")
            const isSollo = logo.src.includes("sollo")
            const isBonaVentura = logo.src.includes("bona-ventura")
            // Logos duplicadas (índice >= 8) são decorativas para o efeito infinito
            const isDuplicate = index >= logos.length

            return (
              <div
                key={index}
                aria-hidden={isDuplicate ? "true" : undefined}
                className={`group relative flex-shrink-0 transition-all duration-300 cursor-pointer ${isCasaTali ? "brightness-150 hover:brightness-100" : ""}`}
              >
                <div className="h-12 md:h-16 w-auto relative aspect-[3/1] flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={80}
                    sizes="(max-width: 768px) 120px, 180px"
                    // AJUSTES DE ESCALA:
                    // Sollo reduzida para 1.8 (mesmo tamanho do casarão) para não cortar.
                    // Bona Ventura aumentada levemente para 1.25 (25% maior).
                    className={`object-contain w-full h-full origin-center
                      ${isCasaTali ? "scale-[2.2]" : ""}
                      ${isCasarao ? "scale-[1.8]" : ""}
                      ${isSollo ? "scale-[1.8]" : ""} 
                      ${isBonaVentura ? "scale-125" : ""}
                    `}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2a2718] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#2a2718] to-transparent z-10" />
      </div>
    </section>
  )
}