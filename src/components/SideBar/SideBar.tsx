import { AiFillProduct } from "react-icons/ai";
import "./SideBar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { FaAddressCard, FaCartPlus } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { useState } from "react";

export default function SideBar() {

  const data = [
    {
      id: 1,
      name: "Produtos",
      icon: <AiFillProduct size={42} />,
    },
    {
      id: 2,
      name: "Clientes",
      icon: <IoPeople size={42} />,
    },
    {
      id: 3,
      name: "Fornecedores",
      icon: <FaAddressCard size={42} />,
    },
    {
      id: 4,
      name: "Vendas",
      icon: <FaCartPlus size={42} />,
    },
    {
      id: 5,
      name: "Caixa",
      icon: <GiWallet size={42} />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        <button
          className={`'sidebarButton' ${isOpen ? 'sidebarButton' : 'sidebarButtonWidth'}`}
          onClick={toggleSidebar}>
          <BiMenuAltLeft className="icons" size={42}/>
        </button>

        <div>
          {data.map((item) => (
            <button key={item.id} className={`'sidebarButton' ${isOpen ? 'sidebarButton' : 'sidebarButtonWidth'}`}>
              {item.icon}
              <p className={`'' ${isOpen ? '' : 'textNone'}`}>
                {item.name}
              </p>
            </button>
          ))}
        </div>

      </div>
    </>
  )
}
