// ItemListContainer.js
import React from 'react';
import ItemList from './ItemList';
import ItemCollection from './ItemCollection';

const ItemListContainer = () => {
  const items = ItemCollection();

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
