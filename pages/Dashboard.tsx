import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';
import { PlayCircle, BookOpenCheck, Trophy, ArrowRight, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Olá, Candidato(a)</h2>
        <p className="text-gray-500">Pronto para dominar os conceitos da HDI SCA hoje?</p>
      </header>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Questões Respondidas</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <BookOpenCheck size={20} />
            </div>
          </div>
          <div className="mt-auto">
             <span className="text-3xl font-bold text-gray-900">0</span>
             <span className="text-sm text-gray-400 ml-2">de ???</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Média de Acertos</span>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <Trophy size={20} />
            </div>
          </div>
          <div className="mt-auto">
             <span className="text-3xl font-bold text-gray-900">0%</span>
             <span className="text-sm text-gray-400 ml-2">Precisão</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Simulados Completos</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <PlayCircle size={20} />
            </div>
          </div>
          <div className="mt-auto">
             <span className="text-3xl font-bold text-gray-900">0</span>
             <span className="text-sm text-gray-400 ml-2">Realizados</span>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <h3 className="text-lg font-semibold text-gray-800 mt-8">Comece a Praticar</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Study Mode Card */}
        <div 
            onClick={() => navigate(AppRoute.STUDY)}
            className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all cursor-pointer"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <BookOpenCheck size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Modo Estudo</h4>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    Pratique questões sem limite de tempo. Veja as respostas e explicações imediatamente para fixar o conteúdo.
                </p>
                <div className="flex items-center text-primary-600 font-medium text-sm group-hover:underline">
                    Iniciar Estudo <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </div>

        {/* Simulation Mode Card */}
        <div 
            onClick={() => navigate(AppRoute.SIMULATION)}
            className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Clock size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Simulado Oficial</h4>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    Teste seus conhecimentos em condições reais de prova. Temporizador ativado e resultados apenas no final.
                </p>
                <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:underline">
                    Iniciar Simulado <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;