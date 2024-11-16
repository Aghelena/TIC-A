import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveFromCart }) => {
  const navigate = useNavigate();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/pix', { state: { total } }); // Passa o total para a página de pagamento
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg  p-6 mx-auto md:w-[20vw]">
      <h2 className="text-2xl font-bold text-gray-700 mb-4"></h2>
      {items.length === 0 ? (
        <p className="text-gray-500 text-center">Seu carrinho está vazio</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
              <div className="flex-1">
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500 ml-2">x{item.quantity}</span>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-gray-700">R${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-600 ml-4 hover:underline transition"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-semibold text-gray-700 text-lg">Total: R${total.toFixed(2)}</p>
      {items.length > 0 && (
        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition focus:outline-none"
        >
          Finalizar Compra
        </button>
      )}
    </div>
  );
};

export default Cart;
