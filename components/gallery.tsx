"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

// Nomes exatos conforme seu diretório
const images = [
  "/caio1.webp",
  "/caio2.webp",
  "/caio3.webp",
  "/sushi1.webp",
  "/sushi2.webp",
  "/sushi3.webp",
  "/sushi4.webp",
  "/tali1.webp",
  "/tali2.webp",
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="bg-[#FFFBF5] py-16 md:py-24 border-b border-[#E5E0D8] overflow-hidden">
      
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-12">
             <h2 className="font-[family-name:var(--font-gate)] text-3xl md:text-4xl text-[#1A1A1A] mb-3">
                Bastidores da Operação
             </h2>
             <p className="text-gray-500 font-[family-name:var(--font-poppins)] max-w-xl mx-auto">
                Clique nas fotos para expandir e ver os detalhes.
             </p>
        </div>

        {/* ========================================================
            DESKTOP VIEW (Grid Interativo)
           ======================================================== */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
           {images.map((img, idx) => (
             <button
               key={idx}
               type="button"
               onClick={() => setSelectedImage(img)}
               aria-label={`Ampliar foto ${idx + 1} dos bastidores`}
               className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-white bg-[#f8f4ef] group hover:scale-[1.02] transition-all duration-300 cursor-zoom-in w-full"
             >
                <Image
                  src={img}
                  alt={`Bastidores weeat ${idx + 1}`}
                  fill
                  loading="lazy"
                  className="object-contain p-4 group-hover:p-3 transition-all duration-300"
                  sizes="(max-width: 1200px) 33vw, 25vw"
                />
                
                {/* Ícone de Zoom que aparece no Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-[#f78608] opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 drop-shadow-md" aria-hidden="true" />
                </div>
             </button>
           ))}
        </div>

        {/* ========================================================
            MOBILE VIEW (Carousel Interativo)
           ======================================================== */}
        <div className="md:hidden">
            <p className="text-center text-sm text-gray-400 mb-6 font-[family-name:var(--font-poppins)]">
            (Toque para ampliar)
            </p>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory pl-6 pr-12 gap-4 pb-8 scrollbar-hide">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        aria-label={`Ampliar foto ${idx + 1} dos bastidores`}
                        className="snap-center shrink-0 w-[85vw] h-[55vh] relative rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white bg-[#f8f4ef] active:scale-95 transition-transform"
                    >
                        <Image
                            src={img}
                            alt={`Bastidores weeat ${idx + 1}`}
                            fill
                            loading="lazy"
                            className="object-contain p-4"
                            sizes="85vw"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full shadow-sm">
                            <ZoomIn className="text-[#f78608] w-5 h-5" aria-hidden="true" />
                        </div>
                    </button>
                ))}
            </div>
        </div>

      </div>

      {/* ========================================================
          LIGHTBOX (Modal de Zoom)
         ======================================================== */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                onClick={() => setSelectedImage(null)} // Fecha ao clicar no fundo
            >
                {/* Botão Fechar */}
                <button
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                  aria-label="Fechar galeria"
                >
                    <X size={40} aria-hidden="true" />
                </button>

                {/* Container da Imagem Expandida */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-full h-full max-w-7xl max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
                >
                    <Image 
                        src={selectedImage}
                        alt="Zoom Imagem"
                        fill
                        className="object-contain"
                        priority
                        quality={100}
                    />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  )
}