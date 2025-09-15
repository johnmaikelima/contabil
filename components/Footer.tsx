import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="font-bold text-lg mb-4">Altus Contábil</h3>
          <p className="text-gray-400">Simplificando a contabilidade para o seu sucesso.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/servicos" className="text-gray-400 hover:text-white">Serviços</Link></li>
            <li><Link href="/planos" className="text-gray-400 hover:text-white">Planos</Link></li>
            <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contato</h3>
          <p className="text-gray-400">Email: contato@altuscontabil.com.br</p>
          <p className="text-gray-400">Telefone: (11) 98775-6034</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            {/* Adicionar links para redes sociais aqui */}
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-4">
        <p>&copy; {new Date().getFullYear()} Altus Contábil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
