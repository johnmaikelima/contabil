import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Briefcase, FileText, Repeat } from 'lucide-react';

const infoCards = [
  {
    icon: <Award size={24} className="text-green-600" />,
    title: 'Certificado Digital',
    href: '/servicos#certificado',
  },
  {
    icon: <Briefcase size={24} className="text-green-600" />,
    title: 'Abertura de Empresa',
    href: '/servicos#abertura',
  },
  {
    icon: <Repeat size={24} className="text-green-600" />,
    title: 'Trocar de Contador',
    href: '/servicos#troca',
  },
  {
    icon: <FileText size={24} className="text-green-600" />,
    title: 'Deixar de ser MEI',
    href: '/servicos#mei',
  },
];

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Contabilidade Digital Inteligente para o seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Na Altus, cuidamos da sua contabilidade para que você possa focar no crescimento da sua empresa. Simples, rápido e online.
            </p>
            <Link href="/planos" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Conheça Nossos Planos
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Profissional de contabilidade trabalhando"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl"
              style={{ clipPath: 'circle(45% at 50% 50%)' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          {infoCards.map((card, index) => (
            <Link href={card.href} key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
              <div className="flex justify-center mb-3">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-green-500 flex items-center justify-center text-sm group-hover:underline">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
