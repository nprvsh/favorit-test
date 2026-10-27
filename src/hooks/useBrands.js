import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBrandsQuery } from '@/api/favoritApi';
import { selectBrand } from '@/store/searchSlice';
import { EMPTY_LIST, selectBrandsArg, selectQuery, selectSelected } from '@/store/selectors';
import { toAsyncState } from '@/utils/query';

export function useBrands() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const selected = useSelector(selectSelected);
  const arg = useSelector(selectBrandsArg);
  const result = useGetBrandsQuery(arg);

  const select = useCallback(({ brand, number }) => dispatch(selectBrand({ brand, number })), [dispatch]);

  return {
    query,
    selected,
    items: result.currentData ?? EMPTY_LIST,
    state: toAsyncState(arg, result),
    select,
  };
}
