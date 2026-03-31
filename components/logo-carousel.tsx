"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Lista de logos .webp
const logos = [
  { src: "/logocaiosabeh.webp", alt: "Logo Caio Sabeh" },
  { src: "/logocasatali.webp", alt: "Logo Casa Tali" },
  { src: "/logodinatin.webp", alt: "Logo Dinatin" },
  { src: "/logofratteli.webp", alt: "Logo Fratteli" },
  { src: "/logonabrasa.webp", alt: "Logo Na Brasa" },
  { src: "/casarao.webp", alt: "Logo Casarão" },
  { src: "/Logo-bona-ventura.webp", alt: "Logo Bona Ventura" },
  { src: "/Logo-sollo-pizzas.webp", alt: "Logo Sollo Pizzas" },
]

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

export function LogoCarousel() {
  return (
    <section className="py-10 bg-[#FFFBF5] overflow-hidden border-y-2 border-[#f78608]/30">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-center gap-3 font-[family-name:var(--font-poppins)] text-sm text-[#8C8C8C] uppercase tracking-[0.2em]">
          <span>Parceiros que confiam na</span>
          <div className="relative h-10 w-32 rounded-lg overflow-hidden">
            <Image 
              src="/logoweeat.webp" // Mantendo o caminho correto do arquivo
              alt="WeEat" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
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
            // Identificação das logos para ajuste
            const isCasaTali = logo.src.includes("casatali")
            const isCasarao = logo.src.includes("casarao")
            const isSollo = logo.src.includes("sollo")
            const isBonaVentura = logo.src.includes("bona-ventura") // Nova verificação

            return (
              <div
                key={index}
                className="relative flex-shrink-0 transition-all duration-300 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-pointer"
              >
                <div className="h-12 md:h-16 w-auto relative aspect-[3/1] flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={80}
                    // AJUSTES DE ESCALA:
                    // Sollo reduzida para 1.8 (mesmo tamanho do casarão) para não cortar.
                    // Bona Ventura aumentada levemente para 1.25 (25% maior).
                    className={`object-contain w-full h-full origin-center
                      ${isCasaTali ? "scale-150" : ""}
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

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFBF5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFBF5] to-transparent z-10" />
      </div>
    </section>
  )
}