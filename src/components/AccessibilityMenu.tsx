import React, { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom'; // Certifique-se de importar useNavigate

const AccessibilityMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null); // Ref para o menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para lidar com cliques fora do menu
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;
  

  // Adiciona o evento de clique fora do menu
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative rounded-none" ref={menuRef}>
      {/* Botão do menu hamburguer */}
      <button

        onClick={toggleMenu}
          className="bg-[#85D8FB] border-none focus:outline-none"
        >
          <svg
            className={`w-[3vw] h-[3vw] ${isActive('/menu') ? 'text-[#F49F1F]' : 'text-[#142C53] hover:text-[#F49F1F]'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
      </button>
      

      {/* Menu de acessibilidade */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-100 text-base rounded-lg p-4 z-50 ">
          {/* Botão 'Doe' */}
          <button
            onClick={() => navigate('/doe')} 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full hover:bg-[#F49F1F] "
          >
            Doe
          </button>

          {/* Seção Acessibilidade */}
          <div className="mb-4">
            <div className="rounded-lg p-1 z-50">
              <button
                onClick={() => navigate('/acessibilidade')} 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full hover:bg-[#F49F1F] "
              >
                Acessibilidade
              </button>
              <button
                onClick={() => redirect('https://modulos.sfitc.tech')} // Corrigi a rota para a gestão
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full hover:bg-[#F49F1F] "
              >
                Gestão
              </button>
            </div>
          </div>
        </div>
      )}  
    </div>
  );
};

export default AccessibilityMenu;