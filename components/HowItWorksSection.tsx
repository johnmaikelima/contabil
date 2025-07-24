import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Escolha seu Plano',
    description: 'Selecione o plano de contabilidade que melhor se adapta às necessidades da sua empresa.',
  },
  {
    number: '02',
    title: 'Coleta de Documentos',
    description: 'Nossa plataforma online facilita o envio de todos os seus documentos de forma segura e organizada.',
  },
  {
    number: '03',
    title: 'Processamento e Análise',
    description: 'Nossos especialistas cuidam de toda a burocracia, processando suas informações e mantendo tudo em dia.',
  },
  {
    number: '04',
    title: 'Relatórios e Suporte',
    description: 'Acesse relatórios claros e conte com nosso time de contadores sempre que precisar.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Em poucos passos, você tem a contabilidade do seu negócio resolvida de forma simples e digital.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6">
              <div className="text-6xl font-extrabold text-gray-200 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 text-gray-300" size={32} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
