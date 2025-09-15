'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Cloud, Check, MousePointerClick, FileCheck, Smile, ShieldCheck, Video, UserCheck, MailCheck } from 'lucide-react';

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
    features: ['Armazenado no computador', 'Ideal para uso diário', 'Assinatura de documentos', 'Acesso a portais do governo', 'Emissão por videoconferência']
  },
];

const pjPlans: Plan[] = [
  { 
    name: 'e-CNPJ A1', 
    price: '149,90', 
    description: 'Validade de 1 ano',
    icon: <Cloud size={32} className="text-green-500" />,
    features: ['Armazenado no computador', 'Emissão de NFe', 'Obrigações fiscais', 'Uso em múltiplos sistemas', 'Emissão por videoconferência']
  },
];

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function CertificadosPage() {
  const [activeTab, setActiveTab] = useState('pj');
  // Inicializar com o plano padrão selecionado
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(pjPlans[0]);

  // Função para selecionar um plano e atualizar o estado
  // Não é usada diretamente no código atual, mas mantida para futuras implementações

  const generateWhatsAppLink = () => {
    // Usar o plano atual com base na aba ativa, mesmo que selectedPlan seja nulo
    const currentPlan = activeTab === 'pf' ? pfPlans[0] : pjPlans[0];
    const message = `Olá! Tenho interesse no Certificado Digital: ${currentPlan.name} (${activeTab.toUpperCase()}) - R$ ${currentPlan.price}. Poderia me ajudar a finalizar a compra?`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  // Não precisamos mais desta variável já que estamos acessando os planos diretamente

  return (
    <div className="bg-white">
      <header className="bg-gradient-header text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <ShieldCheck size={80} className="text-green-400 flex-shrink-0" />
          <div>
            <h1 className="text-5xl font-extrabold">Certificado Digital para PF e PJ</h1>
            <p className="text-xl mt-4 max-w-3xl mx-auto md:mx-0 text-gray-300">Emita ou renove seu certificado digital de forma rápida e segura. Como agente de registro da Quality Certificados, garantimos a melhor experiência.</p>
            <div className="mt-8 text-center">
              <a href="#planos" className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition-colors duration-300 shadow-lg">Ver Planos e Preços</a>
            </div>
          </div>
        </div>
      </header>

      <main id="planos" className="container mx-auto px-4 py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-20">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Escolha o seu certificado</h2>
            <div className="flex items-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="font-medium">Renovar</span>
            </div>
          </div>
          
          {/* Seletores de certificado */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Certificado</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setActiveTab('pf'); setSelectedPlan(null); }}
                  className={`flex items-center border-2 rounded-lg p-3 ${activeTab === 'pf' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                >
                  <div className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center ${activeTab === 'pf' ? 'bg-green-500' : 'border border-gray-400'}`}>
                    {activeTab === 'pf' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span>e-CPF (P. Física)</span>
                </button>
                <button
                  onClick={() => { setActiveTab('pj'); setSelectedPlan(null); }}
                  className={`flex items-center border-2 rounded-lg p-3 ${activeTab === 'pj' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                >
                  <div className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center ${activeTab === 'pj' ? 'bg-green-500' : 'border border-gray-400'}`}>
                    {activeTab === 'pj' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span>e-CNPJ (Empresa)</span>
                </button>
              </div>
              
              <h3 className="text-lg font-medium mt-6 mb-4">Dispositivo</h3>
              <div className="grid grid-cols-1 gap-3">
                <button className="flex items-center border-2 border-green-500 bg-green-50 rounded-lg p-3">
                  <div className="w-5 h-5 rounded-full mr-2 flex items-center justify-center bg-green-500">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>A1 (Digital)</span>
                </button>
              </div>
              
              <h3 className="text-lg font-medium mt-6 mb-4">Validade</h3>
              <div className="grid grid-cols-1 gap-3">
                <button className="flex items-center border-2 border-green-500 bg-green-50 rounded-lg p-3">
                  <div className="w-5 h-5 rounded-full mr-2 flex items-center justify-center bg-green-500">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>12 Meses</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col">
              <div className="bg-blue-900 text-white rounded-lg p-5 text-center mb-6">
                <h3 className="text-3xl font-bold mb-1">{activeTab === 'pf' ? 'e-CPF A1' : 'e-CNPJ A1'}</h3>
                <p className="text-sm opacity-80">Certificado Digital</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {(activeTab === 'pf' ? pfPlans[0].features : pjPlans[0].features).map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-500 line-through text-sm">de R$ {parseInt(activeTab === 'pf' ? pfPlans[0].price : pjPlans[0].price) + 20},00</div>
                  <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">25% OFF</div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-500 text-sm">por</span>
                  <span className="text-3xl font-bold text-gray-900">R$ {activeTab === 'pf' ? pfPlans[0].price : pjPlans[0].price}</span>
                </div>
                
                <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Agendar atendimento pelo WhatsApp
                </a>
                
                <p className="text-xs text-gray-500 text-right mt-2">No boleto ou 3x de R$ {(parseInt(activeTab === 'pf' ? pfPlans[0].price : pjPlans[0].price) / 3).toFixed(2)} no cartão</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-gradient-video text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Emissão por Videoconferência: Rápido, Fácil e de Onde Você Estiver.</h2>
            <p className="mt-4 text-lg text-sky-200">Com a CNH em mãos, você emite seu certificado digital totalmente online, através de uma rápida chamada de vídeo com nossos especialistas. Sem filas, sem deslocamento.</p>
          </div>
          <div>
            <Image src="/cert.png" alt="Emissão de Certificado Digital por Videoconferência" width={500} height={400} className="mx-auto rounded-tl-3xl rounded-br-3xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Emitir seu certificado é muito fácil</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Siga apenas 3 passos simples para ter seu certificado digital em mãos.</p>
           <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><MousePointerClick size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold">1. Escolha e Compre</h3>
                <p className="text-gray-600 mt-1">Selecione o certificado ideal para você e finalize a compra online de forma segura.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><FileCheck size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold">2. Agende a Validação</h3>
                <p className="text-gray-600 mt-1">Agende a validação dos seus dados por videoconferência com um de nossos especialistas.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-20 h-20 mx-auto"><Smile size={40} className="text-green-600"/></div>
                <h3 className="text-xl font-bold">3. Use seu Certificado</h3>
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Como Funciona o Processo de Emissão?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <UserCheck size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">100% Online com CNH</h3>
                <p className="text-gray-600 mt-1">Se você possui CNH (modelo novo com QR Code), todo o processo é feito por videoconferência, sem sair de casa.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Video size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sem CNH? Sem Problemas</h3>
                <p className="text-gray-600 mt-1">Caso não tenha CNH, a validação é feita presencialmente em um de nossos pontos de atendimento. É rápido e seguro.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <MailCheck size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Confirmação por E-mail</h3>
                <p className="text-gray-600 mt-1">Após a confirmação do pagamento, você receberá todas as instruções para a emissão em seu e-mail em até 48 horas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
