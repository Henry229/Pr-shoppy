import React from 'react';

const ProductCard = ({
  product,
  product: { id, image, title, category, price },
}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
      <p>{category}</p>
    </li>
  );
};

export default ProductCard;
