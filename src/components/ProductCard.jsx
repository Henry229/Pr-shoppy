import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  product,
  product: { id, image, title, category, price },
}) => {
  const navigate = useNavigate();
  return (
    <li
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
      <p>{category}</p>
    </li>
  );
};

export default ProductCard;
