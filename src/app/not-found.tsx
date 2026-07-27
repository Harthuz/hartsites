export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      {/* Redirecionamento nativo pelo navegador sem necessidade de JavaScript */}
      <meta httpEquiv="refresh" content="3;url=/" />

      <div className="max-w-md w-full text-center flex flex-col items-center">
        <h1 className="font-serif text-6xl md:text-8xl text-black mb-6">404</h1>
        
        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4">
          Ops, parece que essa página não existe
        </p>
        
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-10">
          Te redirecionando para página principal...
        </p>
        
        {/* Barra de carregamento com animação CSS pura definida no globals.css */}
        <div className="w-full max-w-xs h-[2px] bg-gray-100 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full bg-black animate-progress-bar" />
        </div>
      </div>
    </div>
  );
}
