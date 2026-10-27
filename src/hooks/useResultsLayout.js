import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectHasBrands, selectSelected } from '@/store/selectors';
import { useScrollToResults } from './useScrollToResults';

export function useResultsLayout() {
  const offersRef = useRef(null);
  const selected = useSelector(selectSelected);
  const hasBrands = useSelector(selectHasBrands);

  useScrollToResults(offersRef, selected);

  return { offersRef, hasBrands };
}
