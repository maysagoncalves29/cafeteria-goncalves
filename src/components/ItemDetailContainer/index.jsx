import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { fetchItems } from '../ItemList/mockData';

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        const selectedItem = data.find((item) => item.id === itemId);
        setItem(selectedItem);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemId]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;