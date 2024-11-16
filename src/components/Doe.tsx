import React, { useState } from 'react';

const Doe = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleDonateClick = () => {
    // Lógica para processar a doação (ex: integração com API de pagamento)
    alert(`Obrigado pela sua doação, ${donorName}!`);
  };


  return (
    <div className="bg-white">
      <main className="mx-auto p-6">
        {/* Título da Página */}
        <div className="text-center mt-5">
          <h3 className="text-3xl font-semibold text-gray-600">Doação</h3>
        </div>

        {/* Introdução */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Apoie nossa causa!</h2>
          <p className="text-lg text-gray-700 mt-4">
            Sua doação é essencial para continuarmos oferecendo nossos serviços e melhorando a vida de pessoas com deficiência. Qualquer valor faz a diferença!
          </p>
        </div>

        {/* Formas de Doação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <strong className="text-2xl text-black">Pix</strong>
            <p className="mt-2 text-black text-lg leading-relaxed">
              Doe através de Pix utilizando nossa chave: <br />
              <span className="font-bold">doacao@sociedade.org.br</span>
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <strong className="text-2xl text-black">Transferência Bancária</strong>
            <p className="mt-2 text-black text-lg leading-relaxed">
              Banco: 123<br />
              Agência: 4567<br />
              Conta: 890123-4<br />
              Nome: Sociedade dos Cegos
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <strong className="text-2xl text-black">Doação Online</strong>
            <p className="mt-2 text-black text-lg leading-relaxed">
              Se achar mais fácil, doe diretamente pelo nosso QRcode abaixo.
            </p>
            <img className='w-[20vw] h-[20vw] justify-center m-auto mt-6 ' src="../img/qrcode-pix.png" alt="" />
          </div>
          
        </div>
       

        {/* Finalização */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">Agradecemos sua generosidade!</p>
        </div>
      </main>
    </div>

  );
};

export default Doe;
