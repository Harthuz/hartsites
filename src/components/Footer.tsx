export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-3xl tracking-[0.2em] font-medium mb-4">H'ART</span>
          <p className="text-gray-500 text-sm">
            Seu site profissional, sem complicação.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium tracking-widest uppercase">
          <span>Minimalista</span>
          <span>&bull;</span>
          <span>Moderno</span>
          <span>&bull;</span>
          <span>Confiável</span>
          <span>&bull;</span>
          <span>Acessível</span>
        </div>

        <div className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} H'ART. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
