import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_DEBOUNCE_MS } from '@/constants/settings';
import { TEXTS } from '@/constants/texts';
import { setQuery } from '@/store/searchSlice';
import { selectBrandsPending, selectQuery } from '@/store/selectors';
import { missingChars } from '@/utils/search';
import { useDebouncedValue } from './useDebouncedValue';

export function useArticleSearch() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const loading = useSelector(selectBrandsPending);
  const [value, setValue] = useState(query);
  const inputRef = useRef(null);
  const number = value.trim();
  const debounced = useDebouncedValue(number, SEARCH_DEBOUNCE_MS);

  useEffect(() => {
    dispatch(setQuery(debounced));
  }, [debounced, dispatch]);

  const clear = useCallback(() => {
    setValue('');
    inputRef.current?.focus();
  }, []);

  const onChange = (event) => setValue(event.target.value);
  const onKeyDown = (event) => {
    if (event.key === 'Escape') clear();
  };

  const missing = missingChars(number);
  const hint = number && missing ? TEXTS.search.moreChars(missing) : TEXTS.search.hint;

  return {
    value,
    inputRef,
    loading,
    hint,
    hasValue: value.length > 0,
    setValue,
    clear,
    onChange,
    onKeyDown,
  };
}
