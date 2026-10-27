import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hydrate } from '@/store/searchSlice';
import { selectQuery, selectSelected } from '@/store/selectors';
import { buildSearchString, readSearchParams } from '@/utils/url';

export function useUrlSync() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const selected = useSelector(selectSelected);

  useEffect(() => {
    const search = buildSearchString({ query, selected });
    if (search === window.location.search) return;
    const method = selected ? 'pushState' : 'replaceState';
    window.history[method](null, '', `${window.location.pathname}${search}`);
  }, [query, selected]);

  useEffect(() => {
    const onPopState = () => dispatch(hydrate(readSearchParams(window.location.search)));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [dispatch]);
}
