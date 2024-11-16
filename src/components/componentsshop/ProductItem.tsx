import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  onAddToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductProps> = ({ id, name, price, description, onAddToCart }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-semibold text-gray-700">R${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(id)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductItem;
