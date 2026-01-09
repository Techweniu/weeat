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
    // Adicionei overflow-hidden para garantir que as imagens rápidas não vazem para outras seções
    <section className="bg-[#FFFBF5] border-b border-[#E5E0D8] overflow-hidden">
      <ParallaxScrollSecond images={images} />
    </section>
  )
}
