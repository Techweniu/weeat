"use client"

import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll"

// Caminhos das imagens na pasta public
const images = [
  "/foto1.webp",
  "/foto2.webp",
  "/foto3.webp",
  "/foto4.webp",
  "/foto5.webp",
  "/foto6.webp",
  "/foto7.webp",
  "/foto8.webp",
  "/foto9.webp",
]

export function Gallery() {
  return (
    <section className="bg-[#FFFBF5] border-b border-[#E5E0D8]">
      <div className="container mx-auto pt-10 px-4">
        <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-4xl text-[#1A1A1A] text-center mb-2">
          Galeria de Resultados
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-[#1A1A1A]/70 text-center mb-8">
          Veja o que estamos construindo com nossos parceiros
        </p>
      </div>
      <ParallaxScrollSecond images={images} />
    </section>
  )
}
