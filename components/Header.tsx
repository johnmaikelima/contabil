'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <Image src="/logoaltus.png" alt="Altus Contábil" width={180} height={40} priority />
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Usar useEffect para garantir que o código só execute no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md relative">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
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
          <a href="https://api.whatsapp.com/send?phone=5511987756034&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20emiss%C3%A3o%20de%20certificado%20digital." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 mr-2" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Agende uma emissão pelo WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Renderizado apenas no cliente */}
      {isMounted && isMenuOpen ? (
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
              <a href="https://api.whatsapp.com/send?phone=5511987756034&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20emiss%C3%A3o%20de%20certificado%20digital." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition-colors flex items-center" onClick={() => setIsMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 mr-2" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Agende uma emissão pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
