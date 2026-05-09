import type React from "react"
import type { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f78608",
}

export const metadata: Metadata = {
  title: "weeat",
  description: "Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha previsibilidade de vendas e lucro saudável.",
  metadataBase: new URL("https://weeat.com.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.webp", href: "/icon.webp" }],
    apple: [{ url: "/apple-icon.png", href: "/apple-icon.png" }],
  },
  openGraph: {
    title: "weeat",
    description: "Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha previsibilidade de vendas e lucro saudável.",
    url: "https://weeat.com.br",
    siteName: "weeat",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.webp", width: 1200, height: 630, alt: "weeat - Crescimento Real para Food Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "weeat",
    description: "Chega de métricas de vaidade. A weeat é o seu braço de Growth focado em dinheiro no bolso. Tenha previsibilidade de vendas e lucro saudável.",
    images: ["/logo.webp"],
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
        
        {/* --- GOOGLE TAG MANAGER (NOSCRIPT - BODY) --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CVNK362"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* -------------------------------------------- */}

        {/* --- GOOGLE TAG MANAGER (SCRIPT - HEAD) --- */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5CVNK362');
            `,
          }}
        />
        {/* -------------------------------------------- */}

        {/* --- GOOGLE ANALYTICS (gtag.js) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-521XPTZ9BB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-521XPTZ9BB');
          `}
        </Script>
        {/* -------------------------------------------- */}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
