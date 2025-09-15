import Link from 'next/link';
import { BarChart3, Building2, FileText, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Building2 size={40} className="text-green-500" />,
    title: 'Abertura de Empresa',
    description: 'Abrimos sua empresa de forma rápida e sem burocracia, cuidando de todos os detalhes para você começar com o pé direito.',
    slug: 'abertura-de-empresa',
  },
  {
    icon: <FileText size={40} className="text-green-500" />,
    title: 'Contabilidade Completa',
    description: 'Gestão contábil, fiscal e trabalhista. Mantenha suas obrigações em dia e evite problemas com o fisco.',
    slug: 'contabilidade-completa',
  },
  {
    icon: <BarChart3 size={40} className="text-green-500" />,
    title: 'Consultoria Financeira',
    description: 'Análise e planejamento financeiro para otimizar seus resultados e impulsionar o crescimento do seu negócio.',
    slug: 'consultoria-financeira',
  },
  {
    icon: <Users size={40} className="text-green-500" />,
    title: 'Gestão de Pessoal',
    description: 'Processamento da folha de pagamento, pró-labore e todas as rotinas do departamento pessoal.',
    slug: 'gestao-de-pessoal',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos soluções completas em contabilidade para simplificar sua gestão e impulsionar seus resultados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <Link href={`/servicos/${service.slug}`} className="mt-6 inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors self-start">
                Saiba Mais
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
