export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-700 mb-8">Bem-vindo ao painel administrativo da Altus Contábil.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Planos Ativos</h2>
          <p className="text-4xl font-extrabold mt-2">3</p>
          <p className="text-gray-500">Total de planos cadastrados</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Novos Clientes (Mês)</h2>
          <p className="text-4xl font-extrabold mt-2">12</p>
          <p className="text-gray-500">Clientes adquiridos este mês</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Tickets de Suporte</h2>
          <p className="text-4xl font-extrabold mt-2">5</p>
          <p className="text-gray-500">Tickets abertos aguardando resposta</p>
        </div>
      </div>
    </div>
  );
}
