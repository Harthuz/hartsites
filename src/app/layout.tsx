import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
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
  title: "H'ART - Seu site profissional, sem complicação.",
  description: "Landing pages modernas, rápidas e acessíveis para pequenas e médias empresas.",
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
        {children}
      </body>
    </html>
  );
}
