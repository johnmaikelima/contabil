'use client';

import { ArrowRight, Zap, ShieldCheck, FileText, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '5511987756034'; // Número oficial da Altus Contábil

export default function AberturaDeEmpresaPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-header text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Abra sua Empresa sem Complicações</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Cuidamos de toda a burocracia para que você possa focar no que realmente importa: o sucesso do seu negócio.</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Quero abrir minha empresa com a Altus Contábil.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105 shadow-lg">
            Fale com um Especialista Agora
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Por que Abrir sua Empresa com a Altus?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Oferecemos um serviço completo, ágil e seguro para você começar sua jornada empreendedora com o pé direito.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Zap size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Processo Rápido</h3>
              <p className="text-gray-600">Seu CNPJ ativo em tempo recorde. Cuidamos de tudo para que você não perca tempo.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <ShieldCheck size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Segurança Total</h3>
              <p className="text-gray-600">Garantimos que sua empresa será constituída com o regime tributário mais vantajoso.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <FileText size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Zero Burocracia</h3>
              <p className="text-gray-600">Deixe a papelada conosco. Cuidamos de todos os registros e licenças necessárias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Processo Simplificado</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Em 4 passos, sua empresa está pronta para operar.</p>
           <div className="relative max-w-4xl mx-auto">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
             <div className="grid md:grid-cols-4 gap-10 relative">
                <div className="text-center z-10">
                  <div className="flex justify-center items-center mb-4 bg-green-100 border-2 border-green-200 rounded-full w-24 h-24 mx-auto"><span className="text-3xl font-bold text-green-600">1</span></div>
                  <h3 className="text-xl font-bold mb-2">Diagnóstico</h3>
                  <p className="text-gray-600">Analisamos seu plano de negócios para definir o melhor tipo de empresa e regime tributário.</p>
                </div>
                <div className="text-center z-10">
                  <div className="flex justify-center items-center mb-4 bg-green-100 border-2 border-green-200 rounded-full w-24 h-24 mx-auto"><span className="text-3xl font-bold text-green-600">2</span></div>
                  <h3 className="text-xl font-bold mb-2">Documentação</h3>
                  <p className="text-gray-600">Coletamos e preparamos todos os documentos necessários para o registro.</p>
                </div>
                <div className="text-center z-10">
                  <div className="flex justify-center items-center mb-4 bg-green-100 border-2 border-green-200 rounded-full w-24 h-24 mx-auto"><span className="text-3xl font-bold text-green-600">3</span></div>
                  <h3 className="text-xl font-bold mb-2">Protocolo</h3>
                  <p className="text-gray-600">Realizamos o protocolo nos órgãos competentes (Junta Comercial, Receita Federal, etc).</p>
                </div>
                <div className="text-center z-10">
                  <div className="flex justify-center items-center mb-4 bg-green-100 border-2 border-green-200 rounded-full w-24 h-24 mx-auto"><span className="text-3xl font-bold text-green-600">4</span></div>
                  <h3 className="text-xl font-bold mb-2">CNPJ Ativo!</h3>
                  <p className="text-gray-600">Entregamos seu CNPJ e todas as licenças para você começar a faturar.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Pronto para Dar o Próximo Passo?</h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">Fale com nossos especialistas e tire todas as suas dúvidas sobre a abertura da sua empresa. A consultoria inicial é por nossa conta!</p>
          <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de uma consultoria gratuita para abrir minha empresa.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-transform hover:scale-105">
            <MessageSquare className="mr-3" />
            Quero Minha Consultoria Gratuita
          </a>
        </div>
      </section>
    </div>
  );
}
