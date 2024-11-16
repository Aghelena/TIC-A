import React, { useState, useEffect } from 'react';

function AcessibilidadeWeb() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const aumentarFonte = () => setFontSize((prev) => (prev < 44 ? prev + 2 : prev));
  const diminuirFonte = () => setFontSize((prev) => (prev > 18 ? prev - 2 : prev));
  const resetarFonte = () => setFontSize(16);
  
  const toggleContraste = () => setHighContrast(!highContrast);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [fontSize, highContrast]);
  
  return (
    <div className="flex justify-center items-center p-2 bg-white text-black">
      <div className="flex flex-col space-y-4">
        <button onClick={aumentarFonte} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Aumentar Fonte
        </button>
        <button onClick={diminuirFonte} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Diminuir Fonte
        </button>
        <button onClick={resetarFonte} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition">
          Resetar Fonte
        </button>
        <button onClick={toggleContraste} className={`px-4 py-2 ${highContrast ? 'bg-yellow-500' : 'bg-gray-500'} text-white rounded hover:bg-gray-700 transition`}>
          {highContrast ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste'}
        </button>
      </div>
    </div>
  );
}

export default AcessibilidadeWeb;
