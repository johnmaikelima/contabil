'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

// Dados mocados. Em um projeto real, isso viria de um banco de dados.
const initialPlans = [
  {
    id: 1,
    name: 'Essencial',
    price: 'R$ 99',
    description: 'Ideal para MEIs e microempresas que estão começando.',
  },
  {
    id: 2,
    name: 'Profissional',
    price: 'R$ 249',
    description: 'Perfeito para pequenas e médias empresas em crescimento.',
  },
  {
    id: 3,
    name: 'Premium',
    price: 'Consulte-nos',
    description: 'Soluções personalizadas para empresas com necessidades específicas.',
  },
];

export default function GerenciarPlanosPage() {
  const [plans] = useState(initialPlans);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Lógica para adicionar/editar planos viria aqui

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gerenciar Planos</h1>
        <button 
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center hover:bg-green-700 transition-colors">
          <Plus className="mr-2" />
          {isFormVisible ? 'Cancelar' : 'Adicionar Plano'}
        </button>
      </div>

      {isFormVisible && (
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Adicionar Novo Plano</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome do Plano</label>
              <input type="text" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preço (ex: R$ 99)</label>
              <input type="text" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Salvar Plano
            </button>
          </form>
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Planos Cadastrados</h2>
        <div className="space-y-4">
          {plans.map(plan => (
            <div key={plan.id} className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <p className="text-gray-600">{plan.price} - {plan.description}</p>
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800"><Edit /></button>
                <button className="text-red-600 hover:text-red-800"><Trash2 /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
