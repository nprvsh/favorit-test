import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectHasBrands, selectSelected } from '@/store/selectors';
import { useScrollToOnMobile } from './useScrollToOnMobile';

export function useResultsLayout() {
  const offersRef = useRef(null);
  const selected = useSelector(selectSelected);
  const hasBrands = useSelector(selectHasBrands);

  useScrollToOnMobile(offersRef, selected);

  return { offersRef, hasBrands };
}
