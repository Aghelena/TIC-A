import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#62CDFF] text-[#142C53] p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                
                {/* Seção da logo e redes sociais */}
                <div className="flex flex-col items-center md:items-start">
                    <img src="../img/logo1.png" alt="Logo" className="h-16 md:h-[4vw] mr-4" />
                    <div className="flex mt-4 space-x-4">
                        <a href="#" aria-label="Facebook">
                            <svg className="w-6 h-6 text-[#142C53]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg className="w-6 h-6 text-[#142C53]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <svg className="w-6 h-6 text-[#142C53]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 349.7V162.3l142.7 93.7-142.7 93.7z" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                {/* Seção de contatos */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-2">Contato</h2>
                    <p className="font-medium">Email: contato@sfitcegos.org.br</p>
                    <p className="font-medium">Telefone: (16) 3721-0467</p>
                </div>
                
                {/* Seção de endereço */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-2">Endereço</h2>
                    <p className="font-medium text-center md:text-left">
                        R. Prof. Laerte Barbosa Cintra, 415 - Vila Totoli, Franca - SP, 14405-138
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
