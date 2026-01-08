"use client"
import { useScroll, useTransform, useSpring, motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  })

  // OTIMIZAÇÃO 1: useSpring para suavizar o movimento
  // Isso cria aquele efeito "amanteigado" onde a imagem segue o scroll com um leve atraso suave
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  const scrollY = useSpring(scrollYProgress, springConfig)

  // OTIMIZAÇÃO 2: Parallax apenas Vertical (Mais leve e elegante)
  // Coluna 1 e 3 sobem mais rápido (-150px)
  const translateFirst = useTransform(scrollY, [0, 1], [0, -150])
  // Coluna 2 sobe mais devagar (cria o contraste de profundidade)
  const translateSecond = useTransform(scrollY, [0, 1], [0, -50]) 
  const translateThird = useTransform(scrollY, [0, 1], [0, -150])

  const third = Math.ceil(images.length / 3)
  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className={cn("items-start w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10"
      >
        {/* Coluna 1 */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apenas Y
              key={"grid-1" + idx}
              // OTIMIZAÇÃO 3: will-change-transform força o uso da GPU
              className="will-change-transform"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
                // Ajuda o navegador a carregar o tamanho certo
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Coluna 2 (Meio) */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
                key={"grid-2" + idx} 
                style={{ y: translateSecond }}
                className="will-change-transform"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Coluna 3 */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="will-change-transform"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
