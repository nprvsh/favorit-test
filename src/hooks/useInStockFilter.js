import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOnlyInStock } from '@/store/searchSlice';
import { selectOnlyInStock } from '@/store/selectors';

export function useInStockFilter() {
  const dispatch = useDispatch();
  const onlyInStock = useSelector(selectOnlyInStock);

  const change = useCallback((value) => dispatch(setOnlyInStock(value)), [dispatch]);
  const showAll = useCallback(() => dispatch(setOnlyInStock(false)), [dispatch]);

  return { onlyInStock, change, showAll };
}
