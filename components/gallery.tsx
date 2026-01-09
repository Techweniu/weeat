"use client"

import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll"
import Image from "next/image"

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
    <section className="bg-[#FFFBF5] border-b border-[#E5E0D8] overflow-hidden">
      
      {/* DESKTOP VIEW (Parallax Original) */}
      <div className="hidden md:block">
         <ParallaxScrollSecond images={images} />
      </div>

      {/* MOBILE VIEW (Carousel 'Baralho') */}
      <div className="md:hidden py-12">
        <div className="text-center mb-6 px-4">
             <h3 className="font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A] mb-2">
                Bastidores weeat
             </h3>
             <p className="text-sm text-gray-500 font-[family-name:var(--font-poppins)]">
                Deslize para ver mais
             </p>
        </div>

        {/* Lógica do Carousel: 
            - snap-x snap-mandatory: Obriga o scroll a parar no centro da imagem.
            - px-[15%]: Adiciona preenchimento lateral para que a imagem ativa fique no centro,
              mas deixa espaço para as imagens laterais "espreitarem".
            - w-[70vw]: A imagem ocupa 70% da largura da tela.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory px-[15%] gap-4 pb-8 scrollbar-hide">
            {images.slice(0, 5).map((img, idx) => ( // Mostrando apenas 5 fotos no mobile para não pesar
                <div 
                    key={idx} 
                    className="snap-center shrink-0 w-[70vw] relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white"
                >
                    <Image 
                        src={img} 
                        alt={`Bastidores weeat ${idx + 1}`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 70vw, 33vw"
                    />
                </div>
            ))}
            {/* Espaçador final para garantir centralização do último item */}
            <div className="snap-center shrink-0 w-[5vw]" />
        </div>
      </div>
      
    </section>
  )
}
