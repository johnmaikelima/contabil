'use client';

import { ArrowRight, Check, BookOpen, BarChart, Users, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function ContabilidadeCompletaPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-header text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Contabilidade Completa e Estratégica</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Mantenha sua empresa 100% em dia com o fisco e tenha insights valiosos para tomar as melhores decisões.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o serviço de Contabilidade Completa.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105 shadow-lg">
            Quero um Orçamento
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Sua Empresa em Boas Mãos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Vamos além do básico. Oferecemos uma contabilidade que gera valor para o seu negócio.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <BookOpen size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Obrigações em Dia</h3>
              <p className="text-gray-600">Cuidamos de toda a rotina contábil, fiscal e tributária para garantir sua conformidade.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <BarChart size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Relatórios Gerenciais</h3>
              <p className="text-gray-600">Receba balancetes e demonstrativos claros que ajudam você a entender a saúde financeira do seu negócio.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Users size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Departamento Pessoal</h3>
              <p className="text-gray-600">Gestão completa de folha de pagamento, admissões, rescisões e obrigações trabalhistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
           <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços Inclusos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Um pacote completo para sua tranquilidade.</p>
           </div>
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Escrituração contábil e fiscal completa.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Apuração de impostos (Simples Nacional, Lucro Presumido, Lucro Real).</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Entrega de todas as obrigações acessórias (DCTF, ECF, etc.).</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Elaboração de balancetes e balanço patrimonial.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Cálculo de folha de pagamento, férias e 13º salário.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Assessoria para emissão de notas fiscais.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Atendimento e suporte via WhatsApp e E-mail.</span></div>
              <div className="flex items-start"><Check className="text-green-500 mr-3 mt-1 flex-shrink-0"/><span>Planejamento tributário para redução de impostos.</span></div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Receba uma Proposta Personalizada</h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">Entendemos que cada negócio é único. Fale conosco para montarmos um plano de contabilidade que atenda perfeitamente às suas necessidades.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de uma proposta para o serviço de Contabilidade Completa.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105">
            <MessageSquare className="mr-3" />
            Solicitar Proposta
          </a>
        </div>
      </section>
    </div>
  );
}
