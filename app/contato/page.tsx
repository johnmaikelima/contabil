import ContactForm from '@/components/ContactForm';
import { Mail, Phone } from 'lucide-react';

export default function ContatoPage() {
  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre nossos planos? Nossa equipe está pronta para ajudar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start">
              <div className="bg-green-100 text-green-600 p-4 rounded-full mr-6">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Nosso Email</h3>
                <p className="text-gray-600">Envie suas dúvidas para nosso time de especialistas.</p>
                <a href="mailto:contato@altuscontabil.com.br" className="text-green-600 font-semibold hover:underline">
                  contato@altuscontabil.com.br
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start">
              <div className="bg-green-100 text-green-600 p-4 rounded-full mr-6">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Telefone</h3>
                <p className="text-gray-600">Prefere falar com a gente? Ligue para nós.</p>
                <a href="tel:+5511987756034" className="text-green-600 font-semibold hover:underline">
                  (11) 98775-6034
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
