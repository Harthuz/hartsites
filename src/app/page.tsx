import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "H'ART - Criação de Sites",
    "description": "Desenvolvimento de sites profissionais, landing pages e soluções web.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        
        {/* Seção Sobre Minimalista */}
        <section id="sobre" className="w-full bg-white py-24 px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Acreditamos que desenvolver um site não é apenas programar.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              É criar uma <strong className="text-black font-medium">experiência profissional</strong> para empresas que desejam se destacar no digital de forma sofisticada e objetiva. Nós traduzimos a essência do seu negócio em uma presença online marcante.
            </p>
          </div>
        </section>

        <Features />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
