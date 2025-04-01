import { useState } from 'react';
import './Header.css'

export default function Header() {

  const data = [
    { id: 1, name: 'Arquivos'},
    { id: 2, name: 'Cadastros' },
    { id: 3, name: 'Estoques' },
    { id: 4, name: 'Financeiro' },
    { id: 5, name: 'Vendas' },
    { id: 6, name: 'Ferramentas' },
    { id: 7, name: 'Relatorios' },
    { id: 8, name: 'Ajuda' }
  ]

  const opcId = [
    { id: 1, opc: ['Teste1', 'Teste2'] },
    { id: 2, opc: ['Teste3', 'Teste4'] },
    { id: 3, opc: ['Teste5', 'Teste6'] },
    { id: 4, opc: ['Teste7', 'Teste8'] },
    { id: 5, opc: ['Teste9', 'Teste10'] },
    { id: 6, opc: ['Teste11', 'Teste12'] },
    { id: 7, opc: ['Teste13', 'Teste14'] },
    { id: 8, opc: ['Teste15', 'Teste16'] }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [idd, setIdd] = useState(0);

  function toggleMenu(id: number){
    setIsOpen(!isOpen);
    setIdd(id);
  };

  return (
    <>
      <div className="header">
        {data.map((item) => (
          <div key={item.id} className="header-item-container">
            <button
              className="header-item"
              onClick={() => toggleMenu(item.id)}
              onMouseEnter={() => toggleMenu(item.id)}>
              {item.name}
            </button>

            {/* Renderiza a lista de opções abaixo do botão correspondente */}
            {isOpen && idd === item.id && (
              <div className="dropdown">
                {opcId.find(opcItem => opcItem.id === item.id)?.opc.map((opc, index) => (
                  <button key={index} className="btn-opc">
                    {opc}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
