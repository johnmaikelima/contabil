import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 99',
    description: 'Ideal para MEIs e microempresas que estão começando.',
    features: [
      'Contabilidade completa',
      'Emissão de notas fiscais',
      'Cálculo de impostos',
      'Suporte via chat',
    ],
    isFeatured: false,
  },
  {
    name: 'Profissional',
    price: 'R$ 249',
    description: 'Perfeito para pequenas e médias empresas em crescimento.',
    features: [
      'Todos os benefícios do Essencial',
      'Gestão de folha de pagamento',
      'Relatórios gerenciais',
      'Suporte por telefone e vídeo',
    ],
    isFeatured: true,
  },
  {
    name: 'Premium',
    price: 'Consulte-nos',
    description: 'Soluções personalizadas para empresas com necessidades específicas.',
    features: [
      'Todos os benefícios do Profissional',
      'Consultoria tributária',
      'Planejamento financeiro',
      'Gerente de conta dedicado',
    ],
    isFeatured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Planos Flexíveis para seu Negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que melhor se encaixa no seu momento e deixe a contabilidade com a gente.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 flex flex-col ${plan.isFeatured ? 'border-green-500 scale-105 shadow-2xl' : 'border-gray-200 shadow-lg'}`}>
              {plan.isFeatured && (
                <div className="bg-green-500 text-white text-sm font-bold tracking-wider uppercase rounded-full py-1 px-4 self-center mb-6 -mt-12">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-center mb-2">{plan.price}<span className="text-lg font-normal">/mês</span></p>
              <p className="text-gray-500 text-center mb-6 h-16">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contato" className={`w-full text-center font-bold py-3 px-8 rounded-full text-lg transition duration-300 ${plan.isFeatured ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                Contratar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
