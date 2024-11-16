import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccessibilityMenu from './AccessibilityMenu'; // Importe o AccessibilityMenu aqui

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Função para verificar o caminho ativo
    const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

    return (
        <header>
            <nav className="bg-[#85D8FB] flex items-center text-2xl justify-between p-4">
                <img src="./img/logo1.png" alt="Logo" className="h-12" />
                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className={`flex items-center ${isActive('/') ? 'text-[#F49F1F]' : 'text-[#142C53]'}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-7 h-7 mr-1"
                        >
                            <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path d="M9 22V12h6v10" />
                        </svg>
                    </Link> 
                        <Link to="/nossahistoria" className={`text-[#142C53] ${isActive('/nossahistoria') ? 'text-[#F49F1F]' : ''}`}>Nossa História</Link>
                        <Link to="/info" className={`text-[#142C53] ${isActive('/info') ? 'text-[#F49F1F]' : ''}`}>Acesso à Informação</Link>
                        <Link to="/eventos" className={`text-[#142C53] ${isActive('/eventos') ? 'text-[#F49F1F]' : ''}`}>Eventos</Link>
                        <Link to="/lojinha" className={`text-[#142C53] ${isActive('/lojinha') ? 'text-[#F49F1F]' : ''}`}>Lojinha</Link>
                        <Link to="/login" className={`text-[#142C53] ${isActive('/login') ? 'text-[#F49F1F]' : ''}`}>Voluntário</Link>
                </div>
                {/* Botão e Menu Mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-8 h-8" // Tamanho do ícone do menu
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                {isMobileMenuOpen && (
                    <div className="flex flex-col items-start space-y-4 mt-4 md:hidden">
                        <Link to="/" className={`flex items-center ${isActive('/') ? 'text-[#F49F1F]' : 'text-black'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 mr-1"
                            >
                                <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path d="M9 22V12h6v10" />
                            </svg>
                        </Link>
                        <Link to="/nossahistoria" className={`text-black ${isActive('/nossahistoria') ? 'text-[#F49F1F]' : ''}`}>Nossa História</Link>
                        <Link to="/info" className={`text-black ${isActive('/info') ? 'text-[#F49F1F]' : ''}`}>Acesso à Informação</Link>
                        <Link to="/eventos" className={`text-black ${isActive('/eventos') ? 'text-[#F49F1F]' : ''}`}>Eventos</Link>
                        <Link to="/lojinha" className={`text-black ${isActive('/lojinha') ? 'text-[#F49F1F]' : ''}`}>Lojinha</Link>
                        <Link to="/login" className={`text-black ${isActive('/login') ? 'text-[#F49F1F]' : ''}`}>Voluntário</Link>
                    </div>
                )}
                {/* Acessibilidade */}
                <div className="hidden md:flex">
                    <AccessibilityMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
