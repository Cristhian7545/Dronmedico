// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Inicio from './Vista/Inicio';
import AlertaDronList from './Vista/AlertaDronList';
import DronStatusList from './Vista/DronStatusList';
import RegistroDron from './Vista/RegistroDron';
import PaginaExtra from './Vista/PaginaExtra';
import PaginaExtra2 from './Vista/PaginaExtra2';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/alertas" element={<AlertaDronList />} />
          <Route path="/estado" element={<DronStatusList />} />
          <Route path="/registro" element={<RegistroDron />} />
          <Route path="/extra" element={<PaginaExtra />} />
          <Route path="/extra2" element={<PaginaExtra2 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
