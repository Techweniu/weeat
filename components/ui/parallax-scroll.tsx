"use client"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
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
  
  // ATUALIZADO: Configuração para rolagem da página inteira
  const { scrollYProgress } = useScroll({
    target: gridRef, // Rastreia este elemento específico
    offset: ["start end", "end start"], // Começa a animar quando entra na tela e termina quando sai
  })

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20])

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      // ATUALIZADO: Removido 'h-[40rem]' e 'overflow-y-auto'
      // Agora o componente cresce conforme o conteúdo e usa o scroll da página
      className={cn("items-start w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border-2 border-[#f78608]"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
