import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>{item.details}</p>
    </div>
  );
};

export default ItemDetail;