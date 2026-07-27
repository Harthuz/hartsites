import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "H'ART - Seu site profissional, sem complicação.",
  description: "Landing pages modernas, rápidas e acessíveis para pequenas e médias empresas. Foque na sua mensagem e transforme a visão do seu negócio em resultados.",
  keywords: ["criação de sites", "landing page", "desenvolvimento web", "design minimalista", "site institucional"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "H'ART - Criação de Sites Profissionais",
    description: "Landing pages modernas e de alta performance. Materializando a visão do seu negócio.",
    url: "/",
    siteName: "H'ART",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H'ART - Criação de Sites",
    description: "Landing pages modernas, rápidas e acessíveis.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-black font-sans flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YTMGXDR7Q8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YTMGXDR7Q8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
