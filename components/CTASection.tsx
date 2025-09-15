import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-green-600">
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Pronto para Simplificar sua Contabilidade?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que já confiam na Altus. Deixe a burocracia conosco e foque no seu crescimento.
        </p>
        <Link href="/planos" className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300">
          Conheça Nossos Planos
        </Link>
      </div>
    </section>
  );
}
