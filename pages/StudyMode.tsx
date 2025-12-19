import React from 'react';
import { BookOpen } from 'lucide-react';

const StudyMode: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <BookOpen size={40} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Modo Estudo</h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto">
        Esta área será populada com as questões fáceis, difíceis e muito difíceis que você fornecerá em breve.
      </p>
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm inline-block">
        Aguardando banco de questões...
      </div>
    </div>
  );
};

export default StudyMode;