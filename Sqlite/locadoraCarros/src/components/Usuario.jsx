import { useState } from "react";
import { useEffect } from "react";
export default function Usuario(){
    const [data, setData] = useState([]); // Define o estado inicial como um array vazio
    const [error, setError] = useState(null); // Estado para erros

    useEffect(() => {
        fetch('http://127.0.0.1:5000/usuarios') // URL do backend
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`); // Lança erro para status de resposta não OK
                }
                return response.json();
            })
            .then((json) => setData(json))
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
                setError(error.message); // Define o erro no estado
            });
    }, []);
    
    return(
    <>
    <h1>Usuário</h1>
    <div>
    
                
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{JSON.stringify(item)}</li>
                        ))}
                    </ul>
            </div>
    </>
    )
} 