// import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
// import { getProducts } from '../api/firebase';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
  // const queryClient = useQueryClient();

  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery(['products'], getProducts);

  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </ul>
    </section>
  );
};

export default Products;
