// src/components/componentsshop/ProductList.tsx
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
};

interface ProductListProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-[70vw] rounded shadow-sm text-black gap-4">
      {products.map((product) => (
        <div key={product.id} className="border  bg-gray-200 p-4 rounded-lg shadow-sm">
          {product.image && (
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
          )}
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">R${product.price.toFixed(2)}</p>
          {product.description && <p className="text-sm text-gray-500 mt-2">{product.description}</p>}
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
