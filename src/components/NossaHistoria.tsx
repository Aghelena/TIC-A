import React, { useState } from 'react';

const PageLayout = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year); // Define o ano selecionado
  };

  // Conteúdos correspondentes para cada ano
  const timelineContent = {
    1957: 'A entidade foi fundada em 1957, na cidade de Franca/SP para abrigar os deficientes visuais de ambos os sexos e de várias faixas etárias, a fim de prepará-los para o mercado de trabalho, para o convívio familiar e social, incluindo a alfabetização. Com as novas legislações que regulamentam a Assistência Social no país, e o avanço das políticas públicas voltadas à pessoa com deficiência, a entidade procura progressivamente adequar suas propostas, construindo novas perspectivas para evitar o isolamento e a segregação.',
    1992: 'O espaço físico da entidade é organizado com o intuito de garantir acessibilidade aos usuários. A entidade conta com amplo espaço físico, cuja divisão se dá em: recepção e sala de espera; escritório; sala para coordenação; sala do Serviço Social; sala de Fisioterapia; sala com equipamentos para ginástica; sala de equipe técnica; casa para AVD; auditório; sala de música; sala de artesanato; sala de Braille; sala de informática; sala de estimulação; biblioteca; sala para lupas eletrônicas; 02 quadras de Esporte, sendo 01 coberta; 01 piscina grande para adultos aquecida e outra piscina infantil, 02 áreas com churrasqueira; refeitório; 02 cozinhas; 04 almoxarifados; 03 galpões; 10 quartos individuais, sendo 8 com banheiros; 19 banheiros; praça de Convivência; estacionamento; e lavanderia.',
    2016: 'Desde janeiro de 2016, por meio de parceria com a prefeitura municipal de Franca, através de chamamento público, implantou-se o Serviço de Centro dia para deficientes em situação de dependência e suas famílias, CDPD. A proposta de trabalho é realizada de acordo com a Tipificação dos Serviços Socioassistenciais de 2009, resolução °n 109 de 1 de novembro de 2009. O Serviço consiste no atendimento diário, diurno de pessoas com deficiência entre 18 e 59 anos, onde são oferecidas atividades físicas esportivas, atendimentos psicológicos, pedagógicos, terapia ocupacional e assistência social.',
    2019: 'O município de Franca/SP tem buscado criar mecanismos e serviços para oportunizar que a deficiência não seja utilizada como impedimento à realização de sonhos, desejos e projetos, valorizando o protagonismo e as escolhas das pessoas. Nesse sentido, a Sociedade dos Cegos, através do "Projeto Construindo Sonhos através do Paradesporto", celebra parceria com a Fundação Esporte Arte e Cultura-FEAC, visando ampliar ações de atendimento já existentes e inovando para efetivar garantias previstas na legislação.',
    2024: 'Em 2024, uma parceria inovadora foi firmada entre a sociedade e o UNI FACEF, envolvendo diretamente os alunos do 2º ano do curso de Sistemas de Informação. Como parte dessa colaboração, os estudantes se dedicaram a desenvolver um sistema completo e personalizado para atender às necessidades da sociedade. Esse projeto, além de proporcionar uma experiência prática e enriquecedora para os alunos, contribuiu significativamente para modernizar e otimizar as operações da organização.'
  };

  // Mapeamento de imagens correspondentes a cada ano
  const timelineImages = {
    1957: '../img/1988.png',
    1992: '../img/1992.png',
    2016: '../img/2016.png',
    2019: '../img/2019.png',
    2024: '../img/2024.png'
  };

  return (
    <div className="bg-white">
      <main className=" mx-auto p-6">
        <div className="text-center mt-5">
          <h3 className="text-3xl font-semibold text-gray-600">M | V | V</h3>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">MISSÃO | VISÃO | VALORES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão, Visão e Valores Sections */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <strong className="text-3xl text-black">Missão</strong>
            <p className="mt-2 text-black text-lg text-justify leading-relaxed">
              Estruturar e apoiar no desenvolvimento de um website prático, lúdico, ágil e sustentável que atenda à inclusão social, aplicando recursos de acessibilidade.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <strong className="text-3xl text-black">Visão</strong>
            <p className="mt-2 text-black text-lg text-justify leading-relaxed">
              Ser um site referência no segmento comercial que atenda às expectativas de todos os usuários e ajude na diversificação e desenvolvimento da comunidade.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <strong className="text-3xl text-black">Valores</strong>
            <ul className="list-disc list-inside mt-2 text-black text-lg text-justify leading-relaxed">
              <strong>Inovação:</strong> Estar em constante aprendizado e atualizar os recursos do site.<br />
              <strong>Integração:</strong> Oferecer uma experiência igualitária para todos os usuários.<br />
              <strong>Autonomia:</strong> Fazer mais com menos sem medo de errar.<br />
              <strong>Empatia:</strong> Pensar sempre no usuário final e não deixar os gostos pessoais tomarem conta do projeto.<br />
              <strong>Transparência:</strong> Sempre agir em boa-fé em prol do projeto e outras pessoas.
            </ul>
          </div>
        </div>

        {/* Timeline Title */}
        <div className="text-center mt-12 mb-6">
          <h3 className="text-m font-semibold text-gray-700">Clique no ano de sua escolha para saber mais.</h3>
        </div>

        {/* Timeline Section */}
        <div className="mt-4">
          <div className="relative w-[30vw] mx-auto items-center text-center flex justify-center">
            <div className="border-t-2 border-gray-300 absolute inset-x-0 top-1/2 transform -translate-y-1/2"></div>
            <ul className="relative flex items-center text-center text-gray-700 justify-center">
              {Object.keys(timelineContent).map((year) => (
                <li
                  key={year}
                  className={`flex-1 cursor-pointer mb-5 ${
                    selectedYear === year ? 'border-b-4 border-gray-400 text-gray-900 font-bold' : 'hover:text-gray-900'
                  } p-3 transition duration-300 ease-in-out`}
                  onClick={() => handleYearClick(year)}
                >
                  <span className={`block ${selectedYear === year ? 'scale-105' : ''}`}>{year}</span>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-8 mt-12 justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 w-[30vw] h-[30vw]">
            {selectedYear && (
              <img
                src={timelineImages[selectedYear]} // Exibe a imagem correspondente ao ano selecionado
                alt={`Imagem correspondente ao ano ${selectedYear}`}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            )}
          </div>

          {/* Text Section */}
          <div className="w-[40vw] align-middle text-justify">
            {selectedYear && (
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <p className="text-black text-lg leading-relaxed">{timelineContent[selectedYear]}</p>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default PageLayout;
