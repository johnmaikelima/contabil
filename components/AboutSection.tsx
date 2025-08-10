import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossa Missão é Simplificar a sua Jornada Empreendedora</h1>
            <p className="text-gray-700 text-lg mb-4">
              A Altus Contábil nasceu do desejo de transformar a contabilidade em uma ferramenta de gestão acessível e inteligente para todos os tipos de negócios. Acreditamos que, com a tecnologia como nossa aliada, podemos eliminar a burocracia e oferecer um serviço transparente, ágil e focado no que realmente importa: o sucesso dos nossos clientes.
            </p>
            <p className="text-gray-700 text-lg">
              Nossa equipe é formada por contadores experientes e apaixonados por inovação, prontos para oferecer um atendimento próximo e consultivo. Mais do que apenas cuidar das suas obrigações fiscais, queremos ser o parceiro estratégico que ajuda sua empresa a crescer de forma sustentável.
            </p>
          </div>
          <div>
            <Image 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
              alt="Equipe Altus Contábil em uma reunião"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
