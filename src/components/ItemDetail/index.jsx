import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount';
import { useCart } from '../CartContext';  // Certifique-se de ajustar o caminho do arquivo

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useCart();
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count > 0 && !isInCart(item.id)) {
      addItem(item, count);
      alert(`Adicionado ${count} ${count === 1 ? 'item' : 'itens'} ao carrinho!`);
    } else if (isInCart(item.id)) {
      alert('Este item já está no carrinho!');
    } else {
      alert('Selecione pelo menos um item para adicionar ao carrinho!');
    }
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <ItemCount
        estoque={15}
        count={count}
        setCount={setCount}
      />

      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>

      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>{item.details}</p>
    </div>
  );
};

export default ItemDetail;
