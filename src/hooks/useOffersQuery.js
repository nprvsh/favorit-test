import { useSelector } from 'react-redux';
import { useGetOffersQuery } from '@/api/favoritApi';
import { selectOffersArg, selectSelected } from '@/store/selectors';
import { toAsyncState } from '@/utils/query';

export function useOffersQuery() {
  const arg = useSelector(selectOffersArg);
  const selected = useSelector(selectSelected);
  const result = useGetOffersQuery(arg);

  return {
    selected,
    state: toAsyncState(arg, result),
    isEmpty: !result.currentData?.length,
  };
}
