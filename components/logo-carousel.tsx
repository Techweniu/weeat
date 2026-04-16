"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
    <section className="py-12 bg-white overflow-hidden border-t border-[#1a1710]/5" aria-label="Parceiros weeat">
      <div className="container mx-auto px-4 mb-10">
        <p className="flex items-center justify-center gap-3 font-[family-name:var(--font-poppins)] text-sm text-[#1a1710]/50 uppercase tracking-[0.2em] text-center">
          <span>Donos de restaurantes que começaram a vender mais</span>
        </p>
      </div>

      <div className="relative flex items-center overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => {
            const isCasaTali = logo.src.includes("casatali")
            const isDuplicate = index >= logos.length

            return (
              <div
                key={index}
                aria-hidden={isDuplicate ? "true" : undefined}
                className="group relative flex-shrink-0 transition-all duration-300 cursor-pointer h-16 flex items-center"
              >
                {/* SOLUÇÃO CIRÚRGICA: Fundo escuro apenas para a Casa Tali */}
                <div 
                  className={`relative aspect-[3/1] flex items-center justify-center transition-all duration-300 origin-center
                    ${isCasaTali ? "h-14 md:h-20 bg-[#1a1710] rounded-2xl p-2 px-4 shadow-xl -mx-4 group-hover:bg-[#1a1710]/90" : "h-12 md:h-16 h-auto"}
                    group-hover:scale-110 opacity-90 group-hover:opacity-100
                  `}
                >
                  <Image
                    src={logo.src}
                    alt={isDuplicate ? "" : logo.alt}
                    width={180}
                    height={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 96px, 128px"
                    className={`object-contain w-full h-full origin-center transition-transform duration-300
                      ${isCasaTali ? "scale-[1.8]" : "invert-0 brightness-100"}
                      ${logo.src.includes("casarao") ? "scale-[1.8]" : ""}
                      ${logo.src.includes("sollo") ? "scale-[1.8]" : ""}
                      ${logo.src.includes("bona-ventura") ? "scale-125" : ""}
                    `}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Gradientes laterais em Branco para suavizar a entrada/saída */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  )
}