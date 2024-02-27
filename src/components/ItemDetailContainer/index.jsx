// ItemDetailContainer.jsx
import React, { useState } from 'react';
import ItemDetail from './ItemDetail';
import { useCart } from './CartContext';

const ItemDetailContainer = ({ item }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({ ...item, quantity });
  };

  const handleFinishPurchase = () => {
    // Here you can add logic to complete the purchase
    console.log('Purchase completed!');
  };

  return (
    <div>
      <ItemDetail item={item} />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        min={1}
      />
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      {quantity === item.stock && (
        <button onClick={handleFinishPurchase}>Finalizar minha compra</button>
      )}
    </div>
  );
};

export default ItemDetailContainer;
