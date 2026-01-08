"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Lista atualizada com os novos nomes dos arquivos .webp
const logos = [
  { src: "/logocaiosabeh.webp", alt: "Logo Caio Sabeh" },
  { src: "/logocasatali.webp", alt: "Logo Casa Tali" }, // Mantive 'loco' conforme você enviou
  { src: "/logodinatin.webp", alt: "Logo Dinatin" },
  { src: "/logofratteli.webp", alt: "Logo Fratteli" },
  { src: "/logonabrasa.webp", alt: "Logo Na Brasa" },
]

// Duplicamos a lista 4x para garantir que o loop seja contínuo em telas grandes
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

export function LogoCarousel() {
  return (
    <section className="py-10 bg-[#FFFBF5] overflow-hidden border-b border-[#E5E0D8]">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center font-[family-name:var(--font-poppins)] text-sm text-[#8C8C8C] uppercase tracking-[0.2em]">
          Parceiros que confiam na WeEat
        </p>
      </div>

      <div className="relative flex items-center overflow-hidden">
        {/* Container da Animação Infinita */}
        <motion.div
          className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30, // Ajuste a velocidade aqui (maior = mais lento)
            ease: "linear",
            repeat: Infinity,
          }}
          // Pausa o carrossel ao passar o mouse
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 transition-all duration-300 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            >
              {/* Container da imagem com proporção fixa */}
              <div className="h-12 md:h-16 w-auto relative aspect-[3/1] flex items-center justify-center">
                 <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Efeito de fade (degradê) nas laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFBF5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFBF5] to-transparent z-10" />
      </div>
    </section>
  )
}
