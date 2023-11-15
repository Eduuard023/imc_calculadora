import React, { useState } from 'react';

const CalculadoraIMC = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        setResultado(imc.toFixed(2));

        if (imc < 18.5) {
            setClassificacao('Abaixo do Peso');
        } else if (imc < 25) {
            setClassificacao('Peso Normal');
        } else if (imc < 30) {
            setClassificacao('Sobrepeso');
        } else if (imc < 35) {
            setClassificacao('Obesidade I');
        } else if (imc < 40) {
            setClassificacao('Obesidade II');
        } else {
            setClassificacao('Obesidade III');
        }
    };

    return (
        <div>
            <label>
                Altura (cm):
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </label>
            <br />
            <label>
                Peso (kg):
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </label>
            <br />
            <button onClick={calcularIMC}>Calcular</button>
            {resultado && (
                <div>
                    <p>Seu IMC é: {resultado}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
};

export default CalculadoraIMC;
