import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const gate = localFont({
  src: [
    {
      path: "../public/fonts/gate-regular.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-gate",
  display: "swap",
})

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "weeat",
  description: "Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha previsibilidade de vendas e lucro saudável.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/icon.webp", href: "/icon.webp" }],
    apple: [{ url: "/apple-icon.png", href: "/apple-icon.png" }],
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
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1260964142240541&ev=PageView&noscript=1" 
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}