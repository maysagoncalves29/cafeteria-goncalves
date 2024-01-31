// ItemList.jsx
import React, { useState, useEffect } from 'react';
import Item from '../Item';
import { fetchItems } from './mockData';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (items.length === 0) {
      fetchData();
    }
  }, [items]);

  return (
    <div>
      <h2>Product List</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
