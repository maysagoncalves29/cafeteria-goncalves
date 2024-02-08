// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      // Item já está no carrinho, atualize a quantidade
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // Adicione um novo item ao carrinho
      setCartItems((prevItems) => [...prevItems, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
