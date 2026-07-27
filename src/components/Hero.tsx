export function Hero() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          SITES CUSTO BENEFÍCIO PARA LANDING PAGE
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Unimos design minimalista, tecnologia e estratégia para criar sites rápidos, modernos e focados em resultados, sempre com o melhor custo-benefício para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#contato"
            className="bg-black text-white border border-black px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-transparent hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <a 
            href="https://www.arfsolar.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-black border border-gray-200 px-10 py-4 text-sm font-medium uppercase tracking-wider hover:border-black transition-all duration-300 w-full sm:w-auto"
          >
            Ver Amostra
          </a>
        </div>
      </div>
    </section>
  );
}
