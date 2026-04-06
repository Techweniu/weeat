import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script" // Mantemos o import do Script
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
  title: "weeat",
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
{/* Meta Pixel - Apenas Inicialização */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload" // <-- A MÁGICA ACONTECE AQUI
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1260964142240541');
              fbq('track', 'PageView'); 
            `,
          }}
        />
        {/* Noscript alterado para NÃO disparar PageView */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1260964142240541&ev=PageView&noscript=1" 
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}