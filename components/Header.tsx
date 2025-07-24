import Link from 'next/link';

const Logo = () => (
  <svg width="180" height="40" viewBox="0 0 350 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text fill="#FFFFFF" style={{whiteSpace: 'pre'}} fontFamily="Arial" fontSize="60" letterSpacing="0em">
        <tspan x="100" y="55">ALTUS</tspan>
    </text>
    <text fill="#FFFFFF" style={{whiteSpace: 'pre'}} fontFamily="Arial" fontSize="24" letterSpacing="0.1em">
        <tspan x="102" y="75">CONTÁBIL</tspan>
    </text>
    <path d="M82.8018 1.8584L29.538 41.1445V76.088H42.067V50.1172L89.5661 8.97363L82.8018 1.8584Z" fill="#22C55E"/>
    <path d="M29.538 76.088V53.1348L17 62.0693V76.088H29.538Z" fill="#22C55E"/>
    <path d="M54.596 76.088V45.1318L42.067 53.1348V76.088H54.596Z" fill="#22C55E"/>
    <path d="M67.125 76.088V37.126L54.596 45.1318V76.088H67.125Z" fill="#22C55E"/>
  </svg>
);

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex items-center space-x-6">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Início</Link></li>
          <li><Link href="/sobre" className="hover:text-gray-300 transition-colors">Sobre Nós</Link></li>
          <li><Link href="/servicos" className="hover:text-gray-300 transition-colors">Serviços</Link></li>
          <li><Link href="/planos" className="hover:text-gray-300 transition-colors">Planos</Link></li>
          <li><Link href="/contato" className="hover:text-gray-300 transition-colors">Contato</Link></li>
        </ul>
        <div>
          <Link href="/dashboard/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Área do Cliente
          </Link>
        </div>
      </nav>
    </header>
  );
}
