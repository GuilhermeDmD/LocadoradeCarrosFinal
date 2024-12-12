import React, { useEffect, useState } from 'react';

export default function Alugados(){
    const [data, setData] = useState([]); // Define o estado inicial como um array vazio
    const [error, setError] = useState(null); // Estado para erros
    
        useEffect(() => {
            fetch('http://127.0.0.1:5000/alugados') // URL do backend
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.error('Erro ao buscar dados:', error));
        }, []);
        
    return(
    <>
    <div>
    <p>Quanto tá o jetski por 6 anos</p>
    <h1>kdfjlkdjfkldj</h1>
    </div>

    <div>
            <h1>Dados da Tabela 1</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    </>
    )
}