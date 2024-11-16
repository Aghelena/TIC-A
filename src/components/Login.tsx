import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { RegisterFormData } from '../types/types';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState<RegisterFormData>({
    name: '',
    email: '',
    telefone: '',
    birthDate: '',
    gender: '',
    area: ''
  });

  const [registerError, setRegisterError] = useState<string | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

  // Funções para manipular mudanças nos campos de registro
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para validar se os campos estão preenchidos
  const validateForm = (): boolean => {
    const { name, email, telefone, birthDate,  area } = registerData;
    if (!name || !email || !telefone || !birthDate || !area) {
      setRegisterError('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    setRegisterError(null);  // Limpa qualquer erro anterior se o formulário estiver correto
    return true;
  };

  // Função para submeter o registro
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica se os campos estão preenchidos antes de submeter
    if (!validateForm()) {
      return;
    }
    
    try {
      const response = await registerUser(registerData);
      console.log('Registro bem-sucedido:', response.data);
      setRegisterSuccess(true);  // Define como sucesso no registro
    } catch (error) {
      console.error('Erro no registro:', error);
      setRegisterError('Falha no registro. Verifique os dados fornecidos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl text-black font-bold mb-6">CADASTRE-SE AQUI</h2>
        
        {registerSuccess ? (
          <div className="text-center text-black">
            <h3 className="text-xl font-bold mb-4">Cadastro realizado com sucesso!</h3>
            <p className="text-lg">Obrigado por se cadastrar em nosso sistema de voluntariado.</p>
            <p className="text-lg">Em breve, entraremos em contato.</p>
            <button 
              className="mt-6 border-none bg-[#28426C] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#62CDFF]"
              onClick={() => navigate('/home')}
            >
              Voltar para a página inicial
            </button>
          </div>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Nome completo * </label>
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleRegisterChange}
                placeholder="Nome completo"
                className="w-full bg-[#FFFFFF] text-gray-200 px-3 py-2 border-[#A0BB9C] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block text-black text-sm font-bold mb-2">E-mail * </label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="E-mail"
                className="w-full bg-[#FFFFFF] text-gray-200 px-3 py-2 border-[#A0BB9C] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Telefone * </label>
              <input
                type="tel"
                name="telefone"
                value={registerData.telefone}
                onChange={handleRegisterChange}
                placeholder="(xx) xxxxx-xxxx"
                className="w-full bg-[#FFFFFF] text-gray-200 px-3 py-2 border-[#A0BB9C] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Tipo de voluntariado * </label>
              <select
                name="area"
                value={registerData.area}
                onChange={handleRegisterChange}
                className="w-full bg-[#FFFFFF] text-gray-400 px-3 py-2 border-[#A0BB9C] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Selecione uma opção * </option>
                <option value="Educacional">Educacional</option>
                <option value="Saúde">Saúde</option>
                <option value="Assistência Social">Assistência Social</option>
                <option value="Eventos/Entretenimento">Eventos/Entretenimento</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Data de nascimento * </label>
              <input
                type="date"
                name="birthDate"
                value={registerData.birthDate}
                onChange={handleRegisterChange}
                className="w-full bg-[#FFFFFF] text-gray-400 px-3 py-2 border-[#A0BB9C] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Gênero</label>
              <div className="flex items-center space-x-4">
              <label className='text-black'>
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    onChange={handleRegisterChange}
                    className="mr-1"
                  />
                  F
                </label>
                <label className='text-black'>
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    onChange={handleRegisterChange}
                    className="mr-1"
                  />
                  M
                </label>
                <label className='text-black'>
                  <input
                    type="radio"
                    name="gender"
                    value="O"
                    onChange={handleRegisterChange}
                    className="mr-1"
                  />
                  Outro
                </label>
              </div>
            </div>

            {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
            <button className="w-full border-none bg-gray-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-[#5e99fa]">
              CADASTRAR-SE
            </button>

            <p className="text-xs mt-4 text-black">
              Ao clicar em Cadastre-se, você concorda com nossos <a href="#" className="text-blue-700 underline">Termos</a>,
              <a href="#" className="text-blue-700 underline"> Política de Privacidade</a> e <a href="#" className="text-blue-700 underline">Política de Cookies</a>.
              <p>Ao se cadastrar você estará em nosso banco de dados de voluntários e logo será chamado para prestar seus serviços.</p>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
