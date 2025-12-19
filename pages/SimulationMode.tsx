import React from 'react';
import { Clock } from 'lucide-react';

const SimulationMode: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Clock size={40} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Simulado HDI SCA</h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto">
        Aqui você poderá realizar um exame completo simulando as condições da prova real (tempo e pontuação).
      </p>
      <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-sm inline-block">
        Aguardando configuração do exame...
      </div>
    </div>
  );
};

export default SimulationMode;