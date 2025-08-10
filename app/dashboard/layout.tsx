import Link from 'next/link';
import { Home, Package, Users, LogOut } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          <Link href="/dashboard">Altus DB</Link>
        </div>
        <nav className="flex-grow p-4">
          <ul>
            <li className="mb-2">
              <Link href="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-700">
                <Home className="mr-3" />
                Início
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/planos" className="flex items-center p-3 rounded-lg hover:bg-gray-700">
                <Package className="mr-3" />
                Gerenciar Planos
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/clientes" className="flex items-center p-3 rounded-lg hover:bg-gray-700">
                <Users className="mr-3" />
                Clientes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link href="/" className="flex items-center p-3 rounded-lg hover:bg-gray-700">
            <LogOut className="mr-3" />
            Sair
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
