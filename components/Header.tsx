'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md relative">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Logo />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Início</Link></li>
          <li><Link href="/sobre" className="hover:text-gray-300 transition-colors">Sobre Nós</Link></li>
          <li className="relative group">
            <Link href="/servicos" className="hover:text-gray-300 transition-colors flex items-center py-2">
              Serviços
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <div className="absolute left-0 top-full mt-0 w-64 bg-white text-gray-800 rounded-md shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
              <Link href="/servicos/abertura-de-empresa" className="block px-4 py-2 hover:bg-gray-100">Abertura de Empresa</Link>
              <Link href="/servicos/contabilidade-completa" className="block px-4 py-2 hover:bg-gray-100">Contabilidade Completa</Link>
              <Link href="/servicos/consultoria-financeira" className="block px-4 py-2 hover:bg-gray-100">Consultoria Financeira</Link>
              <Link href="/servicos/gestao-de-pessoal" className="block px-4 py-2 hover:bg-gray-100">Gestão de Pessoal</Link>
            </div>
          </li>
          <li><Link href="/certificados" className="hover:text-gray-300 transition-colors">Certificados</Link></li>
          <li><Link href="/planos" className="hover:text-gray-300 transition-colors">Planos</Link></li>
          <li><Link href="/contato" className="hover:text-gray-300 transition-colors">Contato</Link></li>
        </ul>
        <div className="hidden md:block">
          <Link href="/dashboard/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Área do Cliente
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMounted && isMenuOpen && (
        <div className="md:hidden bg-gray-800 absolute w-full left-0 top-full">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><Link href="/" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li><Link href="/sobre" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link></li>
            <li className="border-b border-gray-700">
              <button onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)} className="w-full text-left flex justify-between items-center hover:text-gray-300 transition-colors">
                Serviços
                <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesMenuOpen && (
                <ul className="pl-4 mt-2 pb-2">
                  <li><Link href="/servicos/abertura-de-empresa" className="block py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Abertura de Empresa</Link></li>
                  <li><Link href="/servicos/contabilidade-completa" className="block py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contabilidade Completa</Link></li>
                  <li><Link href="/servicos/consultoria-financeira" className="block py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Consultoria Financeira</Link></li>
                  <li><Link href="/servicos/gestao-de-pessoal" className="block py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Gestão de Pessoal</Link></li>
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700"><Link href="/certificados" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Certificados</Link></li>
            <li><Link href="/planos" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Planos</Link></li>
            <li><Link href="/contato" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
            <li className="pt-4">
              <Link href="/dashboard/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                Área do Cliente
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
