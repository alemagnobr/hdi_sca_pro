import React from 'react';
import { BarChart3 } from 'lucide-react';

const History: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <BarChart3 size={40} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Seu Histórico</h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto">
        Visualize seu progresso ao longo do tempo, áreas de melhoria e histórico de simulados.
      </p>
      <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded-xl text-gray-600 text-sm inline-block">
        Nenhum dado registrado ainda.
      </div>
    </div>
  );
};

export default History;