import { Monitor, Smartphone, Rocket, TrendingUp, MapPin, Headset } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Design Minimalista",
    description: "Foco total na mensagem da sua marca, materializando a visão do seu negócio em um layout estratégico e direto.",
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Seu site perfeitamente adaptado para todos os dispositivos, do celular ao desktop.",
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    description: "Tecnologia de ponta para garantir carregamento ultra-rápido e retenção de visitantes.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Estrutura otimizada para os motores de busca, ajudando você a ser encontrado no Google.",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description: "Configuração do perfil da sua empresa para atração de clientes locais.",
  },
  {
    icon: Headset,
    title: "Suporte Pós-Entrega",
    description: "Acompanhamento e suporte técnico garantido após a publicação do seu projeto.",
  }
];

export function Features() {
  return (
    <section id="diferenciais" className="w-full bg-gray-50 py-32 px-6 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Nossos Diferenciais</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Entregamos soluções de excelente custo-benefício, combinando design elegante, desempenho e simplicidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start bg-white p-10 border border-gray-100 hover:border-black transition-colors duration-300">
              <feature.icon className="w-10 h-10 mb-6 text-black stroke-1" />
              <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
