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
    { id: 1,
      opc: ['Conf. Sistema', 'Conf. Mensagens', 'Sair']
    },
    { id: 2,
      opc: ['Clientes', 'Produtos', 'Funcionarios', 'Fornecedores', 'Cont. Bancarias', 'Maq. Cartão']
    },
    { id: 3,
      opc: ['Entrada de Estoque', ' Importar XML NFe']
    },
    { id: 4,
      opc: ['Fechamento de Caixa', 'Recebimentos Compensações', 'Registrar Sangrias', 'Cadastrar despesas' ]
    },
    { id: 5,
      opc: ['Vendas', 'Reimprimir/Excluir Venda', 'Lista de Condicionais', 'Lista de Orçamentos']
    },
    { id: 6,
      opc: ['Etiquetas de Cód. de Barras', 'Imp. Cadastros de Clientes p/ Excel', 'Imp. cadastros de Produtos Excel', 'Imp. Cadastros de Fornecedores p/ Excel']
    },
    { id: 7,
      opc: ['Relatórios cadastrais', 'Relatórios Financeiros', 'Relatórios Gerenciais']
    },
    { id: 8,
      opc: ['Contactar Suporte', 'FAQ', 'Sobre o Sistema']
    }
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
              className="header-item-btn"
              onClick={() => toggleMenu(item.id)}
              onMouseEnter={() => {
                setIsOpen(true)
                setIdd(item.id)
              }}>
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
