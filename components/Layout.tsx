import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Clock, BarChart3, Settings, Menu } from 'lucide-react';
import { AppRoute, NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: AppRoute.DASHBOARD },
    { label: 'Estudar', icon: <BookOpen size={20} />, path: AppRoute.STUDY },
    { label: 'Simulado', icon: <Clock size={20} />, path: AppRoute.SIMULATION },
    { label: 'Histórico', icon: <BarChart3 size={20} />, path: AppRoute.HISTORY },
    // { label: 'Ajustes', icon: <Settings size={20} />, path: AppRoute.SETTINGS },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm z-10">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
            H
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">HDI SCA Prep</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-4 text-white shadow-lg shadow-primary-500/20">
            <p className="text-xs font-medium opacity-80 mb-1">Status Atual</p>
            <p className="font-bold">Iniciante</p>
            <div className="w-full bg-white/20 h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-[10px] mt-1 opacity-80 text-right">0% Concluído</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-20 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
            H
          </div>
          <h1 className="text-lg font-bold text-gray-800">HDI SCA</h1>
        </div>
        <button className="text-gray-500 p-2">
            <Menu size={24} />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden md:p-0 pt-16 pb-20 md:pb-0 scroll-smooth">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
           {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
             const isActive = location.pathname === item.path;
             return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isActive ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 22 })}
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;