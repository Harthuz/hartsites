'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Aguarda o carregamento da página (hidratação) para iniciar a barra
    setStart(true);

    // Redireciona para a home em sincronia perfeita com os 3s do CSS
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <h1 className="font-serif text-6xl md:text-8xl text-black mb-6">404</h1>
        
        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4">
          Ops, parece que essa página não existe
        </p>
        
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-10">
          Te redirecionando para página principal...
        </p>
        
        {/* A barra só recebe a animação após o 'start' ficar true */}
        <div className="w-full max-w-xs h-[2px] bg-gray-100 overflow-hidden relative">
          <div className={`absolute left-0 top-0 h-full bg-black ${start ? 'animate-progress-bar' : 'w-0'}`} />
        </div>
      </div>
    </div>
  );
}
