import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const gate = localFont({
  src: [
    {
      path: "../public/fonts/gate-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gate-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-gate",
})

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "weeat", // Alterado de "weeat - Inteligência..." para "weeat"
  description:
    "Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha previsibilidade de vendas e lucro saudável.",
  generator: "v0.app",
icons: {
    icon: [
      {
        url: "/icon.webp",
        href: "/icon.webp",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        href: "/apple-icon.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${gate.variable} ${poppins.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
