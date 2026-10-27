import { useSelector } from 'react-redux';
import { OFFERS_PAGE_SIZE } from '@/constants/settings';
import { selectOffersView, selectSelected } from '@/store/selectors';
import { useIncrementalList } from './useIncrementalList';

export function useOffersView() {
  const selected = useSelector(selectSelected);
  const { visible, total, inStockCount, hiddenCount, hasNoAnalogues } = useSelector(selectOffersView);
  const page = useIncrementalList(visible, OFFERS_PAGE_SIZE);

  return {
    selected,
    total,
    inStockCount,
    hiddenCount,
    hasNoAnalogues,
    items: page.items,
    remaining: page.remaining,
    nextCount: page.nextCount,
    showMore: page.showMore,
  };
}
