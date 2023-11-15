import React, { useState, useEffect } from 'react';
import './App.css';
import Introducao from './components/Introducao';
import CalculadoraIMC from './components/CalculadoraIMC';

function App() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const nomeDigitado = prompt('Digite seu nome:');
    setNome(nomeDigitado || 'Visitante');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Introducao nome={nome} />
        <CalculadoraIMC />
      </header>
    </div>
  );
}

export default App;
