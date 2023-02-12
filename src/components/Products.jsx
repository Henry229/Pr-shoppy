import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

const Products = () => {
  // const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProducts);
  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
};

export default Products;
