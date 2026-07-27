import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp({ message = "Olá, gostaria de saber mais sobre a criação de sites com vocês." }: { message?: string }) {
  const whatsappUrl = `https://wa.me/5511917465274?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 stroke-1 group-hover:stroke-2 transition-all" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-medium px-3 py-2 border border-gray-200 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
