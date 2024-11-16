import React, { useState } from 'react';

const TransparencyPage: React.FC = () => {
  const years = ['2024'];
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex flex-col h-[55vw] items-center bg-gray-50">
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">TRANSPARÊNCIA</h1>
        <p className="italic text-gray-500">Transparência</p>
        <div className="my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1L12 2z"
            />
          </svg>
        </div>
        <p className="text-gray-600 mt-4">Selecione o ano para ter acesso ao Relatório de Transparência da Sociedade Francana de Instrução e Trabalho para Cegos.</p>
      </div>
      <div className="grid-cols-3 gap-4 mt-8 justify-center flex">
        {years.map((year, index) => (
          <button
            key={index}
            onClick={() => handleYearClick(year)}
            className="px-4 py-2 rounded-full bg-white text-gray-600 border border-gray-300 hover:bg-blue-100"
          >
            {year}
          </button>
        ))}
      </div>

      {selectedYear && (
        <div className="mt-4 mb-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
            Documentos para o ano de {selectedYear}
          </h2>
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border-b text-left font-semibold text-gray-700">Tópico</th>
                <th className="py-2 px-4 border-b text-left font-semibold text-gray-700">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Estatuto social</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/estatuto-social.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Ata</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/ata.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Assistência social</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/assistencia-social.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Anos</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/anos.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Termos</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/termos.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Planos de trabalho</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/planos-de-trabalho.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Relatório de atividades</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/relatorio-de-atividades.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-gray-700 border-b">Termo de colaboração</td>
                <td className="py-2 px-4 text-gray-700 border-b">
                  <a href="/termo-de-colaboracao.pdf" className="text-blue-500 hover:underline">PDF</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransparencyPage;
