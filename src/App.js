import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import Aulas from './pages/Aulas';
import Professores from './pages/Professores';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={Home} />
          <Route path="/alunos" element={Alunos} />
          <Route path="/aulas" element={Aulas} />
          <Route path="/professores" element={Professores} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
