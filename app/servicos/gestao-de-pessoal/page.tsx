'use client';

import { ArrowRight, Check, Users, FilePlus, Calendar, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function GestaoDePessoalPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-header text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Gestão de Pessoal Eficiente e sem Erros</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Cuide do seu time com a tranquilidade de ter todas as rotinas do Departamento Pessoal em conformidade com a legislação.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o serviço de Gestão de Pessoal.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105 shadow-lg">
            Otimize seu DP
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Mais Tempo para Cuidar da sua Equipe</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Deixe a burocracia do DP conosco e foque no desenvolvimento e gestão estratégica dos seus colaboradores.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Users size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Conformidade Total</h3>
              <p className="text-gray-600">Garantimos o cumprimento de todas as leis trabalhistas e previdenciárias, evitando multas e processos.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <FilePlus size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Processos Organizados</h3>
              <p className="text-gray-600">Desde a admissão até a rescisão, todos os processos são conduzidos de forma clara e documentada.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Calendar size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Prazos Cumpridos</h3>
              <p className="text-gray-600">Folha de pagamento, impostos e obrigações mensais (eSocial) sempre entregues em dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
           <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Rotinas de DP</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Cobrimos todo o ciclo de vida do colaborador na sua empresa.</p>
           </div>
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Processamento da folha de pagamento e pró-labore.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Cálculo e emissão de guias de INSS, FGTS e IRRF.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Gestão de benefícios (vale-transporte, vale-refeição, etc.).</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Controle de férias, afastamentos e licenças.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Processos de admissão e registro de funcionários.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Cálculos e processos de rescisão de contrato.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Envio das obrigações ao eSocial.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Suporte e orientação sobre a legislação trabalhista.</span></div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Terceirize seu Departamento Pessoal</h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">Reduza custos, minimize riscos e ganhe eficiência. Fale conosco e descubra como podemos ajudar sua empresa.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de uma proposta para o serviço de Gestão de Pessoal.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105">
            <MessageSquare className="mr-3" />
            Receber Proposta
          </a>
        </div>
      </section>
    </div>
  );
}
