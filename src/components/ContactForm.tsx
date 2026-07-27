'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="w-full bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Vamos Conversar?</h2>
          <p className="text-gray-500">
            Preencha os dados abaixo e entraremos em contato rapidamente para entender o seu negócio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <label htmlFor="name" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent rounded-none"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="flex-1">
              <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent rounded-none"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">WhatsApp</label>
            <input 
              type="tel" 
              id="whatsapp" 
              name="whatsapp" 
              required
              className="w-full border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent rounded-none"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Como podemos ajudar?</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              required
              className="w-full border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent rounded-none resize-none"
              placeholder="Descreva brevemente o seu projeto..."
            ></textarea>
          </div>

          <div className="flex flex-col items-center mt-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-12 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isSubmitting ? 'Enviando...' : (
                <>
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-sm text-green-600 font-medium">Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
            )}
            
            {submitStatus === 'error' && (
              <p className="mt-4 text-sm text-red-600 font-medium">Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
