import { URL_PARAMS } from '@/constants/settings';

export function readSearchParams(search) {
  const params = new URLSearchParams(search);
  const brand = params.get(URL_PARAMS.brand);
  const number = params.get(URL_PARAMS.number);

  return {
    query: params.get(URL_PARAMS.query) ?? '',
    selected: brand && number ? { brand, number } : null,
  };
}

export function buildSearchString({ query, selected }) {
  const params = new URLSearchParams();
  if (query) params.set(URL_PARAMS.query, query);
  if (selected) {
    params.set(URL_PARAMS.brand, selected.brand);
    params.set(URL_PARAMS.number, selected.number);
  }
  const search = params.toString();
  return search && `?${search}`;
}
