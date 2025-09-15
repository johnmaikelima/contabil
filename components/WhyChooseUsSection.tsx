import { Clock, ShieldCheck, ThumbsUp, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <ThumbsUp size={40} className="text-green-500" />,
    title: 'Simplicidade e Praticidade',
    description: 'Nossa plataforma é intuitiva e fácil de usar. Resolva sua contabilidade com poucos cliques, de onde estiver.',
  },
  {
    icon: <Clock size={40} className="text-green-500" />,
    title: 'Economize seu Tempo',
    description: 'Deixe a burocracia conosco e ganhe mais tempo para se dedicar ao que realmente importa: o seu negócio.',
  },
  {
    icon: <ShieldCheck size={40} className="text-green-500" />,
    title: 'Segurança e Confiança',
    description: 'Seus dados são protegidos com tecnologia de ponta. Conte com um time de contadores experientes.',
  },
  {
    icon: <TrendingUp size={40} className="text-green-500" />,
    title: 'Foco no seu Crescimento',
    description: 'Oferecemos insights e relatórios que ajudam você a tomar as melhores decisões para sua empresa crescer.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Por que escolher a Altus?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vamos além da contabilidade tradicional para oferecer uma parceria estratégica para o seu sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-green-100 text-green-600 p-4 rounded-full mr-6">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
