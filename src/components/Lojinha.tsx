import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/componentsshop/ProductList';
import Cart from '../components/componentsshop/Cart';
import { FaShoppingCart } from 'react-icons/fa';

const productsData = [
    { id: 1, name: 'Product 1', price: 2.0, description: 'Descrição do Produto 1', image: './img/teste.png' },
    { id: 2, name: 'Product 2', price: 2.0, description: 'Descrição do Produto 2', image: './img/teste.png' },
    { id: 3, name: 'Product 3', price: 2.0, description: 'Descrição do Produto 3', image: './img/teste.png' },
    { id: 4, name: 'Product 4', price: 2.0, description: 'Descrição do Produto 4', image: './img/teste.png' },
    { id: 5, name: 'Product 4', price: 2.0, description: 'Descrição do Produto 4', image: './img/teste.png' },
    { id: 6, name: 'Product 4', price: 2.0, description: 'Descrição do Produto 4', image: './img/teste.png' },
    // Adicione mais produtos com suas descrições e imagens
  ];


const Home: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);
  const navigate = useNavigate();

  const addToCart = (id: number) => {
    const product = productsData.find((p) => p.id === id);
    if (product) {
      setCart((prevCart) => {
        const itemInCart = prevCart.find((item) => item.id === id);
        if (itemInCart) {
          return prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/pix');
  };

  return (
    <div className=" p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Bazar SFITC</h1>
      <div className="flex flex-row items-start">
        {/* Lista de Produtos */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductList products={productsData} onAddToCart={addToCart} />
        </div>
        {/* Carrinho */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg ml-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaShoppingCart className="mr-2 text-blue-500" /> Carrinho
          </h2>
          <Cart items={cart} onRemoveFromCart={removeFromCart} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Home;
