import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { addNewProduct } from '../api/firebase';
import { getProducts, addNewProduct } from '../api/axios';
// import { useAuthContext } from '../context/AuthContext';

export default function useProducts() {
  const queryClient = useQueryClient();
  // const shoppyAxios = new ShoppyAxios();

  const productsQuery = useQuery(['products'], getProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products']);
      },
    }
  );
  return {
    productsQuery,
    addProduct,
  };
}
