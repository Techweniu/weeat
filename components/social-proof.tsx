"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export function SocialProof() {
  const [investimento, setInvestimento] = useState(1000)
  const retorno = investimento * 25

  // --- LÓGICA DA ANIMAÇÃO DE EXPLOSÃO ---
  const [showExplosion, setShowExplosion] = useState(false)
  const sectionRef = useRef(null)
  // Detecta quando a seção entra na tela. Ajustei a margem para disparar um pouco antes.
  const isInView = useInView(sectionRef, { margin: "-200px", once: true })

  useEffect(() => {
    if (isInView) {
      setShowExplosion(true)
      // Duração total da experiência (overlay + explosão)
      const timer = setTimeout(() => {
        setShowExplosion(false)
      }, 2800)
      
      return () => clearTimeout(timer)
    }
  }, [isInView])
  // -------------------------------------------

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section ref={sectionRef} id="cases" className="py-20 px-4 bg-[#FFFBF5] relative overflow-hidden">
      
      {/* --- OVERLAY DE EXPLOSÃO (Fica por cima de tudo) --- */}
      <AnimatePresence>
        {showExplosion && (
          <motion.div
            // Usei 'fixed' para garantir que cubra a tela toda, independente do scroll
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/70 pointer-events-none"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }} // Mais blur para focar na explosão
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.5 } }}
            transition={{ duration: 0.8 }}
          >
            {/* 🔥 O FOGO GIGANTE E FLUÍDO 🔥 */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ 
                scale: [0, 0.8, 1.5], 
                opacity: [0, 1, 0],   
                rotate: [-10, 0, 10]  
              }}
              transition={{ 
                duration: 2.5,
                times: [0, 0.4, 1], 
                ease: [0.22, 1, 0.36, 1] 
              }}
              // Classe com tamanho de fonte MASSIVO
              className="text-[15rem] md:text-[30rem] absolute leading-none select-none will-change-transform"
              // Sombra laranja intensa para o brilho do fogo
              style={{ filter: "drop-shadow(0 0 50px rgba(247, 134, 8, 1))" }}
            >
              🔥
            </motion.div>

            {/* Texto "Veja seu negócio explodir" */}
            <motion.h2
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.3 } }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
              className="font-[family-name:var(--font-gate)] text-4xl md:text-6xl text-white text-center relative z-10 mt-40 md:mt-60 drop-shadow-2xl px-4"
            >
              Veja seu negócio explodir
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      {/* -------------------------------------------------- */}


      {/* CONTEÚDO NORMAL DA SEÇÃO (CALCULADORA) */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: showExplosion ? 2.6 : 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-gate)] text-4xl md:text-5xl text-[#1A1A1A] mb-6">
            Nosso Propósito é Gerar Faturamento
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: showExplosion ? 2.8 : 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f78608] to-[#da7607] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            {/* Brilho interno do card */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-2 leading-relaxed opacity-90">
                Se você investir
              </p>

              <div className="flex flex-col items-center justify-center mb-6 group">
                <div className="relative inline-block">
                  <input
                    type="number"
                    value={investimento}
                    onChange={(e) => setInvestimento(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className="font-[family-name:var(--font-gate)] text-5xl md:text-7xl border-b-4 border-white/30 group-hover:border-white transition-colors pb-2 px-4 break-words text-wrap max-w-full">
                    {formatMoney(investimento)}
                  </div>
                  <p className="text-sm mt-2 opacity-70 font-[family-name:var(--font-poppins)]">
                    (Clique para editar ou arraste abaixo)
                  </p>
                </div>

                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={investimento}
                  onChange={(e) => setInvestimento(Number(e.target.value))}
                  className="w-full max-w-xs mt-4 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white hover:bg-white/40 transition-all"
                />
              </div>

              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl mb-6 leading-relaxed opacity-90">
                o retorno estimado em pedidos é:
              </p>

              {/* ALTERAÇÃO AQUI: Ajuste responsivo de fonte */}
              <motion.div
                key={retorno}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-[family-name:var(--font-gate)] text-4xl sm:text-5xl md:text-8xl mb-6 text-[#FFFBF5] drop-shadow-md break-words text-wrap leading-tight"
              >
                {formatMoney(retorno)}
              </motion.div>

              <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto">
                Baseado no ROAS médio de 25x dos nossos parceiros ativos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
