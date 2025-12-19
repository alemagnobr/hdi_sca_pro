import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StudyMode from './pages/StudyMode';
import SimulationMode from './pages/SimulationMode';
import History from './pages/History';
import { AppRoute } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
          <Route path={AppRoute.STUDY} element={<StudyMode />} />
          <Route path={AppRoute.SIMULATION} element={<SimulationMode />} />
          <Route path={AppRoute.HISTORY} element={<History />} />
          <Route path="*" element={<Navigate to={AppRoute.DASHBOARD} replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;