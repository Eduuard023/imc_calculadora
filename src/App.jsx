import React, { useState } from 'react';
import './App.css';
import Introducao from './components/Introducao';
import CalculadoraIMC from './components/CalculadoraIMC';
import TabelaIMC from './components/TabelaIMC';

function App() {
  const [nome, setNome] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Introducao nome={nome} />
        <CalculadoraIMC />
        <TabelaIMC />
      </header>
    </div>
  );
}

export default App;
