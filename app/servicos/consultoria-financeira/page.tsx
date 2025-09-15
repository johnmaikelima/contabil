'use client';

import { ArrowRight, Check, DollarSign, TrendingUp, Lightbulb, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function ConsultoriaFinanceiraPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-header text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Consultoria Financeira para seu Negócio</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Tome decisões mais inteligentes e impulsione o crescimento da sua empresa com análises e planejamentos financeiros precisos.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a Consultoria Financeira.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105 shadow-lg">
            Agende uma Análise
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transforme seus Números em Resultados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Nossa consultoria vai além dos relatórios, oferecendo um roteiro claro para a saúde financeira do seu negócio.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <DollarSign size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Otimização de Custos</h3>
              <p className="text-gray-600">Identificamos oportunidades para reduzir despesas e aumentar sua margem de lucro.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <TrendingUp size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Planejamento Estratégico</h3>
              <p className="text-gray-600">Criamos projeções de fluxo de caixa e cenários para guiar seu crescimento com segurança.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Lightbulb size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Decisões Inteligentes</h3>
              <p className="text-gray-600">Fornecemos dados e análises para embasar suas decisões de investimento e expansão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
           <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Abordagem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Um serviço completo para o controle financeiro do seu negócio.</p>
           </div>
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Diagnóstico financeiro completo da empresa.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Análise de indicadores de desempenho (KPIs).</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Elaboração de DRE Gerencial e Fluxo de Caixa.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Planejamento orçamentário e projeções financeiras.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Análise de viabilidade de projetos e investimentos.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Definição de metas e planos de ação.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Reuniões periódicas para acompanhamento.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Suporte para negociações com bancos e fornecedores.</span></div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Quer ter Clareza e Controle sobre suas Finanças?</h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">Vamos conversar sobre os desafios do seu negócio e como nossa consultoria pode ajudar a superá-los.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de agendar uma análise para o serviço de Consultoria Financeira.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105">
            <MessageSquare className="mr-3" />
            Falar com um Consultor
          </a>
        </div>
      </section>
    </div>
  );
}
