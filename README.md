# H'ART - Landing Page

Esta é a página oficial (Landing Page) da **H'ART**, projetada com uma estética minimalista e focada em alta conversão para criação de sites e soluções digitais.

## 🎯 Funcionalidade do Site
O objetivo principal desta Landing Page é apresentar os serviços de desenvolvimento web de forma profissional e sofisticada, direcionando o visitante para duas frentes de contato rápido:
1. **WhatsApp Direto:** Botões estratégicos e flutuantes que levam o cliente direto para o atendimento.
2. **Formulário de Captação (Lead):** Um formulário minimalista integrado que, ao ser preenchido, dispara automaticamente:
   - Um **e-mail** corporativo detalhado via [Resend](https://resend.com/).
   - Uma **notificação instantânea** no celular via [Pushover](https://pushover.net/).

## 💻 Tecnologias Utilizadas
O projeto foi construído priorizando performance, arquitetura limpa e design sob medida.

- **[Next.js](https://nextjs.org/):** Framework React (App Router) responsável pela construção das páginas e execução das rotas de API (Serverless) de forma rápida e segura.
- **[Tailwind CSS (v4)](https://tailwindcss.com/):** Framework de utilitários CSS para estilização completa do site, aplicado para seguir rigorosamente o padrão visual monocromático (Preto e Branco) da marca.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones vetoriais modernos e leves, combinando com o minimalismo da interface.
- **[Google Fonts](https://fonts.google.com/):** Tipografia configurada nativamente pelo Next.js (`next/font/google`), utilizando *Cormorant Garamond* para títulos elegantes e *Inter* para a leitura fluída dos textos.
- **APIs de Terceiros:** Integração via requisições REST nativas para os serviços do Resend (E-mail) e Pushover (Push notifications), controlados através das variáveis de ambiente configuradas localmente e no servidor.
