import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;