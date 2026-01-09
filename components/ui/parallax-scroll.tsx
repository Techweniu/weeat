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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  const scrollY = useSpring(scrollYProgress, springConfig)

  // AJUSTE DE VELOCIDADE:
  // Aumentei drasticamente os valores negativos (de -150 para -800/400).
  // Isso faz com que as imagens se movam muito mais rápido que o scroll da página.
  const translateFirst = useTransform(scrollY, [0, 1], [0, -800])
  const translateSecond = useTransform(scrollY, [0, 1], [0, -400]) 
  const translateThird = useTransform(scrollY, [0, 1], [0, -800])

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-8 py-10 px-4"
      >
        {/* Coluna 1 */}
        <div className="grid gap-8">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="will-change-transform"
            >
              <Image
                src={el}
                className="h-64 w-full object-cover object-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#f78608]/20 opacity-90 hover:opacity-100"
                height="400"
                width="400"
                alt="Food result"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Coluna 2 */}
        <div className="grid gap-8">
          {secondPart.map((el, idx) => (
            <motion.div 
                key={"grid-2" + idx} 
                style={{ y: translateSecond }}
                className="will-change-transform"
            >
              <Image
                src={el}
                className="h-64 w-full object-cover object-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#f78608]/20 opacity-90 hover:opacity-100"
                height="400"
                width="400"
                alt="Food result"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Coluna 3 */}
        <div className="grid gap-8">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="will-change-transform"
            >
              <Image
                src={el}
                className="h-64 w-full object-cover object-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#f78608]/20 opacity-90 hover:opacity-100"
                height="400"
                width="400"
                alt="Food result"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
