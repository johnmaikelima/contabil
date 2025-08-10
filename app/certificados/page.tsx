'use client';

import { useState } from 'react';
import { CheckCircle, MessageSquare, Cloud, Key, Check, MousePointerClick, FileCheck, Smile, HardDrive, ShieldCheck } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const pfPlans: Plan[] = [
  { 
    name: 'e-CPF A1', 
    price: '119,00', 
    description: 'Validade de 1 ano',
    icon: <Cloud size={32} className="text-green-500" />,
    features: ['Armazenado no computador', 'Ideal para uso diário', 'Assinatura de documentos', 'Acesso a portais do governo']
  },
  { 
    name: 'e-CPF A3 + Token', 
    price: '265,00', 
    description: 'Validade de 3 anos',
    icon: <HardDrive size={32} className="text-green-500" />,
    features: ['Armazenado em mídia (Token)', 'Máxima segurança', 'Portabilidade total', 'Inclui dispositivo Token']
  },
  { 
    name: 'e-CPF A3 (sem token)', 
    price: '139,00', 
    description: 'Validade de 3 anos',
    icon: <Key size={32} className="text-green-500" />,
    features: ['Para quem já possui o Token', 'Mesma segurança do A3', 'Renovação simplificada', '*Requer token compatível']
  },
];

const pjPlans: Plan[] = [
  { 
    name: 'e-CNPJ A1', 
    price: '129,00', 
    description: 'Validade de 1 ano',
    icon: <Cloud size={32} className="text-green-500" />,
    features: ['Armazenado no computador', 'Emissão de NFe', 'Obrigações fiscais', 'Uso em múltiplos sistemas']
  },
  { 
    name: 'e-CNPJ A3 + Token', 
    price: '275,90', 
    description: 'Validade de 3 anos',
    icon: <HardDrive size={32} className="text-green-500" />,
    features: ['Armazenado em mídia (Token)', 'Segurança para transações', 'Portabilidade para sócios', 'Inclui dispositivo Token']
  },
  { 
    name: 'e-CNPJ A3 (sem token)', 
    price: '139,90', 
    description: 'Validade de 3 anos',
    icon: <Key size={32} className="text-green-500" />,
    features: ['Para quem já possui o Token', 'Ideal para renovações', 'Segurança máxima', '*Requer token compatível']
  },
];

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function CertificadosPage() {
  const [activeTab, setActiveTab] = useState('pf');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const generateWhatsAppLink = () => {
    if (!selectedPlan) return '';
    const message = `Olá! Tenho interesse no Certificado Digital: ${selectedPlan.name} (${activeTab.toUpperCase()}) - R$ ${selectedPlan.price}. Poderia me ajudar a finalizar a compra?`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  const plans = activeTab === 'pf' ? pfPlans : pjPlans;

  return (
    <div className="bg-white">
      <header className="bg-gradient-header text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <ShieldCheck size={80} className="text-green-400 flex-shrink-0" />
          <div>
            <h1 className="text-5xl font-extrabold">Certificado Digital para PF e PJ</h1>
            <p className="text-xl mt-4 max-w-3xl mx-auto md:mx-0 text-gray-300">Emita ou renove seu certificado digital de forma rápida e segura. Como agente de registro da Quality Certificados, garantimos a melhor experiência.</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center border-b-2 border-gray-200 mb-12">
            <button onClick={() => { setActiveTab('pf'); setSelectedPlan(null); }} className={`px-8 py-3 text-lg font-semibold transition-colors ${activeTab === 'pf' ? 'border-b-4 border-green-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Pessoa Física (e-CPF)</button>
            <button onClick={() => { setActiveTab('pj'); setSelectedPlan(null); }} className={`px-8 py-3 text-lg font-semibold transition-colors ${activeTab === 'pj' ? 'border-b-4 border-green-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Pessoa Jurídica (e-CNPJ)</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} onClick={() => handleSelectPlan(plan)} className={`text-center p-8 border-2 rounded-xl cursor-pointer transition-all duration-300 shadow-sm ${selectedPlan?.name === plan.name ? 'border-green-500 bg-green-50 scale-105 shadow-xl' : 'border-gray-200 hover:border-green-400 hover:shadow-lg'}`}>
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <p className="text-4xl font-extrabold my-4 text-gray-900">R$ {plan.price}</p>
                <ul className="space-y-2 text-left my-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${selectedPlan?.name === plan.name ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {selectedPlan?.name === plan.name ? 'Selecionado' : 'Escolher Plano'}
                </button>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="text-center mt-16 animate-fade-in">
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-700 transition-transform hover:scale-105 shadow-lg">
                <CheckCircle className="mr-3" />
                Comprar {selectedPlan.name} por R$ {selectedPlan.price}
              </a>
            </div>
          )}
        </div>
      </main>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Emitir seu certificado é muito fácil</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Siga apenas 3 passos simples para ter seu certificado digital em mãos.</p>
           <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><MousePointerClick size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold mb-2">1. Escolha e Compre</h3>
                <p className="text-gray-600">Selecione o certificado ideal para você e finalize a compra online de forma segura.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><FileCheck size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold mb-2">2. Agende a Validação</h3>
                <p className="text-gray-600">Agende a validação dos seus dados por videoconferência com um de nossos especialistas.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><Smile size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold mb-2">3. Use seu Certificado</h3>
                <p className="text-gray-600">Pronto! Após a validação, seu certificado está ativo para você usar onde precisar.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-gradient-cta text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Precisa de ajuda?</h2>
          <p className="text-xl mt-4 max-w-xl mx-auto text-gray-300">Nossa equipe de suporte foi premiada diversas vezes e está aqui para solucionar suas dúvidas.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Preciso de ajuda com meu Certificado Digital.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center bg-slate-900 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-slate-800 transition-transform hover:scale-105 shadow-lg">
            <MessageSquare className="mr-2" />
            Fale com um especialista
          </a>
        </div>
      </section>
    </div>
  );
}
