import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { removeFromCart } from '../api/firebase';
import { getCart, addToCart, updateToCart } from '../api/axios';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['cart', uid || ''], () => getCart(uid), {
    enabled: !!uid,
    // const cartQuery = useQuery(['cart'], getCart, {
    // staleTime: 1000 * 60,
  });

  const addItem = useMutation((product) => addToCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', uid]);
    },
  });

  const updateItem = useMutation((product) => updateToCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', uid]);
    },
  });

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', uid]);
    },
  });

  return { cartQuery, addItem, updateItem, removeItem };
}
