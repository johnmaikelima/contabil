const testimonials = [
  {
    quote: 'A Altus transformou a gestão contábil da minha startup. O processo é incrivelmente simples e o suporte é sempre ágil e eficiente. Recomendo!',
    name: 'Juliana Silva',
    title: 'CEO da InovaTech',
  },
  {
    quote: 'Finalmente encontrei uma contabilidade que entende as necessidades do meu e-commerce. A plataforma online economiza muito meu tempo.',
    name: 'Ricardo Mendes',
    title: 'Fundador da Loja Vende+',
  },
  {
    quote: 'Migrei para a Altus e a diferença foi nítida. Relatórios claros, menos burocracia e um atendimento que realmente se importa com meu negócio.',
    name: 'Fernanda Costa',
    title: 'Dona da Café & Cia',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl italic text-gray-400">
            A satisfação de quem confia em nosso trabalho é o nosso maior orgulho.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
              <p className="text-gray-700 italic mb-6">“{testimonial.quote}”</p>
              <div className="text-right">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
