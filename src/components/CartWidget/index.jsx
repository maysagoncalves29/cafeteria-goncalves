// CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { items, totalPrice, removeItem } = useCart();

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (cartItemCount === 0) {
    // Não mostra o widget se não houver itens no carrinho
    return null;
  }

  return (
    <div>
      <Link to="/cart">
        <FaShoppingCart style={{ cursor: 'pointer' }} />
        <span>{cartItemCount}</span>
      </Link>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <p>
              {item.quantity} x {item.name} - R${item.price.toFixed(2)} cada
              <button onClick={() => removeItem(item)}>Remover</button>
            </p>
          </div>
        ))}
      </div>
      <p>Total: R${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartWidget;
