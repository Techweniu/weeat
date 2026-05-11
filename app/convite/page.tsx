import { Metadata } from "next";
import { HeroSqueeze } from "@/components/hero-squeeze";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Weeat",
  description: "Pare de trabalhar para pagar taxas. Tenha o seu próprio aplicativo e motor de vendas direto.",
  openGraph: {
    title: "weeat | Aceleração de Lucro",
    description: "Recupere a sua margem de lucro e saia da dependência dos agregadores.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <HeroSqueeze />
      <FloatingWhatsapp />
    </main>
  );
}