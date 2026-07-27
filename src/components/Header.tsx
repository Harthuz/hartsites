import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl tracking-[0.2em] font-medium flex items-center">
          H'ART
        </Link>
        
        <nav className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wider text-gray-500">
          <Link href="#sobre" className="hover:text-black transition-colors">Sobre</Link>
          <Link href="#diferenciais" className="hover:text-black transition-colors">Diferenciais</Link>
          <Link href="#contato" className="hover:text-black transition-colors">Contato</Link>
        </nav>
        
        <a 
          href="#contato"
          className="border border-black px-8 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}
