import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default Item;
